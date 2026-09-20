// ====================================
// PORTFOLIO - JAVASCRIPT
// ====================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

// ---------- Smooth scroll (including "Back to top") ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    // Back to top: always scroll to the very top of the page
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

const EMAIL = 'rohim6360ba.en@gmail.com';

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

// ---------- Scroll reveal animations ----------
const revealItems = document.querySelectorAll('.service-card, .about-card, .timeline-item, .cert-card, .skill-category');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      observer.unobserve(el);
      // Remove reveal classes afterwards so normal hover effects are fast again
      setTimeout(() => el.classList.remove('reveal', 'is-visible'), 700);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealItems.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ---------- Header shadow + hero parallax (single throttled scroll handler) ----------
const header = document.querySelector('.header');
const shapes = document.querySelectorAll('.shape');
let ticking = false;

function onScroll() {
  const y = window.scrollY || window.pageYOffset;
  if (header) header.classList.toggle('scrolled', y > 100);
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
