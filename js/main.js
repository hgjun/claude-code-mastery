// ==========================================
// DOM 요소 로딩 완료 대기
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('페이지 로드 완료');

  // 초기화 함수 실행
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
});

// ==========================================
// 모바일 메뉴 토글
// ==========================================
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      console.log('모바일 메뉴 토글');
    });
  }
}

// ==========================================
// 부드러운 스크롤 네비게이션
// ==========================================
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // 모바일 메뉴 닫기
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
}

// ==========================================
// 스크롤 시 요소 애니메이션 (Intersection Observer)
// ==========================================
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // fade-in 클래스를 가진 모든 요소 관찰
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}
