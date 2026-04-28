// ============================================
// NIMBUS — interactions
// ============================================

(() => {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');

  // ----- Sticky nav state on scroll -----
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Smooth scroll for hash links -----
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // ----- Reveal-on-scroll animations -----
  const revealTargets = document.querySelectorAll(
    '.section-head, .feature-card, .dashboard__frame, .stats__item, .plan, .cta__inner, .logos__grid'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const delay = Math.min((i % 4) * 80, 280);
            setTimeout(() => entry.target.classList.add('is-visible'), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // ----- Subtle parallax on hero glows -----
  const glow1 = document.querySelector('.hero__glow--1');
  const glow2 = document.querySelector('.hero__glow--2');
  if (glow1 && glow2 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < window.innerHeight) {
            glow1.style.transform = `translate3d(${y * 0.08}px, ${y * 0.2}px, 0)`;
            glow2.style.transform = `translate3d(${-y * 0.08}px, ${y * 0.15}px, 0)`;
          }
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  // ----- Mobile burger (toggle a simple menu overlay) -----
  if (burger) {
    burger.addEventListener('click', () => {
      const links = document.querySelector('.nav__links');
      if (!links) return;
      const isOpen = links.classList.toggle('is-open');
      links.style.cssText = isOpen
        ? 'display:flex;flex-direction:column;position:fixed;inset:64px 0 auto 0;background:rgba(10,11,20,0.96);backdrop-filter:blur(18px);padding:24px var(--pad);gap:18px;border-bottom:1px solid var(--line);'
        : '';
    });
  }
})();
