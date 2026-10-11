/* Floating Oaki eggs behind the app preview. Eggs share one transparent atlas. */
(() => {
  const world = document.querySelector('.bounce-world');
  if (!world) return;

  const elements = [...world.querySelectorAll('.oaki-egg')];
  const starts = [
    [-.11, -.18, 1.07], [.28, -.29, .88], [.75, -.18, 1.06],
    [-.16, .34, 1.02], [.82, .29, 1.09], [-.08, .76, 1.04],
    [.30, .84, .90], [.72, .77, 1.02], [.91, .02, .78],
  ];
  const eggs = elements.map((element, index) => ({
    element,
    start: starts[index],
    x: 0, y: 0, size: 0, radius: 0,
    vx: 0, vy: 0,
    angle: (index % 2 ? 1 : -1) * (7 + index * 2),
    spin: 0,
  }));

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile = matchMedia('(max-width: 700px)');
  let activeEggs = eggs;
  let bounds = { width: 1, height: 1 };
  let frame = 0;
  let previousTime = 0;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const limits = (egg) => ({
    minX: -egg.size * .32,
    maxX: bounds.width - egg.size * .68,
    minY: -egg.size * .3,
    maxY: bounds.height - egg.size * .7,
  });

  function draw(egg) {
    egg.element.style.transform = `translate3d(${egg.x.toFixed(1)}px, ${egg.y.toFixed(1)}px, 0) rotate(${egg.angle.toFixed(2)}deg)`;
  }

  function layout(initial = false) {
    const old = bounds;
    const rect = world.getBoundingClientRect();
    bounds = { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
    activeEggs = mobile.matches ? eggs.slice(0, 6) : eggs;
    const base = clamp(Math.min(bounds.width, bounds.height) * .36, 160, 390);

    eggs.forEach((egg, index) => {
      const [u, v, scale] = egg.start;
      egg.size = base * scale;
      egg.radius = egg.size * .33;
      egg.element.style.width = `${egg.size}px`;
      egg.element.style.height = `${egg.size}px`;
      if (initial) {
        egg.x = u * bounds.width;
        egg.y = v * bounds.height;
        const direction = (index * 2.39996) + .7;
        const speed = clamp(Math.min(bounds.width, bounds.height) * .075, 45, 90);
        egg.vx = Math.cos(direction) * speed;
        egg.vy = Math.sin(direction) * speed;
      } else {
        egg.x *= bounds.width / old.width;
        egg.y *= bounds.height / old.height;
      }
      const edge = limits(egg);
      egg.x = clamp(egg.x, edge.minX, edge.maxX);
      egg.y = clamp(egg.y, edge.minY, edge.maxY);
      draw(egg);
    });
  }

  function bounceOffWalls(egg) {
    const edge = limits(egg);
    if (egg.x < edge.minX) {
      egg.x = edge.minX;
      egg.vx = Math.abs(egg.vx);
      egg.spin += 1.2;
    } else if (egg.x > edge.maxX) {
      egg.x = edge.maxX;
      egg.vx = -Math.abs(egg.vx);
      egg.spin -= 1.2;
    }
    if (egg.y < edge.minY) {
      egg.y = edge.minY;
      egg.vy = Math.abs(egg.vy);
      egg.spin += 1.2;
    } else if (egg.y > edge.maxY) {
      egg.y = edge.maxY;
      egg.vy = -Math.abs(egg.vy);
      egg.spin -= 1.2;
    }
  }

  function collide(first, second) {
    const dx = second.x + second.size / 2 - first.x - first.size / 2;
    const dy = second.y + second.size / 2 - first.y - first.size / 2;
    const distance = Math.hypot(dx, dy) || .001;
    const minimum = first.radius + second.radius;
    if (distance >= minimum) return;

    const nx = dx / distance;
    const ny = dy / distance;
    const overlap = (minimum - distance) / 2;
    first.x -= nx * overlap;
    first.y -= ny * overlap;
    second.x += nx * overlap;
    second.y += ny * overlap;

    const closingSpeed = (second.vx - first.vx) * nx + (second.vy - first.vy) * ny;
    if (closingSpeed < 0) {
      const impulse = -(1 + .86) * closingSpeed / 2;
      first.vx -= impulse * nx;
      first.vy -= impulse * ny;
      second.vx += impulse * nx;
      second.vy += impulse * ny;
      first.spin -= impulse * .035;
      second.spin += impulse * .035;
    }
  }

  function tick(time) {
    const dt = Math.min((time - (previousTime || time)) / 1000, .05);
    previousTime = time;
    activeEggs.forEach((egg) => {
      egg.x += egg.vx * dt;
      egg.y += egg.vy * dt;
      egg.angle += egg.spin * dt;
      egg.spin *= Math.pow(.985, dt * 60);
      bounceOffWalls(egg);
    });
    for (let i = 0; i < activeEggs.length; i += 1) {
      for (let j = i + 1; j < activeEggs.length; j += 1) {
        collide(activeEggs[i], activeEggs[j]);
      }
    }
    activeEggs.forEach((egg) => {
      bounceOffWalls(egg);
      draw(egg);
    });
    frame = requestAnimationFrame(tick);
  }

  function start() {
    if (frame || reducedMotion) return;
    previousTime = 0;
    frame = requestAnimationFrame(tick);
  }
  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  }

  layout(true);
  world.dataset.bounceInit = 'true';
  world.dataset.eggsReady = 'true';
  if (!reducedMotion) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) start();
      else stop();
    }, { threshold: .01 });
    observer.observe(world);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else if (world.getBoundingClientRect().bottom > 0 && world.getBoundingClientRect().top < innerHeight) start();
    });
  }
  let resizeFrame = 0;
  addEventListener('resize', () => {
    if (resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      layout();
    });
  }, { passive: true });
})();
