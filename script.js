// ====================================
// PORTFOLIO - JAVASCRIPT
// ====================================

const root = document.documentElement;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EMAIL = 'rohim6360ba.en@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/rohim-ullah-675530371/';

// ---------- Theme switch (dark <-> light) ----------
const themeBtn = document.getElementById('themeToggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (themeBtn) {
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#0B0B12' : '#F6F5FB');
}

applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.classList.add('theme-anim');
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
    setTimeout(() => root.classList.remove('theme-anim'), 500);
  });
}

// ---------- Hero effects (start after the welcome screen) ----------
let heroStarted = false;

function startHero() {
  if (heroStarted) return;
  heroStarted = true;
  startTyping();
  startCounters();
}

// Typewriter roles
function startTyping() {
  const el = document.getElementById('typed');
  if (!el || prefersReducedMotion) return;
  const roles = ['Medical Interpreter', 'Legal & Asylum Interpreter', 'Humanitarian Language Specialist', 'Rohingya · Burmese · English Expert'];
  let r = 0, i = 0, deleting = false;

  function tick() {
    const word = roles[r];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = deleting ? 35 : 75;
    if (!deleting && i === word.length) { deleting = true; delay = 1800; }
    else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 400; }
    setTimeout(tick, delay);
  }
  el.textContent = '';
  tick();
}

// Count-up numbers
function startCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (prefersReducedMotion) { el.textContent = target + suffix; return; }
    const duration = 1600;
    const start = performance.now();
    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

// ---------- Welcome screen ----------
const welcome = document.getElementById('welcome');
const welcomeLang = document.getElementById('welcomeLang');
const welcomeEnter = document.getElementById('welcomeEnter');
let langTimer = null;
let autoTimer = null;

function closeWelcome() {
  if (!welcome || welcome.classList.contains('hide')) return;
  welcome.classList.add('hide');
  document.body.style.overflow = '';
  clearInterval(langTimer);
  clearTimeout(autoTimer);
  try { sessionStorage.setItem('welcomed', '1'); } catch (e) { /* ignore */ }
  setTimeout(() => { welcome.style.display = 'none'; }, 800);
  startHero();
}

if (welcome && !root.classList.contains('seen')) {
  document.body.style.overflow = 'hidden';
  if (welcomeEnter) {
    welcomeEnter.addEventListener('click', closeWelcome);
    welcomeEnter.focus({ preventScroll: true });
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeWelcome(); });

  // "Welcome" in several languages
  const greetings = ['Welcome', 'မင်္ဂလာပါ', 'স্বাগতম', 'Welcome'];
  let g = 0;
  if (welcomeLang && !prefersReducedMotion) {
    langTimer = setInterval(() => {
      welcomeLang.classList.add('swap');
      setTimeout(() => {
        g = (g + 1) % greetings.length;
        welcomeLang.textContent = greetings[g];
        welcomeLang.classList.remove('swap');
      }, 350);
    }, 1500);
  }
  autoTimer = setTimeout(closeWelcome, 6000);
} else {
  startHero();
}

// ---------- Mobile navigation ----------
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

function closeNav() {
  if (!navList || !navToggle) return;
  navList.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navList.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) closeNav();
  });
}

// ---------- Smooth scroll (including every "Back to top" button) ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    if (href === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      history.replaceState(null, '', window.location.pathname + window.location.search);
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    }
  });
});

// ---------- Profile image fallback ----------
const profileImage = document.querySelector('.profile-image img');
const profilePlaceholder = document.querySelector('.profile-placeholder');

if (profileImage && profilePlaceholder) {
  const update = () => {
    const loaded = profileImage.complete && profileImage.naturalWidth > 0;
    profilePlaceholder.style.display = loaded ? 'none' : 'flex';
  };
  profileImage.addEventListener('load', update);
  profileImage.addEventListener('error', update);
  update();
}

// ---------- Certificate modal ----------
const modal = document.getElementById('certModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
let lastFocused = null;

function openModal(title) {
  if (!modal) return;
  lastFocused = document.activeElement;
  modalTitle.textContent = title || 'Professional Certification';
  modalBody.innerHTML = `
    <div class="modal-note">
      <p><strong>✓ Verified Certification</strong></p>
      <p>This certification is available for verification upon request. For serious inquiries regarding
      credentials, documentation, or professional references, please contact me directly.</p>
    </div>
    <div class="modal-contact">
      <h4>Contact Information</h4>
      <div><span>📧 Professional Email</span><a href="mailto:${EMAIL}">${EMAIL}</a></div>
      <div><span>📞 Direct Line</span><a href="tel:+959421128678">+95 942 112 8678</a></div>
      <div><span>💬 WhatsApp</span><a href="https://wa.me/959421128678" target="_blank" rel="noopener">Send Message</a></div>
      <div><span>🔗 LinkedIn</span><a href="${LINKEDIN}" target="_blank" rel="noopener">View Profile</a></div>
    </div>
    <p class="modal-footnote">All certifications are authentic and can be verified through issuing organizations.
    Redacted copies available for public viewing upon request to protect sensitive personal information.</p>
  `;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.cert-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.getAttribute('data-title')));
});
document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') closeModal();
});

// ---------- Scroll reveal, language bars, active menu link ----------
const revealItems = document.querySelectorAll('.service-card, .about-card, .timeline-item, .cert-card, .skill-category, .visual-card');
const bars = document.querySelectorAll('.progress');
const sections = document.querySelectorAll('main section[id]');

if ('IntersectionObserver' in window) {
  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-visible');
        revealObserver.unobserve(el);
        // Remove reveal classes afterwards so hover effects are fast again
        setTimeout(() => el.classList.remove('reveal', 'is-visible'), 800);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });
  }

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('filled');
      barObserver.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  bars.forEach(bar => barObserver.observe(bar));

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.nav-list a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id && !a.classList.contains('btn-nav'));
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => spy.observe(s));
} else {
  bars.forEach(bar => bar.classList.add('filled'));
}

// ---------- Scroll effects (one throttled handler) ----------
const header = document.querySelector('.header');
const progressBar = document.getElementById('scrollProgress');
const fab = document.getElementById('fab');
const shapes = document.querySelectorAll('.shape');
let ticking = false;

function onScroll() {
  const y = window.scrollY || window.pageYOffset;
  const max = document.documentElement.scrollHeight - window.innerHeight;

  if (header) header.classList.toggle('scrolled', y > 60);
  if (progressBar) progressBar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
  if (fab) fab.classList.toggle('show', y > 500);

  if (!prefersReducedMotion && y < window.innerHeight * 1.5) {
    shapes.forEach((shape, i) => {
      shape.style.transform = `translateY(${y * (i + 1) * 0.05}px)`;
    });
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });

onScroll();
