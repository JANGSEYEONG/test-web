// Dark mode toggle
const darkBtn = document.getElementById('darkToggle');
darkBtn.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkmode', document.body.classList.contains('dark'));
};
if (localStorage.getItem('darkmode') === 'true') {
  document.body.classList.add('dark');
}

// GSAP 애니메이션 효과 (프레이머 모션 대체)
window.addEventListener('DOMContentLoaded', () => {
  gsap.to('.animate-fadein', { opacity: 1, duration: 1, y: 0, ease: 'power2.out' });
  gsap.utils.toArray('.animate-slideup').forEach((el, i) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 1, delay: 0.2 + i * 0.15, ease: 'power2.out' });
  });
});
