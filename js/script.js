// =============================================
// CURSEUR - j'ai galéré à le centrer
// =============================================
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top = e.clientY + 'px';
});

// Agrandissement du curseur sur les liens - ça rend mieux
const tousLesLiens = document.querySelectorAll('a, button');
for (let i = 0; i < tousLesLiens.length; i++) {
  tousLesLiens[i].addEventListener('mouseenter', function() {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
  });
  tousLesLiens[i].addEventListener('mouseleave', function() {
    cursor.style.width = '10px';
    cursor.style.height = '10px';
  });
}

// =============================================
// NAVIGATION - effet au scroll (classique)
// =============================================
const maNav = document.getElementById('nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    maNav.classList.add('scrolled');
  } else {
    maNav.classList.remove('scrolled');
  }
  // petit log pour debug (à enlever plus tard)
  console.log('scrollY = ' + window.scrollY);
});

// =============================================
// REVEAL AU SCROLL - j'ai compris le principe
// =============================================
const revealElements = document.querySelectorAll('.reveal');

const observerTruc = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // je désactive l'observation une fois visible (optimisation)
      observerTruc.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(function(el) {
  observerTruc.observe(el);
});

// petit plus : si jamais le curseur disparaît sur mobile (ça arrive)
if (window.innerWidth < 768) {
  cursor.style.display = 'none';
  cursorRing.style.display = 'none';
  document.body.style.cursor = 'auto';
}
