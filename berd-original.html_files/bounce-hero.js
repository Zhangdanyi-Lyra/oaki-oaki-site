/* Bouncing gloopies hero.
   Big gloopies float and bounce around inside the hero like balls trapped in a
   FISH TANK: they always stay fully inside the frame (no poking off-screen), and
   they collide with each other as well as the four walls. There are enough of
   them, sized large, that the screen stays densely filled with almost no visible
   background. */
(function () {
  function initBounceHero() {
    const world = document.querySelector(".bounce-world");
    if (!world || world.dataset.bounceInit === "true") return;

    const allItems = [...world.querySelectorAll(".bounce-gloopy")];
    if (!allItems.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    /* On mobile, limit active gloopies to 6 to stay within hardware video
       decoder limits (iOS typically supports 4-8 concurrent streams). CSS hides
       the extras via display:none; here we also pause their videos to free
       decoder slots and stop unnecessary network/decode work. */
    const MAX_MOBILE_GLOOPIES = 6;
    const items = isMobile ? allItems.slice(0, MAX_MOBILE_GLOOPIES) : allItems;
    if (isMobile) {
      allItems.slice(MAX_MOBILE_GLOOPIES).forEach((el) => {
        el.querySelectorAll("video").forEach((v) => {
          v.pause();
          v.removeAttribute("src");
          v.load(); // release decoder resources
        });
      });
    }

    /* Measure against the panel's own box (min-height:100vh), falling back to the
       viewport so sizing is correct even before layout settles. */
    function measure() {
      const r = world.getBoundingClientRect();
      return {
        w: Math.max(world.clientWidth, r.width, window.innerWidth),
        h: Math.max(world.clientHeight, r.height, window.innerHeight),
      };
    }
    let bounds = measure();

    /* Size so that several gloopies fill the frame while still fitting fully
       inside it. Big enough to dominate the screen (little background shows),
       small enough that they stay contained and can collide. */
    /* Grid used for BOTH sizing and even distribution, so the two always agree.
       Aim for a roughly square-ish grid biased by the frame's aspect ratio. */
    function gridDims() {
      const n = items.length;
      let cols = Math.round(Math.sqrt(n * (bounds.w / bounds.h)));
      cols = Math.max(1, Math.min(n, cols));
      const rows = Math.ceil(n / cols);
      return { cols, rows };
    }

    function gloopySize() {
      const { cols, rows } = gridDims();
      /* Size to a cell, then OVERSIZE so neighbours overlap heavily and the
         background is nearly covered edge to edge. The 2.15x overlap factor
         keeps them huge while still leaving room for multiple rows. */
      const cellW = bounds.w / cols;
      const cellH = bounds.h / rows;
      const base = Math.min(cellW, cellH) * 2.15;
      /* Cap so a single gloopy is still allowed to slightly exceed the frame —
         we WANT them to bleed to (and a touch past) the browser edges rather
         than float inside a white margin. */
      const capped = Math.min(base, bounds.h * 1.05, bounds.w * 1.05);
      return Math.max(360, capped);
    }

    const balls = items.map((el, i) => ({
      el,
      sizeScale: el.classList.contains("bounce-gloopy--agent-large")
        ? 1.24
        : el.classList.contains("bounce-gloopy--agent")
          ? 0.62
          : el.classList.contains("bounce-gloopy--hero-avatar-dog")
            ? 0.9
            : el.classList.contains("bounce-gloopy--hero-avatar") ? 1.2 : 1,
      size: gloopySize(),
      x: 0, y: 0,
      vx: 0, vy: 0,
      rot: (Math.random() - 0.5) * 12,
      vr: (Math.random() - 0.5) * 6, // deg/sec drift
      seed: i,
    }));

    function layout(randomize) {
      bounds = measure();
      const baseSize = gloopySize();
      const speed = Math.max(bounds.w, bounds.h) * 0.08; // px/sec base

      /* EVEN DISTRIBUTION. Assign each gloopy a HOME CELL in a grid that covers
         the whole frame. A gentle spring (in tick) keeps each one roaming near
         its own cell, so the group stays spread across the space — corners and
         edges included — instead of clumping in the middle. The cells are
         defined in CENTER coordinates (of the gloopy box). */
      const { cols, rows } = gridDims();
      /* EDGE FILL. Instead of insetting the home cells by half a gloopy (which
         left a white margin all around), push the outer cells' CENTERS out to
         the very edges of the frame — even a touch beyond — so the gloopies
         optically extend to (and slightly past) the browser edges. The corner
         and edge cells now sit on the frame boundary rather than floating
         inside it. */
      const cxMin = 0, cxMax = bounds.w;
      const cyMin = 0, cyMax = bounds.h;

      balls.forEach((b, i) => {
        const size = baseSize * b.sizeScale;
        b.size = size;
        b.el.style.width = size + "px";
        b.el.style.height = size + "px";

        /* EDGE-BLEED TANK. The gloopies are allowed to push PAST the frame edges
           by up to ~40% of their size, so instead of floating inside a white
           margin they optically fill the screen and spill a little beyond the
           browser edges. They still bounce off these (looser) walls so they
           never drift fully off-screen. */
        const sideBleed = size * 0.4;
        const topBleed = size * 0.4;
        /* The hero is intentionally unmasked at its lower edge, but cap the
           extension so feet can show without whole characters drifting into
           Section 3. The cap scales down on short viewports. */
        const bottomBleed = Math.min(size * 0.18, bounds.h * 0.14, 120);
        b.minX = -sideBleed;
        b.maxX = bounds.w - size + sideBleed;
        b.minY = -topBleed;
        b.maxY = bounds.h - size + bottomBleed;

        /* Home = center of this gloopy's grid cell (spread evenly over frame). */
        const gx = i % cols;
        const gy = Math.floor(i / cols);
        b.homeX = cxMin + ((cxMax - cxMin) * (gx + 0.5)) / cols;
        b.homeY = cyMin + ((cyMax - cyMin) * (gy + 0.5)) / rows;
        /* How far a gloopy may wander from home (in px). Big enough to feel
           free, small enough that its cell never empties out. */
        b.roam = Math.min(size * 0.62, Math.min(bounds.w, bounds.h) * 0.32);

        if (randomize || (b.x === 0 && b.y === 0)) {
          const jitterX = (Math.random() - 0.5) * b.roam;
          const jitterY = (Math.random() - 0.5) * b.roam;
          b.x = b.homeX - size / 2 + jitterX;
          b.y = b.homeY - size / 2 + jitterY;
        }
        b.x = Math.min(b.maxX, Math.max(b.minX, b.x));
        b.y = Math.min(b.maxY, Math.max(b.minY, b.y));

        /* Mobile cast reveal starts every character at the viewport center,
           then sends it outward toward its distributed resting position. */
        b.el.style.setProperty("--hero-cast-from-x", `${bounds.w / 2 - (b.x + size / 2)}px`);
        b.el.style.setProperty("--hero-cast-from-y", `${bounds.h / 2 - (b.y + size / 2)}px`);

        if (randomize || (b.vx === 0 && b.vy === 0)) {
          const a = Math.random() * Math.PI * 2;
          const sp = speed * (0.75 + Math.random() * 0.5);
          b.vx = Math.cos(a) * sp;
          b.vy = Math.sin(a) * sp;
        }
      });
    }

    function draw(b) {
      b.el.style.transform =
        `translate3d(${b.x.toFixed(1)}px, ${b.y.toFixed(1)}px, 0) rotate(${b.rot.toFixed(2)}deg)`;
    }

    let frameId = 0;
    let last = performance.now();
    let running = false;

    function tick(now) {
      frameId = 0;
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      /* Integrate + gentle "home" steering + wall bounce (fully contained). */
      balls.forEach((b) => {
        /* HOME SPRING: only kicks in once the gloopy strays beyond its roam
           radius, so within its cell it drifts freely, but it's always gently
           herded back before it can wander into a neighbour's space and clump.
           This is what keeps the whole frame evenly covered while still moving. */
        const cx = b.x + b.size / 2, cy = b.y + b.size / 2;
        const hx = cx - b.homeX, hy = cy - b.homeY;
        const hd = Math.hypot(hx, hy);
        if (hd > b.roam) {
          const pull = (hd - b.roam) * 2.2; // px/s^2-ish, proportional past the edge
          b.vx -= (hx / hd) * pull * dt;
          b.vy -= (hy / hd) * pull * dt;
        }

        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.rot += b.vr * dt;
        b.vr *= 0.98; // spin settles

        if (b.x <= b.minX) { b.x = b.minX; b.vx = Math.abs(b.vx); b.vr += (Math.random() - 0.5) * 6; }
        else if (b.x >= b.maxX) { b.x = b.maxX; b.vx = -Math.abs(b.vx); b.vr += (Math.random() - 0.5) * 6; }
        if (b.y <= b.minY) { b.y = b.minY; b.vy = Math.abs(b.vy); b.vr += (Math.random() - 0.5) * 6; }
        else if (b.y >= b.maxY) { b.y = b.maxY; b.vy = -Math.abs(b.vy); b.vr += (Math.random() - 0.5) * 6; }
      });

      /* No ball-to-ball collisions: gloopies pass through and OVERLAP each other
         freely as they roam the frame, keeping the screen densely filled. They
         still bounce off the four walls (fish-tank containment above). */
      balls.forEach(draw);

      frameId = requestAnimationFrame(tick);
    }

    function start() {
      if (running) return;
      running = true;
      last = performance.now();
      frameId = requestAnimationFrame(tick);
    }
    function stop() {
      running = false;
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
    }

    layout(true);
    balls.forEach(draw);
    /* Mark ready only after every transform is committed. Critical CSS keeps
       the world hidden before this point, preventing the first-load flash of
       all absolutely positioned agents stacked at the left origin. */
    world.dataset.bounceInit = "true";

    if (reduceMotion) return; // static full-screen arrangement, no motion

    const io = new IntersectionObserver(
      ([entry]) => {
        world.querySelectorAll("video").forEach((v) => {
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.02 }
    );
    io.observe(world);

    let resizeRAF = 0;
    window.addEventListener("resize", () => {
      if (resizeRAF) return;
      resizeRAF = requestAnimationFrame(() => {
        resizeRAF = 0;
        layout(false);
        balls.forEach(draw);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBounceHero);
  } else {
    initBounceHero();
  }
})();
