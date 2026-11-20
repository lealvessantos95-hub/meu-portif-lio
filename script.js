/* Portfólio Leandro Santos — JavaScript puro, sem dependências externas.
 * PERSONALIZAÇÃO: altere o @ do Instagram no index.html e, quando tiver,
 * adicione seus outros links profissionais na seção Contato.
 */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu-mobile');
  if (menuButton && menu) {
    const closeMenu = () => {
      menu.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
    };
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menu.hidden = isOpen;
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  document.querySelector('#year').textContent = new Date().getFullYear();

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(el => observer.observe(el));
  } else { reveals.forEach(el => el.classList.add('visible')); }

  const modal = document.querySelector('#project-modal');
  const openButton = document.querySelector('[data-open-project]');
  const closeButtons = document.querySelectorAll('[data-close-project]');
  let previousFocus = null;
  if (modal && openButton) {
    openButton.addEventListener('click', () => {
      previousFocus = document.activeElement;
      if (typeof modal.showModal === 'function') modal.showModal();
      else modal.setAttribute('open', '');
      document.body.style.overflow = 'hidden';
    });
    const closeModal = () => {
      const video = modal.querySelector('video');
      if (video) video.pause();
      if (typeof modal.close === 'function') modal.close();
      else modal.removeAttribute('open');
      document.body.style.overflow = '';
      if (previousFocus) previousFocus.focus();
    };
    closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
    modal.addEventListener('cancel', () => { document.body.style.overflow = ''; });
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
    const galleryImage = document.querySelector('#gallery-image');
    const galleryCaption = document.querySelector('#gallery-caption');
    modal.querySelectorAll('.gallery-thumb').forEach(button => {
      button.addEventListener('click', () => {
        galleryImage.src = button.dataset.image;
        galleryImage.alt = button.dataset.caption;
        galleryCaption.textContent = button.dataset.caption;
        modal.querySelectorAll('.gallery-thumb').forEach(b => {
          const active = b === button;
          b.classList.toggle('selected', active);
          b.setAttribute('aria-pressed', String(active));
        });
      });
    });
  }

  const toast = document.querySelector('#toast');
  let toastTimer;
  const showToast = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
  };
  document.querySelector('#copy-handle')?.addEventListener('click', async () => {
    const handle = '@leandro.sants';
    try {
      await navigator.clipboard.writeText(handle);
      showToast(`${handle} copiado!`);
    } catch (error) {
      showToast(`Seu Instagram: ${handle}`);
    }
  });

  const navLinks = [...document.querySelectorAll('.nav-desktop a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window && navLinks.length) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });
    sections.forEach(section => spy.observe(section));
  }
})();
