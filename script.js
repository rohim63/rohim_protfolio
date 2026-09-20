// ====================================
// PREMIUM LUXURY PORTFOLIO - JAVASCRIPT
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

  modalTitle.textContent = title || 'Professional Certification';
  modalBody.innerHTML = `
    <div style="padding: 20px; background: rgba(212, 175, 55, 0.05); border-radius: 12px; border: 1px solid rgba(212, 175, 55, 0.2); margin-bottom: 24px;">
      <p style="color: var(--gray-700); line-height: 1.7; font-weight: 600; margin-bottom: 16px;">
        <strong style="color: var(--primary);">✓ Verified Certification</strong>
      </p>
      <p style="color: var(--gray-600); line-height: 1.7;">
        This certification is available for verification upon request. For serious inquiries regarding 
        credentials, documentation, or professional references, please contact me directly.
      </p>
    </div>
    
    <div style="background: var(--gray-200); padding: 24px; border-radius: 12px; border: 1px solid rgba(212, 175, 55, 0.2);">
      <h4 style="color: var(--primary); font-weight: 800; margin-bottom: 16px; font-size: 16px;">Contact Information</h4>
      
      <div style="margin-bottom: 16px;">
        <p style="font-weight: 700; color: var(--gray-800); margin-bottom: 4px; font-size: 13px;">📧 Professional Email</p>
        <a href="mailto:rohim6360ba.en@gmail.com" style="color: var(--primary); font-weight: 700; text-decoration: underline;">rohim6360ba.en@gmail.com</a>
      </div>
      
      <div style="margin-bottom: 16px;">
        <p style="font-weight: 700; color: var(--gray-800); margin-bottom: 4px; font-size: 13px;">📞 Direct Line</p>
        <a href="tel:+959421128678" style="color: var(--primary); font-weight: 700; text-decoration: underline;">+95 942 112 8678</a>
      </div>
      
      <div>
        <p style="font-weight: 700; color: var(--gray-800); margin-bottom: 4px; font-size: 13px;">💬 WhatsApp</p>
        <a href="https://wa.me/959421128678" target="_blank" rel="noopener" style="color: var(--primary); font-weight: 700; text-decoration: underline;">Send Message</a>
      </div>
    </div>

    <p style="margin-top: 20px; font-size: 13px; color: var(--gray-600); font-style: italic; line-height: 1.6;">
      All certifications are authentic and can be verified through issuing organizations. 
      Redacted copies available for public viewing upon request to protect sensitive personal information.
    </p>
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
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
    header.style.background = 'rgba(10, 10, 10, 0.98)';
  } else {
    header.style.boxShadow = 'none';
    header.style.background = 'rgba(10, 10, 10, 0.95)';
  }

  lastScroll = currentScroll;
});

// Parallax Effect for Hero Shapes (Optional - Premium Touch)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.05;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Console Message (Premium Branding)
console.log(
  '%c🌟 PREMIUM PORTFOLIO 🌟',
  'background: linear-gradient(135deg, #D4AF37, #F0D78C); color: #0A0A0A; padding: 16px 32px; font-size: 18px; font-weight: 900; border-radius: 8px; text-align: center;'
);

console.log(
  '%c👋 Hello! Looking for an elite interpreter?',
  'color: #D4AF37; font-size: 16px; font-weight: 700; margin-top: 12px;'
);

console.log(
  '%c📧 rohim6360ba.en@gmail.com | 📞 +95 942 112 8678',
  'color: #B8B8B8; font-size: 14px; font-weight: 600; margin-top: 8px;'
);

console.log(
  '%cRohingya • Burmese • English | Medical • Legal • Humanitarian',
  'color: #00D4AA; font-size: 13px; font-weight: 600; margin-top: 8px;'
);
