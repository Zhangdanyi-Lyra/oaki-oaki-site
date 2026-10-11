if ("scrollRestoration" in history) history.scrollRestoration = "manual";
/* Only reset once, before the visitor can begin scrolling. Late load/pageshow
   resets were pulling the page back to the hero after interaction had started. */
if (!window.location.hash && window.scrollY < 2) window.scrollTo(0, 0);

function initCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor || !window.matchMedia("(pointer: fine)").matches) return;
  const interactiveSelector = 'a, button, input, textarea, select, summary, [role="button"]';
  document.documentElement.classList.add("has-custom-cursor");

  const setSize = (size) => {
    cursor.style.width = `${size}px`;
    cursor.style.height = `${size}px`;
  };
  const moveTo = (x, y) => {
    cursor.style.opacity = "1";
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };
  const move = (event) => moveTo(event.clientX, event.clientY);
  window.addEventListener("pointermove", move, { passive: true });

  /* The full-screen footer toy lives in an iframe. Pointer events stop at the
     frame boundary, so the embed renders its own identical cursor locally.
     Only relay presence changes across the boundary; relaying every coordinate
     through postMessage was asynchronous and visibly jittered under fast input. */
  const gooFrame = document.querySelector(".strawberry-goo-embed");
  window.addEventListener("message", (event) => {
    if (!gooFrame || event.source !== gooFrame.contentWindow || event.data?.type !== "berd:goo-cursor-presence") return;
    if (event.data.inside) cursor.style.opacity = "0";
  });
  document.addEventListener("pointerleave", () => { cursor.style.opacity = "0"; });
  document.addEventListener("pointerenter", () => { cursor.style.opacity = "1"; });
  document.addEventListener("pointerover", (event) => {
    if (event.target instanceof Element && event.target.closest(interactiveSelector)) setSize(21.6);
  });
  document.addEventListener("pointerout", (event) => {
    const next = event.relatedTarget;
    if (!(next instanceof Element) || !next.closest(interactiveSelector)) setSize(16);
  });
}

initCustomCursor();

/* Every browser on iOS uses WebKit, including Chrome (CriOS) and Firefox
   (FxiOS). WebKit can advertise VP9 WebM support without preserving alpha for
   these character exports, so all iOS browsers use the HEVC-alpha fallback.
   Desktop Safari does too; Chrome/Firefox elsewhere keep the clean WebMs. */
const IS_IOS_WEBKIT = /iP(?:ad|hone|od)/i.test(navigator.userAgent)
  || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const IS_SAFARI = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(navigator.userAgent);
const USE_HEVC_ALPHA = IS_IOS_WEBKIT || IS_SAFARI;

const isClubVideo = (video) =>
  Boolean(video.closest(".ha-club")) || video.classList.contains("ha-clock__disco");

/* Assign the per-browser source explicitly. Club videos remain src-less until
   an iOS warm-up or club mode starts. */
function ensureTransparentVideoSource(video) {
  if (video.src) return;
  video.src = USE_HEVC_ALPHA ? video.dataset.safari : video.dataset.webm;
  video.load();
}

function playWhenReady(video, shouldPlay, startTime = () => 0) {
  const play = () => {
    if (!shouldPlay()) return;
    const duration = video.duration;
    video.currentTime = Number.isFinite(duration) && duration > 0 ? startTime() % duration : 0;
    video.play().catch(() => {});
  };
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) play();
  else video.addEventListener("loadeddata", play, { once: true });
}

function initTransparentVideoSources() {
  document.querySelectorAll("video[data-webm][data-safari]").forEach((video) => {
    if (isClubVideo(video)) return;
    ensureTransparentVideoSource(video);
    /* Dynamically assigning src resets autoplay in Chrome when the video is
       hidden during initialization. Start it again as soon as it can render. */
    const resume = () => video.play().catch(() => {});
    video.addEventListener("canplay", resume, { once: true });
    resume();
  });
}

function warmClubVideos() {
  document.querySelectorAll(".ha-club video[data-safari], .ha-clock__disco[data-safari]").forEach((video) => {
    video.preload = "auto";
    ensureTransparentVideoSource(video);
  });
}

function warmClubVideosAfterHeroCast() {
  const heroVideos = [...document.querySelectorAll(".bounce-world video")];
  const pending = heroVideos.filter((video) => video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA);
  if (!pending.length) {
    warmClubVideos();
    return;
  }

  let settled = 0;
  pending.forEach((video) => {
    let didSettle = false;
    const settle = () => {
      if (didSettle) return;
      didSettle = true;
      settled += 1;
      if (settled === pending.length) warmClubVideos();
    };
    video.addEventListener("loadeddata", settle, { once: true });
    video.addEventListener("error", settle, { once: true });
  });
}

initTransparentVideoSources();
/* Give the visible hero cast first claim on bandwidth, then immediately fetch
   and decode the club cast so the first click can start without a load burst.
   On mobile, skip the eager warm to reduce concurrent decode pressure — the
   club videos will load on-demand when the user taps the karaoke button. */
if (!window.matchMedia("(max-width: 900px)").matches) {
  warmClubVideosAfterHeroCast();
}

const site = document.querySelector(".site");
const toast = document.querySelector(".toast");
const body = document.body;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const soundSources = {
  getApp: "assets/hover.wav",
  drawingMenu: "assets/draw.wav",
  getFiles: "assets/hover.wav",
  boing: "assets/boing.wav",
};
const soundPools = new Map();
const footerQuoteRuns = new WeakMap();
let toastTimer;

function createSoundPool(source, volume = 0.25) {
  const pool = Array.from({ length: 2 }, () => {
    const audio = new Audio(source);
    /* Hover sounds should never compete with first-paint video/cube assets. */
    audio.preload = "none";
    audio.volume = volume;
    return audio;
  });
  soundPools.set(source, { pool, cursor: 0 });
}

Object.values(soundSources).forEach((source) => createSoundPool(source));

function playSound(source, maxDuration = 0) {
  const entry = soundPools.get(source);
  if (!entry) return;
  const sound = entry.pool[entry.cursor++ % entry.pool.length];
  if (sound._stopTimer) clearTimeout(sound._stopTimer);
  sound.pause();
  sound.currentTime = 0;
  sound.play().then(() => {
    if (maxDuration > 0) {
      sound._stopTimer = setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
        sound._stopTimer = 0;
      }, maxDuration * 1000);
    }
  }).catch(() => {
    // Audible hover is browser-gated until the visitor interacts with the page.
  });
}

function unlockAudio() {
  soundPools.forEach(({ pool }) => {
    pool.forEach((sound) => {
      const volume = sound.volume;
      sound.volume = 0;
      const attempt = sound.play();
      if (attempt) {
        attempt
          .then(() => {
            sound.pause();
            sound.currentTime = 0;
            sound.volume = volume;
          })
          .catch(() => {
            sound.volume = volume;
          });
      }
    });
  });
}

document.addEventListener("pointerdown", unlockAudio, { once: true, capture: true });
document.addEventListener("keydown", unlockAudio, { once: true, capture: true });

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function scrollToSection(name) {
  const panel = [...document.querySelectorAll(".site .panel")].find(
    (section) => section.dataset.section === name || section.id === name
  );
  panel?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFooterQuote(footer) {
  if (!footer) return;
  const quote = footer.querySelector(".footer-quote");
  const run = (footerQuoteRuns.get(footer) || 0) + 1;
  footerQuoteRuns.set(footer, run); // Invalidates any pending tick from an old run.
  footer.dataset.quoteTyping = "false";
  footer.classList.remove("quote-done");
  if (quote) quote.textContent = "";
}

function startFooterQuote(footer) {
  if (!footer || footer.dataset.quoteTyping === "true") return;
  const quote = footer.querySelector(".footer-quote");
  if (!quote) return;

  const text = document.documentElement.lang === "zh-CN"
    ? "“不太可靠，却很真诚。\n笨拙，却很治愈。”"
    : "“Unreliable but sincere.\nClumsy but super healing.”";
  const run = (footerQuoteRuns.get(footer) || 0) + 1;
  footerQuoteRuns.set(footer, run);
  footer.dataset.quoteTyping = "true";
  footer.classList.remove("quote-done");
  quote.textContent = "";
  let index = 0;

  const tick = () => {
    if (footerQuoteRuns.get(footer) !== run) return;
    quote.textContent = text.slice(0, index);
    index += 1;
    if (index <= text.length) {
      setTimeout(tick, index < 2 ? 120 : 34);
    } else {
      footer.dataset.quoteTyping = "false";
      footer.classList.add("quote-done");
    }
  };
  tick();
}

/* Keep the new full-bleed Stu image visible beneath the transparent WebGL
   pull layer. It acts as a seamless red backplate whenever the deformable
   texture is stretched toward its limits, so no white or empty frame appears. */

const chromeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      body.classList.toggle("chrome-light", entry.target.dataset.chrome === "light");
    });
  },
  { threshold: 0.5 }
);

function observePanel(panel) {
  chromeObserver.observe(panel);
}

document.querySelectorAll(".site .panel").forEach(observePanel);

/* Reveal section content as it enters the viewport. Keeping this generic makes
   future sections inherit the same motion without wiring each one separately. */
const sectionRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      /* Keep observing so the reveal reverses when a section leaves and plays
         again when the visitor scrolls back in either direction. */
      entry.target.classList.toggle("is-content-visible", entry.isIntersecting);
      if (entry.target.classList.contains("panel--started")) {
        entry.target.dispatchEvent(new CustomEvent(entry.isIntersecting ? "started:enter" : "started:leave"));
      }
      if (!entry.isIntersecting) {
        entry.target.classList.toggle("is-above-viewport", entry.boundingClientRect.bottom <= 0);
      } else {
        entry.target.classList.remove("is-above-viewport");
      }
    });
  },
  /* Trigger around the lower two-thirds line, after enough of the incoming
     section is visible for its staggered details to read clearly. */
  { threshold: 0, rootMargin: "0px 0px -35% 0px" }
);

document
  .querySelectorAll(".panel--started, .panel--examples, .panel--agents")
  .forEach((panel) => sectionRevealObserver.observe(panel));

function initStartedSequence(root = document) {
  const panel = root.querySelector?.(".panel--started");
  const title = panel?.querySelector(".started-title");
  const lines = [...(title?.querySelectorAll("[data-type-text]") || [])];
  if (!panel || !title || !lines.length) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let run = 0;
  let timers = [];
  const clear = () => {
    run += 1;
    timers.forEach(clearTimeout);
    timers = [];
    /* Temporarily suppress transitions while restoring every element to its
       initial state. Otherwise old delayed transitions keep running after the
       section leaves and produce half-visible/stuck columns on re-entry. */
    panel.classList.add("is-sequence-resetting");
    title.classList.remove("is-typing");
    panel.classList.remove("is-story-visual-visible");
    panel.classList.remove("is-sequence-ready");
    lines.forEach((line) => { line.textContent = ""; });
    void panel.offsetWidth;
    panel.classList.remove("is-sequence-resetting");
  };
  const schedule = (callback, delay) => {
    const id = window.setTimeout(callback, delay);
    timers.push(id);
  };
  const start = () => {
    clear();
    panel.classList.add("is-story-visual-visible");
    if (reduceMotion) {
      lines.forEach((line) => { line.textContent = line.dataset.typeText || ""; });
      panel.classList.add("is-sequence-ready");
      panel.dispatchEvent(new CustomEvent("started:numbers"));
      return;
    }
    const currentRun = run;
    title.classList.add("is-typing");
    const text = lines.map((line) => line.dataset.typeText || "").join("\n");
    let index = 0;
    const type = () => {
      if (run !== currentRun) return;
      const typed = text.slice(0, index += 1).split("\n");
      lines.forEach((line, lineIndex) => { line.textContent = typed[lineIndex] || ""; });
      if (index < text.length) schedule(type, 62);
      else {
        title.classList.remove("is-typing");
        schedule(() => {
          panel.classList.add("is-sequence-ready");
          panel.dispatchEvent(new CustomEvent("started:numbers"));
        }, 180);
      }
    };
    type();
  };
  panel.addEventListener("started:enter", start);
  panel.addEventListener("started:leave", clear);
}

initStartedSequence();

const appPanel = document.querySelector(".panel--app");
const drawPanel = document.querySelector(".panel--draw");
const printPanel = document.querySelector(".panel--print");
const footerPanel = document.querySelector(".panel--footer");
let footerQuoteArmed = true;
let progressFrame = 0;
function updateProgress() {
  progressFrame = 0;
  const viewportHeight = window.innerHeight || 1;
  const heroPreview = document.querySelector(".hero-app-preview");
  const heroScroll = Math.min(viewportHeight, Math.max(0, window.scrollY));
  if (heroPreview) {
    /* Move the screenshot upward 50% faster than the floating avatars as the
       hero leaves the viewport. Capped so it stays composed in transition. */
    heroPreview.style.setProperty("--hero-preview-parallax", `${(-heroScroll * 0.5).toFixed(1)}px`);
  }
  /* Fade the scroll cue sooner on mobile, where it otherwise lingers over the
     denser hero composition. Desktop keeps its existing timing. */
  const heroHint = document.querySelector(".torus-hint");
  if (heroHint) {
    const fadeDistance = window.matchMedia("(max-width: 900px)").matches ? 0.16 : 0.34;
    const opacity = Math.max(0, 1 - heroScroll / (viewportHeight * fadeDistance));
    heroHint.style.setProperty("--hero-hint-opacity", opacity.toFixed(3));
  }
  if (drawPanel) {
    const drawRect = drawPanel.getBoundingClientRect();
    const drawingIsForeground = drawRect.top <= viewportHeight * 0.5 && drawRect.bottom >= viewportHeight * 0.5;
    body.classList.toggle("chrome-on-draw", drawingIsForeground);
  }
  document.querySelectorAll(".site .panel").forEach((panel) => {
    const rect = panel.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > viewportHeight) return;
    const progress = 1 - Math.min(1, Math.max(0, rect.top / viewportHeight));
    panel.style.setProperty("--section-progress", progress.toFixed(4));
  });

  /* SECTION 2 (app) RISE OVER THE PINNED HERO.
     The hero is position: sticky, so it stays fixed at the top while we scroll
     through the first viewport. Section 2 is pulled up over it (negative margin)
     and climbs up as you scroll. We drive its card animation off how far the
     page has scrolled through that first viewport: 0 = hero fully shown (card
     entering from the bottom), 1 = card locked and fully expanded. */
  if (appPanel) {
    const rise = Math.min(1, Math.max(0, window.scrollY / viewportHeight));
    appPanel.style.setProperty("--section-progress", rise.toFixed(4));
  }

  /* The footer is sticky behind the agents panel, so its own bounding box is in
     the viewport before it is visually exposed. Measure progress through their
     shared reveal stage instead, and start typing as the agents slide away. */
  if (footerPanel) {
    const footerStage = footerPanel.closest(".footer-reveal-stage");
    const stageRect = footerStage?.getBoundingClientRect();
    const reveal = stageRect
      ? Math.min(1, Math.max(0, -stageRect.top / viewportHeight))
      : Math.min(1, Math.max(0, (viewportHeight - footerPanel.getBoundingClientRect().top) / viewportHeight));
    /* Keep the persistent Download Berd control in its normal white treatment
       until the agents panel has almost completely cleared the footer. */
    body.classList.toggle("footer-is-visible", reveal >= 0.94);
    if (reveal >= 0.42 && footerQuoteArmed) {
      footerQuoteArmed = false;
      startFooterQuote(footerPanel);
    } else if (reveal <= 0.08 && !footerQuoteArmed) {
      footerQuoteArmed = true;
      resetFooterQuote(footerPanel);
    }
  }
}
/* On mobile, pinch-zoom triggers rapid scroll + resize events that force
   expensive getBoundingClientRect() reads on every panel. Detect zoom gestures
   via visualViewport.scale and throttle updates until the gesture settles. */
let isZooming = false;
let zoomSettleTimer = 0;
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", () => {
    if (window.visualViewport.scale !== 1) {
      isZooming = true;
      clearTimeout(zoomSettleTimer);
      zoomSettleTimer = setTimeout(() => { isZooming = false; }, 200);
    }
  }, { passive: true });
}

function scheduleProgressUpdate() {
  if (isZooming) return; // skip layout reads during pinch-zoom
  if (!progressFrame) progressFrame = requestAnimationFrame(updateProgress);
}
window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });
window.addEventListener("resize", scheduleProgressUpdate);
scheduleProgressUpdate();

document.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--mx", event.clientX.toFixed(0));
  document.documentElement.style.setProperty("--my", event.clientY.toFixed(0));
});

const birdLogo = document.querySelector(".bird-logo");
if (birdLogo) {
  const voice = document.querySelector("#oaki-logo-voice");
  let hoverAudioStarted = false;
  const playLogoVoice = () => {
    if (!voice) return Promise.resolve(false);
    voice.pause();
    voice.currentTime = 0;
    voice.volume = 0.9;
    return voice.play().then(() => true).catch(() => false);
  };
  birdLogo.addEventListener("pointerenter", () => {
    hoverAudioStarted = false;
    playLogoVoice().then((started) => { hoverAudioStarted = started; });
  });
  birdLogo.addEventListener("pointerleave", () => {
    hoverAudioStarted = false;
  });
  birdLogo.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || !hoverAudioStarted) playLogoVoice();
  });
  birdLogo.addEventListener("focus", () => {
    if (birdLogo.matches(":focus-visible")) playLogoVoice();
  });
}

/* Reuse the site's looping build animation in both copies of the seamless
   examples marquee. Each mount stays small and centered in its white card. */
document.querySelectorAll(".project-berd-logo").forEach((mount) => {
  window.renderBerdLogo?.(mount, "v9");
});

/* Fit a fixed 1920×1200 desktop viewport into each website preview. Unlike a
   percentage-sized iframe, this scales every child pixel by the same factor. */
function sizeProjectWebsiteEmbeds() {
  document.querySelectorAll(".project-website-frame").forEach((frame) => {
    const scale = frame.clientWidth / 1920;
    frame.style.setProperty("--project-website-scale", scale.toFixed(5));
  });
}
sizeProjectWebsiteEmbeds();
window.addEventListener("resize", sizeProjectWebsiteEmbeds, { passive: true });

/* Let people scrub the looping marquee without stopping its automatic motion.
   Drag distance is translated into animation time, so the CSS animation keeps
   advancing before, during, and after every drag. */
document.querySelectorAll(".examples-marquee").forEach((marquee) => {
  const track = marquee.querySelector(".examples-track");
  let pointerId = null;
  let previousX = 0;

  marquee.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !track) return;
    pointerId = event.pointerId;
    previousX = event.clientX;
    marquee.classList.add("is-dragging");
    marquee.setPointerCapture(pointerId);
  });

  marquee.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId) return;
    const animation = track.getAnimations().find(({ animationName }) => animationName === "examples-slide");
    const groupWidth = track.querySelector(".examples-group")?.getBoundingClientRect().width;
    const duration = Number(animation?.effect?.getTiming().duration);
    const deltaX = event.clientX - previousX;
    previousX = event.clientX;

    if (!animation || !groupWidth || !Number.isFinite(duration)) return;
    const nextTime = Number(animation.currentTime || 0) - (deltaX / groupWidth) * duration;
    animation.currentTime = ((nextTime % duration) + duration) % duration;
  });

  const finishDrag = (event) => {
    if (event.pointerId !== pointerId) return;
    marquee.classList.remove("is-dragging");
    pointerId = null;
  };

  marquee.addEventListener("pointerup", finishDrag);
  marquee.addEventListener("pointercancel", finishDrag);
  marquee.addEventListener("lostpointercapture", finishDrag);
});

function bindGetAppButtons(root = document) {
  root.querySelectorAll(".chrome-button--get-app:not([data-sound-bound])").forEach((button) => {
    button.dataset.soundBound = "true";
    button.addEventListener("pointerenter", () => playSound(soundSources.getApp));
    button.addEventListener("pointerdown", () => playSound(soundSources.getApp));
  });
}

bindGetAppButtons();

function initAppEmbeds(root = document) {
  const shells = root.matches?.(".app-embed-shell")
    ? [root]
    : [...(root.querySelectorAll?.(".app-embed-shell") || [])];

  shells.forEach((shell) => {
    if (shell.dataset.embedInitialized === "true") return;
    shell.dataset.embedInitialized = "true";
    const frame = shell.querySelector(".app-embed");
    if (!frame) return;

    let readyTimer = 0;
    const showFrame = () => {
      clearTimeout(readyTimer);
      shell.classList.add("is-loaded");
    };
    const keepFallback = () => shell.classList.remove("is-loaded");

    frame.addEventListener("load", () => {
      /* The local package is interactive immediately; its own intro clears shortly after. */
      readyTimer = window.setTimeout(showFrame, 350);
    });
    window.addEventListener("message", (event) => {
      if (event.source === frame.contentWindow && event.data === "likeaberd-ready") showFrame();
    });
    frame.addEventListener("error", keepFallback);
    window.setTimeout(() => {
      if (!shell.classList.contains("is-loaded")) keepFallback();
    }, 9000);
  });
}

initAppEmbeds();

function initAppSectionReveal(root = document) {
  const panels = root.matches?.(".panel--app")
    ? [root]
    : [...(root.querySelectorAll?.(".panel--app") || [])];
  panels.forEach((panel) => {
    if (panel.dataset.revealInitialized === "true") return;
    panel.dataset.revealInitialized = "true";
    let hasRevealed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRevealed) return;
        hasRevealed = true;
        panel.classList.add("is-revealed");
        observer.disconnect();
      },
      { threshold: 0, rootMargin: "0px 0px -25% 0px" }
    );
    observer.observe(panel);
  });
}

initAppSectionReveal();

function initHeroEggBirthday() {
  const hero = document.querySelector(".panel--hero");
  const eggs = [...(hero?.querySelectorAll(".oaki-egg") || [])];
  if (!hero || !eggs.length) return;

  const heroApp = hero.querySelector(".hero-app");
  const birthdayVideo = heroApp?.querySelector(".ha-club__birthday-video");
  const birthdaySong = hero.querySelector("#oaki-birthday-song");
  const strobe = hero.querySelector(".club-strobe");
  const discoClock = heroApp?.querySelector(".ha-clock__disco");
  if (birthdayVideo) {
    birthdayVideo.muted = true;
    birthdayVideo.loop = true;
  }
  if (birthdaySong) birthdaySong.volume = 1;

  const setBirthdayMode = (on) => {
    if (hero.classList.contains("is-karaoke-playing") === on) return;
    hero.classList.toggle("is-karaoke-playing", on);
    heroApp?.classList.toggle("is-club-mode", on);
    document.body.classList.toggle("is-club-mode", on);
    strobe?.classList.toggle("is-fallback", on);

    if (birthdayVideo) {
      birthdayVideo.pause();
      if (birthdayVideo.readyState >= HTMLMediaElement.HAVE_METADATA) birthdayVideo.currentTime = 0;
      if (on) birthdayVideo.play().catch(() => {});
    }
    if (birthdaySong) {
      birthdaySong.pause();
      birthdaySong.currentTime = 0;
      if (on) birthdaySong.play().catch(() => {});
    }
    if (discoClock) {
      if (on) {
        ensureTransparentVideoSource(discoClock);
        playWhenReady(discoClock, () => hero.classList.contains("is-karaoke-playing"));
      } else {
        discoClock.pause();
      }
    }
  };

  eggs.forEach((egg) => egg.addEventListener("click", () => setBirthdayMode(true)));
  ["Back", "oaki home"].forEach((label) => {
    heroApp?.querySelector(`.ha-topbar__btn[aria-label="${label}"]`)
      ?.addEventListener("click", () => setBirthdayMode(false));
  });
  document.querySelector(".bird-logo")?.addEventListener("click", () => setBirthdayMode(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setBirthdayMode(false);
  });
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) setBirthdayMode(false);
  }, { threshold: .01 }).observe(hero);
}

initHeroEggBirthday();

function initFooterFilesBall() {
  const footer = document.querySelector(".panel--footer");
  const ball = footer?.querySelector(".footer-files-ball");
  if (!footer || !ball) return;

  ball.addEventListener("pointerenter", () => playSound(soundSources.boing, 1));

  if (prefersReducedMotion) return;

  let x = footer.clientWidth * 0.15;
  let y = footer.clientHeight * 0.2;
  let vx = 78;
  let vy = 62;
  let last = performance.now();
  let frameId = 0;
  let visible = false;

  function move(now) {
    frameId = 0;
    if (!visible) return;
    const dt = Math.min(0.04, (now - last) / 1000);
    last = now;
    const radius = ball.offsetWidth / 2;
    x += vx * dt;
    y += vy * dt;

    if (x <= radius || x >= footer.clientWidth - radius) {
      x = Math.max(radius, Math.min(footer.clientWidth - radius, x));
      vx *= -1;
    }
    if (y <= radius || y >= footer.clientHeight - radius) {
      y = Math.max(radius, Math.min(footer.clientHeight - radius, y));
      vy *= -1;
    }

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    frameId = requestAnimationFrame(move);
  }

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !frameId) {
      last = performance.now();
      frameId = requestAnimationFrame(move);
    } else if (!visible && frameId) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }
  }, { threshold: 0.02 }).observe(footer);
}

initFooterFilesBall();

function initPrintModelCarousel(root = document) {
  const stage = root.querySelector?.(".print-model-stage");
  const viewer = stage?.querySelector("model-viewer");
  if (!stage || !viewer || stage.dataset.carouselInit === "true") return;
  stage.dataset.carouselInit = "true";

  let theta = 72 * Math.PI / 180;
  let phi = 101 * Math.PI / 180;
  let radius = 1;
  let calibrated = false;
  let frameId = 0;
  let last = 0;
  let visible = false;
  let dragging = false;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function calibrate() {
    if (!viewer.loaded || !viewer.getDimensions || !viewer.getBoundingBoxCenter) return;
    const dimensions = viewer.getDimensions();
    const center = viewer.getBoundingBoxCenter();
    viewer.cameraTarget = `${center.x}m ${center.y + dimensions.y * 0.025}m ${center.z}m`;
    if (!calibrated) {
      viewer.cameraOrbit = `${theta}rad ${phi}rad auto`;
      viewer.jumpCameraToGoal?.();
      radius = (viewer.getCameraOrbit?.().radius || 1) * 2.5;
      calibrated = true;
    }
    const stageHeight = Math.max(1, stage.getBoundingClientRect().height);
    viewer.style.setProperty("--gloopie-model-scale", String(Math.max(0.62, (stageHeight - 65) / stageHeight)));
  }

  function animate(now) {
    frameId = 0;
    if (!visible || dragging || reduceMotion) return;
    if (last) theta += ((now - last) / 1000) * 0.12;
    last = now;
    viewer.cameraOrbit = `${theta}rad ${phi}rad ${radius}m`;
    viewer.jumpCameraToGoal?.();
    frameId = requestAnimationFrame(animate);
  }

  function start() {
    if (!visible || dragging || reduceMotion || frameId) return;
    last = performance.now();
    frameId = requestAnimationFrame(animate);
  }

  function stop() {
    cancelAnimationFrame(frameId);
    frameId = 0;
  }

  viewer.addEventListener("load", () => {
    calibrate();
    start();
  });
  if (viewer.loaded) calibrate();

  stage.addEventListener("pointerdown", () => {
    dragging = true;
    stop();
  });
  const release = () => {
    if (!dragging) return;
    dragging = false;
    const orbit = viewer.getCameraOrbit?.();
    if (orbit) {
      /* Continue the idle rotation from the exact camera angle the visitor left,
         including their vertical/top-down view and current framing. */
      theta = orbit.theta;
      phi = orbit.phi;
      radius = orbit.radius;
    }
    start();
  };
  window.addEventListener("pointerup", release, true);
  window.addEventListener("pointercancel", release, true);

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else stop();
  }, { threshold: 0.2 }).observe(stage);

  new ResizeObserver(calibrate).observe(stage);
}

initPrintModelCarousel();

function bindPanelInteractions(root = document) {
  root.querySelectorAll(".chrome-button--files:not([data-bound])").forEach((button) => {
    button.dataset.bound = "true";
    button.addEventListener("pointerenter", () => playSound(soundSources.getFiles));
    button.addEventListener("pointerdown", () => playSound(soundSources.getFiles));
    button.addEventListener("click", () => showToast("3D-printable gloopie files CTA placeholder."));
  });
  root.querySelectorAll(".draw-tool:not([data-hover-sound-bound])").forEach((button) => {
    button.dataset.hoverSoundBound = "true";
    button.addEventListener("pointerenter", () => playSound(soundSources.drawingMenu));
  });
  root.querySelectorAll(".example-card:not([data-bound])").forEach((card) => {
    card.dataset.bound = "true";
    card.addEventListener("click", () =>
      showToast("Example card interaction placeholder — this can expand into case-study cards next.")
    );
  });
}
bindPanelInteractions();

function initAgentWheels(root = document) {
  const wheels = root.matches?.(".agents-wheel")
    ? [root]
    : [...(root.querySelectorAll?.(".agents-wheel") || [])];

  wheels.forEach((wheel) => {
    if (wheel.dataset.wheelInitialized === "true") return;
    wheel.dataset.wheelInitialized = "true";
    const originals = [...wheel.querySelectorAll(".agent-card")];
    if (!originals.length) return;
    /* Keep the six attributes in the order of the supplied front-view photos. */
    const cards = originals;
    /* No cloning: the ring is a closed circle, so each card appears exactly once
       and wraps around naturally. */
    cards.forEach((card) => {
      /* Wrap each card's contents in an inner surface element (kept for styling). */
      let surface = card.querySelector(":scope > .agent-card-surface");
      if (!surface) {
        surface = document.createElement("div");
        surface.className = "agent-card-surface";
        while (card.firstChild) surface.append(card.firstChild);
        card.append(surface);
      }
      card._surface = surface;
      card._tiltX = 0;
      card._tiltY = 0;
      card._hoverDepth = 0;
    });
    /* ---- 3D circular carousel (ring receding into z) ----
       Cards are arranged evenly around a circle. Each card's screen position is
       derived from its angle: x = sin(angle), depth = cos(angle). Cards stay
       BILLBOARDED (always facing the viewer — no rotateY) so they never get
       horizontally foreshortened/"squished"; depth is conveyed by uniform
       scale plus an opaque surface tint. All cards remain fully opaque; the
       ones at the back of the ring are smaller and more heavily shaded. */
    const count = cards.length;
    const TWO_PI = Math.PI * 2;
    const stepAngle = TWO_PI / count;

    /* angle is the ring's rotation in radians. velocity is angular speed (rad/s). */
    let angle = 0;
    const IDLE_SPEED = 0.27;      // a gentle full turn about every 23 seconds
    let velocity = IDLE_SPEED;
    const FRICTION = 1.8;         // how quickly a drag fling settles
    let frameId = 0;
    let lastTime = performance.now();
    let lastAngle = 0;
    let visible = false;

    /* Motion-reactive morph: `lean` is a smoothed signal of how fast/hard the
       ring is currently moving. It drives a skew + tilt on each card so they
       lean and squash in reaction to the spin (like they're being dragged
       through it), then settle back to rest as the motion slows. */
    let lean = 0;

    /* Drag state */
    let dragging = false;
    let activePointer = null;
    let lastDragX = 0;
    let lastDragTime = 0;
    let dragVelocity = 0;         // most recent drag-derived angular velocity

    /* Leave enough horizontal separation for the foreground stacking handoff
       to happen between cards instead of looking like a sudden face swap. */
    function ringRadiusPx() {
      /* 15% more horizontal room than the original compact carousel. */
      return Math.min(window.innerWidth * 0.169, 290);
    }
    function ringDepthPx() {
      /* Slightly more depth gives the outgoing card room to recede smoothly. */
      return Math.min(window.innerWidth * 0.128, 230);
    }

    function render() {
      const radius = ringRadiusPx();
      const depthRadius = ringDepthPx();
      cards.forEach((card, index) => {
        /* Angle of this card around the ring; front of ring = 0 (facing viewer). */
        let a = index * stepAngle + angle;
        const sin = Math.sin(a);
        const cos = Math.cos(a);

        /* Horizontal spread from sin; depth from cos (front = 0, back = -2*depth).
           Near the front, add a small S-curve so the incoming and outgoing
           cards politely move around one another instead of appearing to swap
           their stacking order in exactly the same lane. */
        const frontness = Math.max(0, cos);
        const handoffShuffle = Math.sin(a * 2) * 18 * frontness * frontness;
        const x = sin * radius + handoffShuffle;
        const z = (cos - 1) * depthRadius;

        /* Depth 0 (front) .. 1 (back). Cards stay fully opaque: distance is
           communicated by uniform scale plus a progressively stronger cool
           gray-lavender surface tint instead of transparency. */
        const depth = (1 - cos) / 2;
        const scale = 1 - depth * 0.62;             // front full size, back ~38%
        const tintStrength = Math.pow(depth, 0.78) * 0.34;
        const tintTarget = [196, 196, 196];
        const cardBase = 238;
        const tint = tintTarget.map((channel) =>
          Math.round(cardBase + (channel - cardBase) * tintStrength)
        );

        /* Preserve the original flat, billboarded carousel. A small directional
           bias delays the discrete stacking handoff until the two cards have
           moved farther apart, where the switch is much less noticeable. */
        const motionDirection = Math.sign(dragging ? dragVelocity : velocity || IDLE_SPEED);
        const stackingDepth = cos - sin * motionDirection * 0.14;
        card.style.zIndex = String(1000 + Math.round(stackingDepth * 1000));
        const blur = Math.pow(depth, 1.45) * 5;
        card.style.opacity = "1";
        card.style.setProperty("--agent-card-tint", `rgb(${tint.join(", ")})`);
        card.style.setProperty("--agent-card-blur", `${blur.toFixed(2)}px`);
        card.classList.toggle("is-focused", depth < 0.08);
        /* Billboard: translate in x/z + uniform scale only. No rotateY → no squish. */
        card.style.transform =
          `translate3d(calc(-50% + ${x.toFixed(1)}px), -50%, ${z.toFixed(1)}px) scale(${scale.toFixed(3)})`;

        /* MOTION-REACTIVE MORPH. The whole ring is spinning, so each card gets
           dragged sideways through the air: it leans (rotate), skews (shear),
           and squashes/stretches slightly in reaction to the current motion.
           Front cards react most; cards deep in the back barely move. Applied
           on the inner surface so it composes on top of the ring transform
           without disturbing the billboard/scale math above. */
        const react = 1 - depth * 0.7;            // front reacts most
        const tilt = lean * 9 * react;            // deg of lean into the motion
        const shear = lean * 7 * react;           // deg of skew (the "morph")
        const squashX = 1 + Math.abs(lean) * 0.06 * react;  // stretch along travel
        const squashY = 1 - Math.abs(lean) * 0.05 * react;  // ...and thin vertically
        card._surface.style.transform =
          `rotate(${tilt.toFixed(2)}deg) skewX(${shear.toFixed(2)}deg) scale(${squashX.toFixed(3)}, ${squashY.toFixed(3)})`;
      });
    }

    function animate(now) {
      frameId = 0;
      if (!visible) return;
      const dt = Math.min(0.04, (now - lastTime) / 1000);
      lastTime = now;

      if (!dragging) {
        /* A drag fling eases back into the automatic horizontal rotation. */
        velocity += (IDLE_SPEED - velocity) * Math.min(1, FRICTION * dt);
        angle += velocity * dt;
      }

      /* Derive instantaneous motion from the ring's change this frame. Ease
         the reactive tilt in and out so cards settle smoothly after a fling. */
      const measured = (angle - lastAngle) / Math.max(dt, 1e-4);
      lastAngle = angle;
      const excess = measured - (dragging ? 0 : IDLE_SPEED);
      const target = Math.max(-1, Math.min(1, excess / 6)); // normalise/clamp
      lean += (target - lean) * Math.min(1, 8 * dt);        // smooth toward target

      render();
      frameId = requestAnimationFrame(animate);
    }

    /* ---- Drag to spin, with momentum on release ---- */
    function onPointerDown(event) {
      dragging = true;
      activePointer = event.pointerId;
      lastDragX = event.clientX;
      lastDragTime = performance.now();
      dragVelocity = 0;
      wheel.setPointerCapture?.(event.pointerId);
      wheel.classList.add("is-dragging");
    }

    function onPointerMove(event) {
      if (!dragging || event.pointerId !== activePointer) return;
      const now = performance.now();
      const dx = event.clientX - lastDragX;
      const dt = Math.max(0.001, (now - lastDragTime) / 1000);
      /* Convert horizontal drag distance into ring rotation. Dragging right
         spins the ring forward. Sensitivity tuned to the ring radius. */
      const dTheta = (dx / ringRadiusPx()) * 1.15;
      angle += dTheta;
      dragVelocity = dTheta / dt; // rad/s — used as the release fling velocity
      lastDragX = event.clientX;
      lastDragTime = now;
      render();
    }

    function endDrag(event) {
      if (!dragging || (event && event.pointerId !== activePointer)) return;
      dragging = false;
      activePointer = null;
      wheel.classList.remove("is-dragging");
      /* Release with the drag's momentum, then let friction bring it to rest. */
      const MAX_FLING = 14;
      velocity = Math.max(-MAX_FLING, Math.min(MAX_FLING, dragVelocity));
      lastTime = performance.now();
      if (!prefersReducedMotion && visible && !frameId) frameId = requestAnimationFrame(animate);
    }

    wheel.addEventListener("pointerdown", onPointerDown);
    wheel.addEventListener("pointermove", onPointerMove);
    wheel.addEventListener("pointerup", endDrag);
    wheel.addEventListener("pointercancel", endDrag);
    wheel.addEventListener("pointerleave", (e) => { if (dragging) endDrag(e); });
    /* Horizontal trackpad swipes turn the cards; vertical wheel movement still
       scrolls the page normally. */
    wheel.addEventListener("wheel", (event) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      angle -= event.deltaX / ringRadiusPx();
      velocity = IDLE_SPEED;
      render();
    }, { passive: false });
    wheel.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      angle += event.key === "ArrowLeft" ? stepAngle : -stepAngle;
      velocity = IDLE_SPEED;
      render();
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        render();
        wheel.querySelectorAll("video").forEach((video) => {
          if (visible) video.play().catch(() => {});
          else video.pause();
        });
        if (!prefersReducedMotion && visible && !frameId) {
          lastTime = performance.now();
          frameId = requestAnimationFrame(animate);
        } else if (!visible && frameId) {
          cancelAnimationFrame(frameId);
          frameId = 0;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(wheel);
    window.addEventListener("resize", render);
    render();
  });
}

initAgentWheels();

function initStartedNumbers(root = document) {
  const panels = root.matches?.(".panel--started")
    ? [root]
    : [...(root.querySelectorAll?.(".panel--started") || [])];
  panels.forEach((panel) => {
    if (panel.dataset.numbersInitialized === "true" || !window.STEP_BRUSH_PATHS) return;
    panel.dataset.numbersInitialized = "true";
    const canvases = [...panel.querySelectorAll(".started-number")];
    const states = canvases.map((canvas, index) => ({
      canvas,
      ctx: canvas.getContext("2d"),
      paths: window.STEP_BRUSH_PATHS[canvas.dataset.stepNumber]?.paths || [],
      index,
      ratio: 1,
      replayStart: 0,
    }));
    let frameId = 0;
    let visible = false;
    let startTime = 0;

    function noise(seed, point, phase) {
      const value = Math.sin(seed * 12.9898 + point * 78.233 + phase * 4.117) * 43758.5453;
      return value - Math.floor(value);
    }

    function resize(state) {
      /* Use the canvas's layout dimensions, not getBoundingClientRect(). The
         entrance animation temporarily scales the canvas to 88%; measuring
         that transformed box made the drawing buffer too small and clipped
         the right and bottom edges of the numbers. */
      state.ratio = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
      state.canvas.width = Math.max(1, Math.round(state.canvas.clientWidth * state.ratio));
      state.canvas.height = Math.max(1, Math.round(state.canvas.clientHeight * state.ratio));
    }

    function render(state, time, progress) {
      const { canvas, ctx, paths, ratio } = state;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.fillStyle = "#000";
      const inset = Math.max(3, width * 0.018);
      const coordinateScale = (width - inset * 2) / 218;
      const phase = Math.floor(time / 105);
      const brushWidth = 18.3 * coordinateScale;
      const renderPaths = canvas.dataset.stepNumber === "02"
        ? [...paths, {
            /* Bridge the small accidental break between the upper and lower
               strokes of the hand-drawn 2. */
            points: [[0.505, 0.27], [0.49, 0.29], [0.475, 0.31], [0.46, 0.33], [0.445, 0.35], [0.43, 0.37], [0.42, 0.397]],
          }]
        : paths;
      const pathReveal = progress * renderPaths.length;
      renderPaths.forEach((path, pathIndex) => {
        const local = Math.max(0, Math.min(1, pathReveal - pathIndex));
        if (!local) return;
        const maxPoint = Math.max(1, Math.floor((path.points.length - 1) * local));
        for (let pointIndex = 0; pointIndex <= maxPoint; pointIndex += 1) {
          const [px, py] = path.points[pointIndex];
          const edge = noise(pathIndex + 1, pointIndex, phase);
          const side = noise(pathIndex + 17, pointIndex, phase) - 0.5;
          ctx.beginPath();
          ctx.arc(
            inset + px * 300 * coordinateScale + side * 2.2 * coordinateScale,
            inset + py * 300 * coordinateScale + (edge - 0.5) * 2.2 * coordinateScale,
            brushWidth * (0.42 + edge * 0.1),
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      });
    }

    function animate(time) {
      frameId = 0;
      if (!visible) return;
      const sequenceReady = panel.classList.contains("is-sequence-ready");
      const sequenceAge = sequenceReady ? time - startTime : -1;
      let needsFrame = !sequenceReady;
      states.forEach((state) => {
        /* Match the CSS column timing: each number gets its full hand-drawn
           900ms reveal only after the prior column's body has appeared. */
        const delay = state.index * 700 + 80;
        const sequenceProgress = Math.max(0, Math.min(1, (sequenceAge - delay) / 900));
        const replayProgress = state.replayStart
          ? Math.max(0, Math.min(1, (time - state.replayStart) / 650))
          : 1;
        render(state, time, Math.min(sequenceProgress, replayProgress));
        if (state.replayStart && replayProgress >= 1) state.replayStart = 0;
        if (sequenceProgress < 1 || state.replayStart) needsFrame = true;
      });
      if (needsFrame) frameId = requestAnimationFrame(animate);
    }

    states.forEach((state) => {
      resize(state);
      state.canvas.addEventListener("pointerenter", () => {
        if (prefersReducedMotion) return;
        state.replayStart = performance.now();
        if (visible && !frameId) frameId = requestAnimationFrame(animate);
      });
    });
    const resizeObserver = new ResizeObserver(() => {
      states.forEach(resize);
      if (prefersReducedMotion && visible) states.forEach((state) => render(state, 0, 1));
    });
    states.forEach(({ canvas }) => resizeObserver.observe(canvas));
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        if (prefersReducedMotion) {
          states.forEach((state) => render(state, 0, 1));
          return;
        }
        startTime = performance.now();
        const beginNumberSequence = () => {
          startTime = performance.now();
          if (!frameId) frameId = requestAnimationFrame(animate);
        };
        if (panel.classList.contains("is-sequence-ready")) beginNumberSequence();
        else panel.addEventListener("started:numbers", beginNumberSequence, { once: true });
        if (!frameId) frameId = requestAnimationFrame(animate);
      } else {
        if (prefersReducedMotion) return;
        states.forEach((state) => {
          state.replayStart = 0;
          render(state, performance.now(), 0);
        });
        if (frameId) {
          cancelAnimationFrame(frameId);
          frameId = 0;
        }
      }
    }, { threshold: 0, rootMargin: "0px 0px -25% 0px" });
    observer.observe(panel);
  });
}

initStartedNumbers();

const avatarSources = {
  "yellow-guy": "assets/berry-cutout.png",
  clown: "assets/ink-cutout.png",
  turtle: "assets/ocean-cutout.png",
  "cat-lady": "assets/cloud-cutout.png",
};

function initBerdScriptReveal(root = document) {
  const panels = root.matches?.(".panel--draw")
    ? [root]
    : [...(root.querySelectorAll?.(".panel--draw") || [])];

  panels.forEach((panel) => {
    if (panel.dataset.scriptRevealInitialized === "true") return;
    panel.dataset.scriptRevealInitialized = "true";
    const canvas = panel.querySelector(".draw-script-brush");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let pathData = window.BERD_BRUSH_PATHS || null;
    let ratio = 1;
    let frameId = 0;
    let visible = false;
    let revealStart = 0;
    let revealed = false;
    let scriptStarted = false;
    let lastBoilFrame = 0;
    let erasedStrokes = [];

    function noise(seed, index, phase) {
      const value = Math.sin(seed * 12.9898 + index * 78.233 + phase * 4.117) * 43758.5453;
      return value - Math.floor(value);
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      ratio = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
      canvas.width = Math.max(1, Math.round(rect.width * ratio));
      canvas.height = Math.max(1, Math.round(rect.height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      render(performance.now(), revealed ? 1 : 0);
    }

    function eraseScriptStroke(stroke) {
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 62;
      ctx.beginPath();
      ctx.moveTo(stroke.from.x, stroke.from.y);
      ctx.lineTo(stroke.to.x, stroke.to.y);
      ctx.stroke();
      ctx.restore();
    }

    function render(time, progress) {
      if (!pathData) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.fillStyle = "#000";
      const phase = Math.floor(time / 105);
      const brushWidth = Math.max(26, Math.min(48, width * 0.034));
      const ordered = pathData.paths;
      const revealAmount = progress * ordered.length;

      ordered.forEach((path, pathIndex) => {
        const localProgress = Math.max(0, Math.min(1, revealAmount - pathIndex));
        if (!localProgress) return;
        const points = path.points;
        const maxPoint = Math.max(1, Math.floor((points.length - 1) * localProgress));
        for (let index = 0; index <= maxPoint; index += 1) {
          const [px, py] = points[index];
          const edge = noise(pathIndex + 1, index, phase);
          const side = noise(pathIndex + 19, index, phase) - 0.5;
          const x = px * width + side * 3.2;
          const y = py * height + (edge - 0.5) * 3.2;
          const radius = brushWidth * (0.41 + edge * 0.11);
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      erasedStrokes.forEach(eraseScriptStroke);
    }

    /* The free-draw canvas emits eraser strokes in viewport coordinates. Map
       them into this inset canvas so the animated Berd lettering erases too. */
    panel.addEventListener("berd-script-erase", (event) => {
      if (!scriptStarted) return;
      const rect = canvas.getBoundingClientRect();
      const { from, to } = event.detail;
      erasedStrokes.push({
        from: { x: from.x - rect.left, y: from.y - rect.top },
        to: { x: to.x - rect.left, y: to.y - rect.top },
      });
      render(performance.now(), revealed ? 1 : Math.max(0, Math.min(1, (performance.now() - revealStart) / 2700)));
    });

    function animate(time) {
      frameId = 0;
      if (!visible || !pathData) return;
      const progress = revealed ? 1 : Math.max(0, Math.min(1, (time - revealStart) / 2700));
      if (!scriptStarted && time >= revealStart) {
        scriptStarted = true;
        panel.classList.add("is-script-started");
      }
      if (time - lastBoilFrame > 90 || !revealed) {
        lastBoilFrame = time;
        render(time, progress);
      }
      if (progress >= 1 && !revealed) {
        revealed = true;
        panel.classList.add("is-script-complete");
      }
      frameId = requestAnimationFrame(animate);
    }

    function pathDataReady(data) {
      pathData = data;
      resize();
      if (visible && !frameId) frameId = requestAnimationFrame(animate);
    }

    if (pathData) {
      pathDataReady(pathData);
    } else {
      fetch(canvas.dataset.paths)
        .then((response) => {
          if (!response.ok) throw new Error(`Unable to load Berd brush paths: ${response.status}`);
          return response.json();
        })
        .then(pathDataReady)
        .catch(() => {
          /* The inline path script normally handles file:// and strict local servers. */
        });
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.45;
        if (visible) {
          const delay = Number(panel.dataset.revealDelay || 0);
          revealStart = performance.now() + delay;
          revealed = false;
          scriptStarted = false;
          erasedStrokes = [];
          panel.classList.remove("is-script-started", "is-script-complete");
          if (panel.classList.contains("panel--draw-404")) {
            panel.classList.add("is-intro-visible");
            setTimeout(() => panel.classList.add("is-intro-complete"), Math.max(0, delay - 450));
          }
          if (!frameId) frameId = requestAnimationFrame(animate);
        } else if (frameId) {
          cancelAnimationFrame(frameId);
          frameId = 0;
        }
      },
      { threshold: [0.45] }
    );
    observer.observe(panel);
  });
}

initBerdScriptReveal();

function initDrawingCanvas(root = document) {
  const canvas = root.matches?.(".panel--draw")
    ? root.querySelector(".draw-canvas")
    : root.querySelector?.(".draw-canvas");
  if (!canvas || canvas.dataset.initialized === "true") return;
  canvas.dataset.initialized = "true";

  const panel = canvas.closest(".panel--draw");
  const ctx = canvas.getContext("2d");
  const cursor = panel.querySelector(".draw-brush-cursor");
  const cursorImage = cursor?.querySelector("img");
  const existingPollies = [...panel.querySelectorAll(".draw-pollie")];
  const avatarImages = new Map();
  const ERASER_WIDTH = 62;
  let actions = [];
  let drawing = false;
  let last = null;
  let tool = "pen";
  let selectedAvatar = "clown";
  let pixelRatio = Math.max(1, window.devicePixelRatio || 1);
  let animationFrame = 0;
  let lastBoilFrame = 0;
  let isVisible = false;

  function avatarImage(name) {
    if (avatarImages.has(name)) return avatarImages.get(name);
    const image = new Image();
    image.src = avatarSources[name];
    image.addEventListener("load", () => renderScene(performance.now()), { once: true });
    avatarImages.set(name, image);
    return image;
  }

  Object.keys(avatarSources).forEach(avatarImage);

  function brushWidth() {
    return Math.max(28, Math.min(42, canvas.clientWidth * 0.022));
  }

  function seededNoise(seed, index, phase) {
    const value = Math.sin(seed * 12.9898 + index * 78.233 + phase * 4.117) * 43758.5453;
    return value - Math.floor(value);
  }

  function drawLumpyStroke(action, time) {
    const dx = action.to.x - action.from.x;
    const dy = action.to.y - action.from.y;
    const distance = Math.max(0.001, Math.hypot(dx, dy));
    const spacing = Math.max(3.5, action.width * 0.12);
    const steps = Math.max(1, Math.ceil(distance / spacing));
    const phase = Math.floor(time / 105);

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#000";
    for (let index = 0; index <= steps; index += 1) {
      const progress = index / steps;
      const noise = seededNoise(action.seed, index, phase);
      const sideNoise = seededNoise(action.seed + 11, index, phase) - 0.5;
      const x = action.from.x + dx * progress + sideNoise * 2.8;
      const y = action.from.y + dy * progress + (noise - 0.5) * 2.8;
      const radius = action.width * (0.42 + noise * 0.11);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawEraseStroke(action) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = ERASER_WIDTH;
    ctx.beginPath();
    ctx.moveTo(action.from.x, action.from.y);
    ctx.lineTo(action.to.x, action.to.y);
    ctx.stroke();
  }

  function drawAvatar(action) {
    const image = avatarImage(action.avatar);
    if (!image.complete || !image.naturalWidth) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.save();
    ctx.translate(action.x, action.y);
    ctx.rotate(action.rotation);
    ctx.drawImage(image, -action.size / 2, -action.size / 2, action.size, action.size);
    ctx.restore();
  }

  function renderScene(time = performance.now()) {
    const rect = canvas.getBoundingClientRect();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.globalAlpha = 1;

    actions.forEach((action) => {
      if (action.type === "brush") drawLumpyStroke(action, time);
      if (action.type === "avatar") drawAvatar(action);
      if (action.type === "erase") drawEraseStroke(action);
    });
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(rect.width, rect.height, 0, 0);
  }

  function animateBrush(time) {
    animationFrame = 0;
    if (!isVisible || !actions.some((action) => action.type === "brush")) return;
    if (time - lastBoilFrame > 90) {
      lastBoilFrame = time;
      renderScene(time);
    }
    animationFrame = requestAnimationFrame(animateBrush);
  }

  function ensureBrushAnimation() {
    if (isVisible && !animationFrame && actions.some((action) => action.type === "brush")) {
      animationFrame = requestAnimationFrame(animateBrush);
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    pixelRatio = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.floor(rect.width * pixelRatio);
    canvas.height = Math.floor(rect.height * pixelRatio);
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    renderScene();
  }

  function resetCanvas() {
    actions = [];
    existingPollies.forEach((pollie) => pollie.classList.remove("is-erased"));
    renderScene();
  }

  function point(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function distanceToSegment(pointToCheck, from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const lengthSquared = dx * dx + dy * dy;
    if (!lengthSquared) return Math.hypot(pointToCheck.x - from.x, pointToCheck.y - from.y);
    const amount = Math.max(0, Math.min(1, ((pointToCheck.x - from.x) * dx + (pointToCheck.y - from.y) * dy) / lengthSquared));
    const x = from.x + amount * dx;
    const y = from.y + amount * dy;
    return Math.hypot(pointToCheck.x - x, pointToCheck.y - y);
  }

  function removePolliesAlong(from, to) {
    const eraserRadius = ERASER_WIDTH / 2;
    actions = actions.filter((action) => {
      if (action.type !== "avatar") return true;
      return distanceToSegment({ x: action.x, y: action.y }, from, to) > action.size * 0.44 + eraserRadius;
    });

    const canvasRect = canvas.getBoundingClientRect();
    existingPollies.forEach((pollie) => {
      if (pollie.classList.contains("is-erased")) return;
      const rect = pollie.getBoundingClientRect();
      const center = {
        x: rect.left - canvasRect.left + rect.width / 2,
        y: rect.top - canvasRect.top + rect.height / 2,
      };
      const hitRadius = Math.max(rect.width, rect.height) * 0.4 + eraserRadius;
      if (distanceToSegment(center, from, to) <= hitRadius) pollie.classList.add("is-erased");
    });
  }

  function addBrushStroke(from, to) {
    actions.push({
      type: "brush",
      from: { ...from },
      to: { ...to },
      width: brushWidth(),
      seed: Math.random() * 10000,
    });
    renderScene();
    ensureBrushAnimation();
  }

  function erase(from, to) {
    removePolliesAlong(from, to);
    actions.push({ type: "erase", from: { ...from }, to: { ...to } });
    const rect = canvas.getBoundingClientRect();
    panel.dispatchEvent(new CustomEvent("berd-script-erase", {
      detail: {
        from: { x: rect.left + from.x, y: rect.top + from.y },
        to: { x: rect.left + to.x, y: rect.top + to.y },
      },
    }));
    renderScene();
  }

  function stampAvatar(at) {
    const size = selectedAvatar === "turtle" ? 46 : 120;
    actions.push({
      type: "avatar",
      avatar: selectedAvatar,
      x: at.x,
      y: at.y,
      size,
      rotation: (Math.sin(at.x * 0.03 + at.y * 0.01) * 10 * Math.PI) / 180,
    });
    renderScene();
  }

  function draw(from, to) {
    if (tool === "avatar") {
      if (Math.hypot(to.x - from.x, to.y - from.y) > 20) stampAvatar(to);
    } else if (tool === "eraser") {
      erase(from, to);
    } else {
      addBrushStroke(from, to);
    }
  }

  function drawingEnabled() {
    return !panel.classList.contains("panel--draw-404") || panel.classList.contains("is-script-started");
  }

  function updateCursor(event) {
    if (!cursor || !drawingEnabled()) return;
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }

  canvas.addEventListener("pointerenter", (event) => {
    if (!drawingEnabled()) return;
    updateCursor(event);
    panel.classList.add("is-cursor-active");
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!drawingEnabled()) return;
    updateCursor(event);
    panel.classList.add("is-cursor-active");
  });
  canvas.addEventListener("pointerleave", () => panel.classList.remove("is-cursor-active"));

  canvas.addEventListener("pointerdown", (event) => {
    if (!drawingEnabled()) return;
    drawing = true;
    last = point(event);
    canvas.setPointerCapture(event.pointerId);
    if (tool === "avatar") stampAvatar(last);
    if (tool === "eraser") erase(last, last);
    if (tool === "pen") addBrushStroke(last, last);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!drawing || !last) return;
    const next = point(event);
    draw(last, next);
    last = next;
  });

  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    canvas.addEventListener(eventName, () => {
      drawing = false;
      last = null;
    });
  });

  panel.querySelectorAll(".draw-tool").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.hasAttribute("data-picker-toggle")) return;
      const nextTool = button.dataset.tool;
      if (nextTool === "clear") {
        resetCanvas();
        showToast("Canvas reset.");
        return;
      }

      tool = nextTool;
      panel.classList.toggle("is-eraser-active", tool === "eraser");
      panel.classList.toggle("is-avatar-active", tool === "avatar");
      if (cursor) cursor.style.setProperty("--brush-cursor-size", `${brushWidth()}px`);
      if (nextTool === "avatar" && button.dataset.avatar) {
        selectedAvatar = button.dataset.avatar;
        avatarImage(selectedAvatar);
        const picker = panel.querySelector(".draw-tool--avatar-current");
        const pickerImage = picker?.querySelector("img");
        if (picker && pickerImage) {
          pickerImage.src = avatarSources[selectedAvatar];
          picker.dataset.avatar = selectedAvatar;
          picker.setAttribute("aria-label", `Selected ${selectedAvatar.replace("-", " ")} Pollie brush`);
        }
        if (cursorImage) cursorImage.src = avatarSources[selectedAvatar];
        if (cursor) cursor.style.setProperty("--avatar-cursor-size", `${selectedAvatar === "turtle" ? 46 : 120}px`);
      }
      panel
        .querySelectorAll(".draw-tool")
        .forEach((item) => item.classList.toggle("active", item === button || (nextTool === "avatar" && item.classList.contains("draw-tool--avatar-current"))));
    });
  });

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) ensureBrushAnimation();
      if (!isVisible && animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    },
    { threshold: 0.01 }
  );
  visibilityObserver.observe(panel);

  resize();
  if (cursor) {
    cursor.style.setProperty("--brush-cursor-size", `${brushWidth()}px`);
    cursor.style.setProperty("--avatar-cursor-size", "120px");
  }
  window.addEventListener("resize", () => {
    resize();
    if (cursor) cursor.style.setProperty("--brush-cursor-size", `${brushWidth()}px`);
  });
}

document.querySelectorAll(".panel--draw").forEach(initDrawingCanvas);

function initHeroFloaters(root = document) {
  const fields = root.matches?.(".hero-floaters")
    ? [root]
    : [...(root.querySelectorAll?.(".hero-floaters") || [])];

  fields.forEach((field) => {
    if (field.dataset.motionInitialized === "true") return;
    field.dataset.motionInitialized = "true";

    const elements = [...field.querySelectorAll(".hero-floater")];
    const particles = elements.map((element) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 25 + Math.random() * 15;
      return {
        element,
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 0,
        rotation: Math.random() * 360,
        spin: (Math.random() < 0.5 ? -1 : 1) * (2.5 + Math.random() * 2.5),
        phase: Math.random() * Math.PI * 2,
        homeX: 0,
        homeY: 0,
        orbitRadiusX: 0,
        orbitRadiusY: 0,
        orbitSpeed: 0,
        orbitPhase: Math.random() * Math.PI * 2,
        resident: false,
        placed: false,
      };
    });
    let width = 0;
    let height = 0;
    let viewLeft = 0;
    let viewTop = 0;
    let viewRight = 0;
    let viewBottom = 0;
    let lastTime = performance.now();
    let frameId = 0;
    let isVisible = false;

    function layout() {
      const rect = field.getBoundingClientRect();
      const panelRect = field.closest(".panel--hero")?.getBoundingClientRect() || rect;
      width = rect.width;
      height = rect.height;
      /* Convert the actual hero panel into this oversized motion field's coordinates. */
      viewLeft = panelRect.left - rect.left;
      viewTop = panelRect.top - rect.top;
      viewRight = viewLeft + panelRect.width;
      viewBottom = viewTop + panelRect.height;
      const visibleWidth = Math.max(1, viewRight - viewLeft);
      const visibleHeight = Math.max(1, viewBottom - viewTop);
      const columns = Math.ceil(Math.sqrt(particles.length));
      const rows = Math.ceil(particles.length / columns);

      particles.forEach((particle, index) => {
        const size = particle.element.getBoundingClientRect().width || 180;
        particle.radius = size * 0.28;
        if (!particle.placed) {
          const col = index % columns;
          const row = Math.floor(index / columns);
          const jitterX = (Math.random() - 0.5) * Math.min(70, width / columns / 3);
          const jitterY = (Math.random() - 0.5) * Math.min(70, height / rows / 3);
          particle.resident = index < 7;
          if (particle.resident) {
            /* Seven deliberately asymmetric zones keep the launch colors distributed. */
            const desktopHomes = [
              [0.12, 0.25],
              [0.38, 0.18],
              [0.67, 0.22],
              [0.88, 0.34],
              [0.19, 0.73],
              [0.51, 0.76],
              [0.82, 0.74],
            ];
            const mobileHomes = [
              [0.2, 0.16],
              [0.72, 0.14],
              [0.48, 0.34],
              [0.17, 0.53],
              [0.78, 0.51],
              [0.34, 0.78],
              [0.76, 0.82],
            ];
            const [homeX, homeY] = (visibleWidth < 900 ? mobileHomes : desktopHomes)[index];
            particle.homeX = viewLeft + homeX * visibleWidth;
            particle.homeY = viewTop + homeY * visibleHeight;
            particle.orbitRadiusX = Math.min(150, visibleWidth * 0.075);
            particle.orbitRadiusY = Math.min(115, visibleHeight * 0.09);
            particle.orbitSpeed = (index % 2 ? -1 : 1) * (0.16 + (index % 3) * 0.025);
            particle.x = particle.homeX + Math.cos(particle.orbitPhase) * particle.orbitRadiusX;
            particle.y = particle.homeY + Math.sin(particle.orbitPhase) * particle.orbitRadiusY;
          } else {
            particle.x = ((col + 0.5) / columns) * width + jitterX;
            particle.y = ((row + 0.5) / rows) * height + jitterY;
            if (index % 5 === 0) particle.x += index % 2 ? width * 0.15 : -width * 0.15;
          }
          particle.placed = true;
        } else {
          particle.x = Math.min(width - particle.radius, Math.max(particle.radius, particle.x));
          particle.y = Math.min(height - particle.radius, Math.max(particle.radius, particle.y));
        }
      });
    }

    function animate(now) {
      const dt = Math.min(0.035, (now - lastTime) / 1000);
      lastTime = now;

      particles.forEach((particle) => {
        /* A tiny wandering force keeps paths organic instead of orbital. */
        const wander = (Math.random() - 0.5) * 4.5 * dt;
        const cos = Math.cos(wander);
        const sin = Math.sin(wander);
        const vx = particle.vx * cos - particle.vy * sin;
        particle.vy = particle.vx * sin + particle.vy * cos;
        particle.vx = vx;
        if (particle.resident) {
          /* Each guaranteed color roams around a moving point inside its own broad zone. */
          const orbit = now * 0.001 * particle.orbitSpeed + particle.orbitPhase;
          const targetX = particle.homeX + Math.cos(orbit) * particle.orbitRadiusX;
          const targetY = particle.homeY + Math.sin(orbit * 1.27) * particle.orbitRadiusY;
          particle.vx += (targetX - particle.x) * 0.75 * dt;
          particle.vy += (targetY - particle.y) * 0.75 * dt;
          particle.vx *= Math.pow(0.995, dt * 60);
          particle.vy *= Math.pow(0.995, dt * 60);
        }
        particle.x += particle.vx * dt;
        particle.y += particle.vy * dt + Math.sin(now * 0.00035 + particle.phase) * 5 * dt;
        particle.rotation += particle.spin * dt;

        /* Five residents stay visible; the rest can drift naturally offscreen. */
        const margin = particle.element.offsetWidth * 0.7;
        const insetX = particle.resident ? viewLeft + particle.radius : -margin;
        const insetY = particle.resident ? viewTop + particle.radius : -margin;
        const maxX = particle.resident ? viewRight - particle.radius : width + margin;
        const maxY = particle.resident ? viewBottom - particle.radius : height + margin;
        if (particle.resident) {
          if (particle.x < insetX || particle.x > maxX) particle.vx *= -1;
          if (particle.y < insetY || particle.y > maxY) particle.vy *= -1;
          particle.x = Math.min(maxX, Math.max(insetX, particle.x));
          particle.y = Math.min(maxY, Math.max(insetY, particle.y));
        } else {
          if (particle.x < -margin) particle.x = width + margin;
          if (particle.x > width + margin) particle.x = -margin;
          if (particle.y < -margin) particle.y = height + margin;
          if (particle.y > height + margin) particle.y = -margin;
        }
      });

      /* Gentle separation only prevents visual clumps; gloopies can still overlap and cross. */
      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const a = particles[first];
          const b = particles[second];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy) || 1;
          const comfortDistance = (a.radius + b.radius) * 1.35;
          if (distance >= comfortDistance) continue;
          const strength = (comfortDistance - distance) * 0.032;
          const nx = dx / distance;
          const ny = dy / distance;
          a.vx -= nx * strength;
          a.vy -= ny * strength;
          b.vx += nx * strength;
          b.vy += ny * strength;
        }
      }

      particles.forEach((particle) => {
        particle.element.style.transform = `translate3d(${particle.x - particle.element.offsetWidth / 2}px, ${particle.y - particle.element.offsetHeight / 2}px, 0) rotate(${particle.rotation}deg)`;
      });
      if (isVisible) frameId = requestAnimationFrame(animate);
    }

    layout();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !reduceMotion && !frameId) {
          lastTime = performance.now();
          frameId = requestAnimationFrame(animate);
        } else if (!isVisible && frameId) {
          cancelAnimationFrame(frameId);
          frameId = 0;
        }
      },
      { threshold: 0.01 }
    );
    visibilityObserver.observe(field.closest(".panel--hero") || field);
    const resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(field);
    field._heroMotionCleanup = () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  });
}

initHeroFloaters();

function initPageLoader() {
  const loader = document.querySelector(".loader");
  const loaderLogo = loader?.querySelector(".loader__logo");
  /* The homepage now loads within its app frame; retain this fallback only for
     pages that still include the legacy full-screen loader. */
  if (!loader) {
    document.body.classList.add("site-ready");
    return;
  }
  if (loaderLogo) window.renderBerdLogo?.(loaderLogo, "v9");
  /* Run the 2.75s logo once, replace it with the message, hold for two seconds,
     then wait for the message's fade-out to finish before revealing the site. */
  const minimumDisplay = new Promise((resolve) => setTimeout(resolve, 5850));
  const fontsReady = document.fonts?.ready || Promise.resolve();
  const heroMedia = [...document.querySelectorAll(".panel--hero video")].slice(0, 7);
  const heroReady = Promise.all(
    heroMedia.map(
      (video) =>
        new Promise((resolve) => {
          if (video.readyState >= 2) return resolve();
          video.addEventListener("loadeddata", resolve, { once: true });
          setTimeout(resolve, 3500);
        })
    )
  );

  Promise.all([minimumDisplay, fontsReady, heroReady]).then(() => {
    document.body.classList.add("site-ready");
    loader.classList.add("is-complete");
    loader.setAttribute("aria-hidden", "true");
  });

  /* Never trap someone behind the loader on a slow or failed request. */
  setTimeout(() => {
    document.body.classList.add("site-ready");
    loader.classList.add("is-complete");
    loader.setAttribute("aria-hidden", "true");
  }, 6850);
}

initPageLoader();

function initInfiniteScroll() {
  if (!site) return;
  const originals = [...site.querySelectorAll(":scope > .panel")];
  if (!originals.length) return;
  const templates = originals.map((panel) => panel.cloneNode(true));
  let cycleCount = 1;
  let appending = false;

  function appendCycle() {
    if (appending) return;
    appending = true;
    cycleCount += 1;
    const fragment = document.createDocumentFragment();
    const added = templates.map((template) => {
      const clone = template.cloneNode(true);
      clone.removeAttribute("id");
      clone.dataset.loopCycle = String(cycleCount);
      clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
      clone.querySelectorAll("[data-bound]").forEach((element) => element.removeAttribute("data-bound"));
      clone.querySelectorAll("[data-initialized]").forEach((element) => element.removeAttribute("data-initialized"));
      clone
        .querySelectorAll("[data-motion-initialized]")
        .forEach((element) => element.removeAttribute("data-motion-initialized"));
      fragment.append(clone);
      return clone;
    });

    site.append(fragment);
    added.forEach((panel) => {
      observePanel(panel);
      if (panel.classList.contains("panel--draw")) initDrawingCanvas(panel);
      initHeroFloaters(panel);
      initBerdScriptReveal(panel);
      initStartedNumbers(panel);
      initAgentWheels(panel);
      initAppEmbeds(panel);
      initAppSectionReveal(panel);
      bindKaraokeButtons(panel);
      bindGetAppButtons(panel);
      bindPanelInteractions(panel);
      panel.querySelectorAll("video[autoplay]").forEach((video) => video.play().catch(() => {}));
    });
    appending = false;
  }

  appendCycle();
  window.addEventListener(
    "scroll",
    () => {
      const remaining = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      if (remaining < window.innerHeight * 4) appendCycle();
    },
    { passive: true }
  );
}

/* Infinite panel cloning was intentionally removed: it multiplied videos, canvases,
   observers, and iframes, which degraded scrolling after every loop. */

function initSmoothSectionSnap() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let animationFrame = 0;
  let wheelDelta = 0;
  let wheelResetTimer = 0;

  function panels() {
    return [...document.querySelectorAll(".site .panel")];
  }

  /* Absolute document top of a panel. We can't use offsetTop anymore because the
     hero lives inside a positioned .hero-stage wrapper, so its offsetTop is
     measured from the stage, not the document. */
  function panelTop(panel) {
    return panel.getBoundingClientRect().top + window.scrollY;
  }

  function nearestPanelIndex(items) {
    const marker = window.scrollY + window.innerHeight * 0.35;
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    items.forEach((panel, index) => {
      const distance = Math.abs(panelTop(panel) - marker);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    return nearestIndex;
  }

  function animateTo(targetY) {
    cancelAnimationFrame(animationFrame);
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 900;
    const startTime = performance.now();
    document.documentElement.classList.add("is-snap-scrolling");

    function tick(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        window.scrollTo(0, targetY);
        document.documentElement.classList.remove("is-snap-scrolling");
        animationFrame = 0;
      }
    }

    animationFrame = requestAnimationFrame(tick);
  }

  window.addEventListener(
    "wheel",
    (event) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (event.deltaMode === 0 && Math.abs(event.deltaY) < 50) return;
      if (event.target.closest?.(".draw-tools")) return;
      event.preventDefault();
      if (animationFrame) return;

      wheelDelta += event.deltaY;
      clearTimeout(wheelResetTimer);
      wheelResetTimer = setTimeout(() => {
        wheelDelta = 0;
      }, 140);
      if (Math.abs(wheelDelta) < 18) return;

      const items = panels();
      const current = nearestPanelIndex(items);
      const direction = Math.sign(wheelDelta);
      const target = items[Math.max(0, Math.min(items.length - 1, current + direction))];
      wheelDelta = 0;
      if (target) animateTo(panelTop(target));
    },
    { passive: false }
  );
}

/* Scroll-jacking disabled: the wheel-driven panel snapping was interfering with
   normal scrolling. Native scrolling only for now. */
/* initSmoothSectionSnap(); */

/* Loader completion is coordinated by initPageLoader above. */
