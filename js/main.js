// Mobile menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
if (hamburger) {
  hamburger.addEventListener('click', () => nav.classList.toggle('open'));
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) header.style.height = window.scrollY > 60 ? '62px' : '75px';
});
