// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('is-open')) return;
    const within = menu.contains(e.target) || toggle.contains(e.target);
    if (!within) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Smooth anchor scrolling (fixes “some links don’t jump”)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', hash);
  });
});

// Profile photo fallback (show placeholder if image missing)
const photoWrap = document.querySelector('.profile-photo');
if (photoWrap) {
  const img = photoWrap.querySelector('img');
  const fallback = photoWrap.querySelector('.profile-fallback');

  if (img && fallback) {
    const show = () => { fallback.style.display = 'flex'; };
    const hide = () => { fallback.style.display = 'none'; };

    show();
    img.addEventListener('load', hide);
    img.addEventListener('error', show);

    if (img.complete && img.naturalWidth > 0) hide();
  }
}

// Certificate modal viewer
const modal = document.getElementById('docModal');
const docTitle = document.getElementById('docTitle');
const docBody = document.getElementById('docBody');

function openModal(title, file) {
  if (!modal || !docTitle || !docBody) return;

  docTitle.textContent = title || 'Document';
  docBody.innerHTML = '';

  const safeFile = (file || '').trim();

  if (!safeFile) {
    docBody.innerHTML = `
      <div style="padding:16px; color:#334155; line-height:1.7; font-weight:650;">
        This document is available upon request. To show it publicly, upload a redacted PDF/image to
        <code>/assets/certificates/</code> and set the card’s <code>data-file</code>.
      </div>`;
  } else if (safeFile.toLowerCase().endsWith('.pdf')) {
    const iframe = document.createElement('iframe');
    iframe.src = safeFile;
    iframe.title = title || 'Document';
    docBody.appendChild(iframe);
  } else {
    const wrap = document.createElement('div');
    wrap.className = 'img-wrap';
    const img = document.createElement('img');
    img.src = safeFile;
    img.alt = title || 'Document';
    wrap.appendChild(img);
    docBody.appendChild(wrap);
  }

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (docBody) docBody.innerHTML = '';
}

document.querySelectorAll('.cert-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    openModal(btn.getAttribute('data-title'), btn.getAttribute('data-file'));
  });
});

document.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}
