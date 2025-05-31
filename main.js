// Dark mode toggle
const darkBtn = document.getElementById('darkToggle');
darkBtn.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkmode', document.body.classList.contains('dark'));
};
if (localStorage.getItem('darkmode') === 'true') {
  document.body.classList.add('dark');
}

// GSAP 애니메이션 효과 (프레이머 모션 느낌)
window.addEventListener('DOMContentLoaded', () => {
  gsap.to('.animate-fadein', { opacity: 1, duration: 1, y: 0, ease: 'power2.out' });
  gsap.utils.toArray('.animate-slideup').forEach((el, i) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 1, delay: 0.2 + i * 0.15, ease: 'power2.out' });
  });
  gsap.to('.animate-float', { opacity: 1, duration: 1.2, y: 0, ease: 'power2.out', delay: 0.2 });

  // 요소가 날아다니는 효과
  gsap.utils.toArray('.flying').forEach((el, i) => {
    gsap.to(el, {
      x: el.style.getPropertyValue('--fly-x') || 0,
      y: el.style.getPropertyValue('--fly-y') || 0,
      rotation: (Math.random() - 0.5) * 30,
      scale: 1.08,
      duration: 2.5 + Math.random(),
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      delay: 0.5 + i * 0.2
    });
  });
  // 갤러리 이미지 부유 효과
  gsap.utils.toArray('.gallery-img').forEach((el, i) => {
    gsap.to(el, {
      y: -24,
      scale: 1.04,
      duration: 3 + Math.random(),
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: i * 0.2
    });
  });
  // 아이콘 부유 효과
  gsap.utils.toArray('.floating').forEach((el, i) => {
    gsap.to(el, {
      y: -16,
      x: (i % 2 === 0 ? 1 : -1) * 16,
      rotation: (Math.random() - 0.5) * 12,
      duration: 2.2 + Math.random(),
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      delay: 0.1 * i
    });
  });
});
