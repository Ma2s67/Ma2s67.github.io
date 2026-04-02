// =============================================
// CURSEUR PERSONNALISÉ
// =============================================
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});

// Agrandir le curseur quand on passe sur un lien ou bouton
document.querySelectorAll('a, button').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    cursor.style.width  = '20px';
    cursor.style.height = '20px';
  });
  el.addEventListener('mouseleave', function() {
    cursor.style.width  = '10px';
    cursor.style.height = '10px';
  });
});

// =============================================
// NAVIGATION — effet au scroll
// =============================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// =============================================
// ANIMATIONS — apparition au scroll (reveal)
// =============================================
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(function(el) {
  observer.observe(el);
});
