/* Interactive hero app replica — behavior layer.
 *
 * Mirrors the real Berd app's home-canvas interactions:
 *   - widgets drag with a 3px threshold (WIDGET_DRAG_THRESHOLD_PX = 3) and
 *     settle with the app's 380ms overshoot spring on release
 *   - sidebar rows / composer only respond visually; nothing navigates
 *   - the clock widget shows real local time (red second hand, like the app)
 *
 * Positions live in a fixed 1440x1024 design space that hero-app.css scales
 * to fit `.hero-app-preview`, so pointer deltas are divided by that scale.
 */
(() => {
  const preview = document.querySelector(".hero-app-preview");
  const app = document.querySelector(".hero-app");
  if (!preview || !app) return;

  const DESIGN_WIDTH = 1440;
  const DESIGN_HEIGHT = 1024;
  const DRAG_THRESHOLD_PX = 3;

  /* Strict startup sequence: blank page grid → blank app → Berd logo →
     character-by-character tagline → home. Every phase is class-gated so a
     slow stylesheet, font, or logo renderer cannot reorder the sequence. */
  const loaderLogo = app.querySelector(".ha-loader__logo");
  const loaderMessage = app.querySelector(".ha-loader__message");
  const loaderText = document.documentElement.lang === "zh-CN"
    ? "不太可靠，却很真诚。笨拙，却很治愈。"
    : loaderMessage?.textContent || "";
  if (loaderMessage) loaderMessage.textContent = "";

  const revealHome = () => {
    app.classList.add("is-home-visible");
    document.body.classList.add("hero-cast-visible", "hero-elements-visible");
  };

  const startSequence = () => {
    /* First reveal the fully styled real app underneath the matching boot
       shell. Only remove that shell after layout/scaling has settled for two
       frames, preventing a smaller intermediate frame on mobile. */
    document.body.classList.add("site-ready");
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
      document.body.classList.add("boot-revealed");
      /* Wait until the matching shell has fully faded before starting the logo,
         so the loader never appears through two overlapping app surfaces. */
      window.setTimeout(() => {
        /* Make the loader visible before rendering its SVG. Safari can defer
           SMIL animation until the SVG receives its first visible paint, so
           its 2.75s phase must begin from that paint—not page initialization. */
        app.classList.add("is-loader-logo");
        if (loaderLogo) window.renderBerdLogo?.(loaderLogo, "v9");
        window.requestAnimationFrame(() => window.requestAnimationFrame(() => {
          window.setTimeout(() => {
            app.classList.remove("is-loader-logo");
            app.classList.add("is-loader-message");
            if (!loaderMessage) {
              revealHome();
              return;
            }
            let character = 0;
            const typeNextCharacter = () => {
              loaderMessage.textContent = loaderText.slice(0, character += 1);
              if (character < loaderText.length) {
                window.setTimeout(typeNextCharacter, 62);
              } else {
                /* Preserve a brief completed-tagline hold before the app UI. */
                window.setTimeout(revealHome, 650);
              }
            };
            typeNextCharacter();
          }, 2750);
        }));
      }, 300);
    }));
  };

  /* CSSOM and fonts must be ready before the boot cover is removed. */
  const stylesReady = [...document.styleSheets].every((sheet) => {
    try { return Boolean(sheet.cssRules); } catch { return true; }
  });
  if (stylesReady) startSequence();
  else window.addEventListener("load", startSequence, { once: true });

  let scale = 1;

  /* ----- scale the 1440x1024 design space to the preview box ----- */
  const applyScale = () => {
    const rect = preview.getBoundingClientRect();
    if (rect.width <= 0) return;
    scale = rect.width / DESIGN_WIDTH;
    app.style.setProperty("--ha-scale", scale.toFixed(5));
  };
  applyScale();
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(applyScale).observe(preview);
  } else {
    window.addEventListener("resize", applyScale);
  }

  /* ----- widget dragging (app: useHomeCanvasViewport beginWidgetDrag) ----- */
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  app.querySelectorAll(".ha-widget[data-draggable]").forEach((widget) => {
    let pointerId = null;
    let didDrag = false;
    let startClient = null;
    let startPos = null;

    widget.addEventListener("pointerdown", (event) => {
      if (typeof event.button === "number" && event.button !== 0) return;
      if (event.target.closest("button")) return;
      pointerId = event.pointerId;
      didDrag = false;
      startClient = { x: event.clientX, y: event.clientY };
      startPos = { x: widget.offsetLeft, y: widget.offsetTop };
      widget.setPointerCapture(pointerId);
    });

    widget.addEventListener("pointermove", (event) => {
      if (pointerId === null || event.pointerId !== pointerId) return;
      const dx = event.clientX - startClient.x;
      const dy = event.clientY - startClient.y;
      if (!didDrag && Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return;
      if (!didDrag) {
        didDrag = true;
        widget.classList.add("is-dragging");
        widget.classList.remove("is-settling");
      }
      const width = widget.offsetWidth;
      const height = widget.offsetHeight;
      widget.style.left = `${clamp(startPos.x + dx / scale, -width * 0.4, DESIGN_WIDTH - width * 0.6)}px`;
      widget.style.top = `${clamp(startPos.y + dy / scale, -height * 0.3, DESIGN_HEIGHT - height * 0.5)}px`;
    });

    const endDrag = (event) => {
      if (pointerId === null || event.pointerId !== pointerId) return;
      pointerId = null;
      if (didDrag) {
        widget.classList.remove("is-dragging");
        widget.classList.add("is-settling");
        widget.addEventListener(
          "animationend",
          () => widget.classList.remove("is-settling"),
          { once: true },
        );
      }
    };
    widget.addEventListener("pointerup", endDrag);
    widget.addEventListener("pointercancel", endDrag);
  });

  /* ----- cube motion impulses (app: ProjectArtifactWidget pointer moves
           feed clamped impulses into the tile renderer) ----- */
  const cubeWidget = app.querySelector(".ha-cube");
  const cubeFrame = cubeWidget ? cubeWidget.querySelector("iframe") : null;
  if (cubeWidget && cubeFrame) {
    const clampImpulse = (value) =>
      Number.isFinite(value) ? Math.max(-0.3, Math.min(0.3, value)) : 0;
    let lastPointer = null;
    let activePointer = null;
    const sendToModel = (type, detail = {}) => {
      cubeFrame.contentWindow?.postMessage({ type, ...detail }, window.location.origin);
    };
    cubeWidget.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      activePointer = event.pointerId;
      lastPointer = { time: event.timeStamp, x: event.clientX, y: event.clientY };
      cubeWidget.setPointerCapture(event.pointerId);
      cubeWidget.classList.add("is-model-dragging");
      sendToModel("berd-cube-drag-start");
      event.preventDefault();
    });
    cubeWidget.addEventListener("pointermove", (event) => {
      const current = { time: event.timeStamp, x: event.clientX, y: event.clientY };
      const previous = lastPointer;
      lastPointer = current;
      if (!previous || !cubeFrame.contentWindow) return;
      const rect = cubeWidget.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const deltaX = current.x - previous.x;
      const deltaY = current.y - previous.y;
      if (Math.abs(deltaX) < 0.5 && Math.abs(deltaY) < 0.5) return;
      const normalizedX = deltaX / rect.width;
      const normalizedY = deltaY / rect.height;
      /* Velocity boost, same curve as the app's getPointerVelocityBoost. */
      const seconds = Math.max(current.time - previous.time, 8) / 1000;
      const velocity = Math.hypot(normalizedX, normalizedY) / seconds;
      const boost = Math.max(0.9, Math.min(3.1, 1 + velocity * 0.22));
      const dragging = activePointer === event.pointerId;
      sendToModel("berd-cube-impulse", {
        deltaX: clampImpulse(normalizedX * (dragging ? 1 : boost)),
        deltaY: clampImpulse(normalizedY * (dragging ? 1 : boost)),
        dragging,
      });
    });
    const endModelDrag = (event) => {
      if (activePointer !== event.pointerId) return;
      activePointer = null;
      lastPointer = null;
      cubeWidget.classList.remove("is-model-dragging");
      if (cubeWidget.hasPointerCapture(event.pointerId)) {
        cubeWidget.releasePointerCapture(event.pointerId);
      }
      sendToModel("berd-cube-drag-end");
    };
    cubeWidget.addEventListener("pointerup", endModelDrag);
    cubeWidget.addEventListener("pointercancel", endModelDrag);
    cubeWidget.addEventListener("pointerleave", () => {
      if (activePointer === null) lastPointer = null;
    });
  }

  /* ----- live analog clock (red second hand, like the app widget) ----- */
  const hourHand = app.querySelector("[data-clock-hour]");
  const minuteHand = app.querySelector("[data-clock-minute]");
  const secondHand = app.querySelector("[data-clock-second]");
  const updateClock = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;
    if (hourHand) hourHand.setAttribute("transform", `rotate(${hours * 30} 50 50)`);
    if (minuteHand) minuteHand.setAttribute("transform", `rotate(${minutes * 6} 50 50)`);
    if (secondHand) secondHand.setAttribute("transform", `rotate(${seconds * 6} 50 50)`);
  };
  updateClock();
  setInterval(updateClock, 1000);

  /* ----- starter task list: toggle checks, dismissible card ----- */
  app.querySelectorAll(".ha-task").forEach((task) => {
    task.addEventListener("click", () => task.classList.toggle("is-done"));
  });
  const tasksCard = app.querySelector(".ha-tasks");
  const tasksClose = app.querySelector(".ha-tasks__close");
  if (tasksCard && tasksClose) {
    tasksClose.addEventListener("click", (event) => {
      event.stopPropagation();
      tasksCard.classList.add("is-closing");
      tasksCard.addEventListener(
        "animationend",
        () => {
          tasksCard.style.display = "none";
          /* Bring it back after a beat so the demo never loses its toy. */
          setTimeout(() => {
            tasksCard.classList.remove("is-closing");
            tasksCard.style.display = "";
            tasksCard.classList.add("is-entering");
            tasksCard.addEventListener(
              "animationend",
              () => tasksCard.classList.remove("is-entering"),
              { once: true },
            );
          }, 4000);
        },
        { once: true },
      );
    });
  }

  /* ----- sidebar rows: hover comes from CSS; click just moves the
           active highlight (nothing navigates) ----- */
  app.querySelectorAll(".ha-nav-row[data-selectable]").forEach((row) => {
    row.addEventListener("click", () => {
      app
        .querySelectorAll(".ha-nav-row.is-active")
        .forEach((active) => active.classList.remove("is-active"));
      row.classList.add("is-active");
    });
  });

  /* ----- composer: typing works, send hops, mic toggles recording ----- */
  const composerInput = app.querySelector(".ha-composer input");
  const sendButton = app.querySelector("[data-composer-send]");
  const micButton = app.querySelector("[data-composer-mic]");
  const triggerSend = () => {
    if (!composerInput || !sendButton) return;
    if (!composerInput.value.trim()) return;
    composerInput.value = "";
    sendButton.classList.remove("is-sent");
    /* restart the hop animation */
    void sendButton.offsetWidth;
    sendButton.classList.add("is-sent");
  };
  if (sendButton) sendButton.addEventListener("click", triggerSend);
  if (composerInput) {
    composerInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        triggerSend();
      }
    });
  }
  if (micButton) {
    micButton.addEventListener("click", () => {
      const recording = micButton.classList.toggle("is-recording");
      micButton.style.background = recording ? "#dc2626" : "";
      micButton.style.color = recording ? "#ffffff" : "";
    });
  }

  /* ----- pause character loops when the hero is off screen ----- */
  /* Club loops are owned by the club-mode toggle in script.js. Restarting
     them here would leave ten invisible alpha videos decoding at page load. */
  const videos = [...app.querySelectorAll("video")].filter(
    (video) => !video.closest(".ha-club") && !video.classList.contains("ha-clock__disco"),
  );
  const clubVideos = () => [...app.querySelectorAll(".ha-club video, .ha-clock__disco")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          videos.forEach((video) => {
            if (entry.isIntersecting) video.play().catch(() => {});
            else video.pause();
          });
          const clubActive = app.classList.contains("is-club-mode");
          clubVideos().forEach((video) => {
            if (entry.isIntersecting && clubActive) video.play().catch(() => {});
            else video.pause();
          });
          app.dataset.visible = entry.isIntersecting ? "true" : "false";
        });
      },
      { threshold: 0.02 },
    );
    observer.observe(preview);
  }
})();
