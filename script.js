document.addEventListener("DOMContentLoaded", () => {
  console.log("Página lista 🚀");

  const modal   = document.getElementById('newsModal');
  const titleEl = document.getElementById('newsTitle');
  const dateEl  = document.getElementById('newsDate');
  const bodyEl  = document.getElementById('newsBody');

  function openNews(article) {
    // Copiar título, fecha y contenido oculto
    titleEl.textContent = article.querySelector('.news-item__title').textContent;
    dateEl.textContent  = article.querySelector('.news-item__date').textContent;
    bodyEl.innerHTML    = article.querySelector('.news-item__full').innerHTML;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', escClose, { once: true });
  }

  function closeNews() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function escClose(e) { if (e.key === 'Escape') closeNews(); }

  // Detectar clic en cualquier "Leer más"
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.news-item__link');
    if (link) {
      e.preventDefault();
      const article = link.closest('.news-item');
      openNews(article);
    }
    if (e.target.matches('[data-close]')) {
      closeNews();
    }
  });

  // Cerrar al hacer clic en el fondo
  modal.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) closeNews();
  });
});
