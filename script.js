// ====================================
// MODERN PORTFOLIO - JAVASCRIPT
// ====================================

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when clicking a link
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      history.pushState(null, '', href);
    }
  });
});

// Profile Image Fallback
const profileImage = document.querySelector('.profile-image img');
const profilePlaceholder = document.querySelector('.profile-placeholder');

if (profileImage && profilePlaceholder) {
  const showPlaceholder = () => {
    profilePlaceholder.style.display = 'flex';
  };

  const hidePlaceholder = () => {
    profilePlaceholder.style.display = 'none';
  };

  // Show placeholder initially
  showPlaceholder();

  profileImage.addEventListener('load', () => {
    if (profileImage.naturalWidth > 0) {
      hidePlaceholder();
    }
  });

  profileImage.addEventListener('error', showPlaceholder);

  // Check if image is already loaded
  if (profileImage.complete && profileImage.naturalWidth > 0) {
    hidePlaceholder();
  }
}

// Certificate Modal
const modal = document.getElementById('certModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const certButtons = document.querySelectorAll('.cert-btn');
const closeButtons = document.querySelectorAll('[data-close]');

function openModal(title) {
  if (!modal) return;

  modalTitle.textContent = title || 'Certification';
  modalBody.innerHTML = `
    <p style="color: var(--gray-600); line-height: 1.7;">
      This certification is available upon request. To verify credentials or request 
      documentation, please contact me directly via email or phone.
    </p>
    <div style="margin-top: 24px; padding: 20px; background: var(--gray-50); border-radius: var(--radius-md); border: 1px solid var(--gray-200);">
      <p style="font-weight: 700; color: var(--gray-900); margin-bottom: 8px;">📧 Email:</p>
      <p style="color: var(--gray-600);">rohim6360ba.en@gmail.com</p>
      
      <p style="font-weight: 700; color: var(--gray-900); margin-top: 16px; margin-bottom: 8px;">📞 Phone:</p>
      <p style="color: var(--gray-600);">+95 942 112 8678</p>
    </div>
  `;

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

certButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(btn.getAttribute('data-title'));
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', closeModal);
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Animate sections on scroll
const animateOnScroll = document.querySelectorAll('.service-card, .about-card, .timeline-item, .cert-card, .skill-category');

animateOnScroll.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.boxShadow = 'var(--shadow-md)';
  } else {
    header.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});

// Console Message
console.log('%c👋 Hello! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 20px; font-size: 16px; font-weight: bold; border-radius: 8px;');
console.log('%cLooking to hire a professional interpreter? Let\'s connect!', 'color: #2563EB; font-size: 14px; font-weight: 600;');
console.log('%c📧 rohim6360ba.en@gmail.com', 'color: #6B7280; font-size: 13px;');
