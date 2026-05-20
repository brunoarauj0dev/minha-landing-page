const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener('click', function() {
  menu.classList.toggle('ativo');
});

const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
});

elementos.forEach(function(elemento) {
  observer.observe(elemento);
});