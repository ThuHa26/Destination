document.addEventListener('DOMContentLoaded', function(){
  // Search simple: filter by data-title
  const searchInput = document.getElementById('search');
  const cards = Array.from(document.querySelectorAll('.card'));

  document.getElementById('searchBtn').addEventListener('click', function(){
    const q = searchInput.value.trim().toLowerCase();
    cards.forEach(c => {
      const t = (c.getAttribute('data-title')||'').toLowerCase();
      c.style.display = t.includes(q) ? '' : 'none';
    });
  });

  // Hover handled by CSS; click opens lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  cards.forEach(c=>{
    c.addEventListener('click', ()=>{
      const img = c.querySelector('img');
      lbImg.src = img.src;
      lbCaption.textContent = c.getAttribute('data-title') || '';
      lightbox.classList.remove('hidden');
    });
  });

  lbClose.addEventListener('click', ()=> lightbox.classList.add('hidden'));
  lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) lightbox.classList.add('hidden') });
});