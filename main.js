// 다크모드 토글 스위치
const darkBtn = document.getElementById('darkToggle');
darkBtn.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkmode', document.body.classList.contains('dark'));
  updateToggle();
};
function updateToggle() {
  const thumb = document.querySelector('.toggle-thumb');
  if(document.body.classList.contains('dark')) {
    thumb.style.transform = 'translateX(26px)';
  } else {
    thumb.style.transform = 'translateX(0)';
  }
}
if (localStorage.getItem('darkmode') === 'true') {
  document.body.classList.add('dark');
}
updateToggle();

// GSAP 애니메이션
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-title', { opacity: 0, y: 40, duration: 1, ease: 'power2.out' });
  gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 1, delay: 0.3 });
  gsap.from('.cta', { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.7 });
  gsap.from('.about-avatar', { opacity: 0, x: -40, duration: 1, delay: 0.5 });
  gsap.from('.about-list li', { opacity: 0, x: 30, duration: 0.7, stagger: 0.1, delay: 0.7 });
  gsap.utils.toArray('.project-card').forEach((el, i) => {
    gsap.from(el, { opacity: 0, y: 40, duration: 1, delay: 0.2 + i * 0.15 });
  });
  gsap.from('.skills-list .skill', { opacity: 0, x: -30, duration: 0.7, stagger: 0.08, delay: 0.5 });
  gsap.from('.contact-form input, .contact-form textarea', { opacity: 0, y: 20, duration: 0.7, stagger: 0.1, delay: 0.6 });
});
// Contact form dummy submit
const form = document.querySelector('.contact-form');
if(form) form.onsubmit = e => {
  e.preventDefault();
  alert('Thank you for your message! (Demo only)');
  form.reset();
};
