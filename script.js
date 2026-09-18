// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('is-open')) return;
    const within = menu.contains(e.target) || toggle.contains(e.target);
    if (!within) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Profile photo: if image fails, keep placeholder
const photoWrap = document.querySelector('.profile-photo');
if (photoWrap) {
  const hasPhoto = photoWrap.getAttribute('data-has-photo') === 'true';
  const img = photoWrap.querySelector('img');
  if (hasPhoto && img) {
    img.addEventListener('error', () => {
      photoWrap.setAttribute('data-has-photo', 'false');
    });
  }
}

// Document modal viewer (certificates)
const modal = document.getElementById('docModal');
const docTitle = document.getElementById('docTitle');
const docBody = document.getElementById('docBody');

function openModal(title, file) {
  if (!modal || !docTitle || !docBody) return;

  docTitle.textContent = title;
  const safeFile = (file || '').trim();
  docBody.innerHTML = '';

  if (!safeFile) {
    docBody.innerHTML = `
      <div style="padding:16px; color:#334155; line-height:1.6;">
        This document is available upon request. To enable public viewing, upload a redacted PDF/image to
        <code>/assets/certificates/</code> and link it using <code>data-file</code>.
      </div>`;
  } else if (safeFile.toLowerCase().endsWith('.pdf')) {
    const iframe = document.createElement('iframe');
    iframe.src = safeFile;
    iframe.title = title;
    docBody.appendChild(iframe);
  } else {
    const wrap = document.createElement('div');
    wrap.className = 'img-wrap';
    const img = document.createElement('img');
    img.src = safeFile;
    img.alt = title;
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
    const title = btn.getAttribute('data-title') || 'Document';
    const file = btn.getAttribute('data-file') || '';
    openModal(title, file);
  });
});

document.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
