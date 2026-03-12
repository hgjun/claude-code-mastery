# 개발자 웹 이력서 개발 로드맵

## 프로젝트 개요

현대적이고 반응형 개발자 웹 이력서 제작 프로젝트

### 기술 스택
- **HTML5**: 시맨틱 마크업 구조
- **CSS3**: 스타일링 및 애니메이션
- **JavaScript (ES6+)**: 인터랙티브 기능
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크

---

## Phase 1: 프로젝트 설정 및 기본 구조 (1-2일) ✅ 완료

### 1.1 프로젝트 초기화
- [x] 프로젝트 디렉토리 생성
- [x] Tailwind CSS CDN 설치 결정
- [x] 기본 파일 구조 생성
  ```
  /root/lab/claude-code-mastery/
  ├── index.html
  ├── css/
  │   └── style.css
  ├── js/
  │   └── main.js
  ├── assets/
  │   ├── images/
  │   └── icons/
  └── README.md
  ```

### 1.2 HTML 기본 구조 작성
- [x] DOCTYPE 및 메타 태그 설정
- [x] Tailwind CSS 링크 추가
- [x] 시맨틱 HTML5 태그 구조 설계
- [x] **10개 섹션 골격 완성** (Hero, About, Social Media, Skills, Experience, Projects, Education, Contact, Footer)
- [x] **SNS 전용 섹션 추가** (GitHub, YouTube, Instagram, Twitter, LinkedIn, Medium, Discord, Twitch)

---

## Phase 2: 콘텐츠 섹션 개발 (3-5일)

### 2.1 헤더 및 네비게이션
- [ ] 반응형 헤더 디자인
- [ ] 네비게이션 메뉴 구현
- [ ] 모바일 햄버거 메뉴 (JavaScript)

### 2.2 프로필 섹션
- [ ] 프로필 사진 영역
- [ ] 이름 및 직무
- [ ] 간단한 소개 문구
- [ ] 소셜 미디어 링크 (GitHub, LinkedIn, Email)

### 2.3 About Me (소개)
- [ ] 자기소개 텍스트
- [ ] 관심 분야 및 강점
- [ ] 다운로드 가능한 이력서 PDF 버튼

### 2.4 Skills (기술 스택)
- [ ] 기술 카테고리별 분류
  - 프론트엔드: HTML, CSS, JavaScript, React, Vue 등
  - 백엔드: Node.js, Python, Java 등
  - 도구: Git, Docker, VS Code 등
- [ ] 프로그레스 바 또는 아이콘 표시
- [ ] 호버 효과 추가

### 2.5 Experience (경력)
- [ ] 타임라인 형식 디자인
- [ ] 회사명, 직책, 기간
- [ ] 주요 업무 및 성과
- [ ] 반응형 레이아웃

### 2.6 Projects (프로젝트)
- [ ] 프로젝트 카드 그리드 레이아웃
- [ ] 프로젝트 썸네일 이미지
- [ ] 프로젝트명, 설명, 사용 기술
- [ ] GitHub 링크, 라이브 데모 링크
- [ ] 호버 시 상세 정보 표시

### 2.7 Education (학력)
- [ ] 학교명, 전공, 졸업년도
- [ ] 자격증 및 수료증

### 2.8 Contact (연락처)
- [ ] 연락처 폼 (이름, 이메일, 메시지)
- [ ] 폼 유효성 검사 (JavaScript)
- [ ] 이메일 주소, 전화번호
- [ ] 소셜 미디어 링크

### 2.9 Footer
- [ ] 저작권 정보
- [ ] 추가 링크

---

## Phase 3: 스타일링 및 디자인 (2-3일)

### 3.1 Tailwind CSS 커스터마이징
- [ ] 컬러 팔레트 설정
- [ ] 폰트 선택 및 적용 (Google Fonts)
- [ ] 간격 및 크기 조정

### 3.2 반응형 디자인
- [ ] 모바일 (< 768px)
- [ ] 태블릿 (768px - 1024px)
- [ ] 데스크톱 (> 1024px)
- [ ] 미디어 쿼리 테스트

### 3.3 시각적 효과
- [ ] 애니메이션 효과 (fade-in, slide-in)
- [ ] 스크롤 애니메이션
- [ ] 버튼 호버 효과
- [ ] 부드러운 스크롤 이동

---

## Phase 4: JavaScript 인터랙티브 기능 (2-3일)

### 4.1 네비게이션 기능
- [ ] 부드러운 스크롤 네비게이션
- [ ] 현재 섹션 하이라이트
- [ ] 모바일 메뉴 토글

### 4.2 동적 효과
- [ ] 타이핑 애니메이션 (직무/역할)
- [ ] 스크롤 시 요소 나타나기 (Intersection Observer)
- [ ] 프로젝트 필터링 (카테고리별)

### 4.3 폼 처리
- [ ] 입력 필드 유효성 검사
- [ ] 에러 메시지 표시
- [ ] 성공 메시지 표시
- [ ] FormSubmit 또는 EmailJS 연동 (선택)

### 4.4 다크 모드 (선택)
- [ ] 다크/라이트 모드 토글 버튼
- [ ] localStorage에 테마 저장
- [ ] 자동 테마 전환 애니메이션

---

## Phase 5: 최적화 및 테스트 (1-2일)

### 5.1 성능 최적화
- [ ] 이미지 최적화 (WebP, lazy loading)
- [ ] CSS/JS 파일 최소화
- [ ] 불필요한 코드 제거

### 5.2 브라우저 호환성
- [ ] Chrome, Firefox, Safari, Edge 테스트
- [ ] 모바일 브라우저 테스트

### 5.3 접근성 (Accessibility)
- [ ] alt 텍스트 추가
- [ ] ARIA 라벨 적용
- [ ] 키보드 네비게이션 테스트
- [ ] 색상 대비 확인

### 5.4 SEO 최적화
- [ ] 메타 태그 최적화 (title, description)
- [ ] Open Graph 태그 추가
- [ ] Favicon 추가
- [ ] sitemap.xml 생성

---

## Phase 6: 배포 (1일)

### 6.1 배포 플랫폼 선택
- [ ] **GitHub Pages** (무료, 간단)
- [ ] **Vercel** (빠른 배포, 자동 빌드)
- [ ] **Netlify** (무료, CI/CD)

### 6.2 배포 프로세스
- [ ] Git 저장소에 코드 푸시
- [ ] 배포 플랫폼 연결
- [ ] 커스텀 도메인 설정 (선택)
- [ ] HTTPS 활성화

### 6.3 최종 확인
- [ ] 배포된 사이트 테스트
- [ ] 성능 측정 (Google PageSpeed Insights)
- [ ] 모바일 반응형 확인

---

## Phase 7: 유지보수 및 개선 (지속적)

### 7.1 콘텐츠 업데이트
- [ ] 새로운 프로젝트 추가
- [ ] 경력 정보 업데이트
- [ ] 기술 스택 갱신

### 7.2 기능 개선
- [ ] 사용자 피드백 반영
- [ ] 애널리틱스 추가 (Google Analytics)
- [ ] 성능 모니터링

---

## 참고 자료

### Tailwind CSS
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [Tailwind CSS 컴포넌트](https://tailwindui.com/components)

### 디자인 영감
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### 무료 리소스
- [Unsplash](https://unsplash.com/) - 무료 이미지
- [Font Awesome](https://fontawesome.com/) - 아이콘
- [Google Fonts](https://fonts.google.com/) - 웹 폰트

---

## 예상 개발 기간

**총 10-16일** (파트타임 기준)
- 풀타임으로 작업 시: **2-3주**
- 기본 기능만: **1주**

---

## 성공 기준

- ✅ 모든 디바이스에서 반응형 동작
- ✅ 부드러운 애니메이션 및 전환 효과
- ✅ 접근성 표준 준수 (WCAG 2.1 AA)
- ✅ 빠른 로딩 속도 (< 3초)
- ✅ 깨끗하고 유지보수 가능한 코드

---

## 다음 단계

1. **Phase 1** 시작: 프로젝트 설정 및 Tailwind CSS 연동
2. **샘플 콘텐츠** 준비: 이력서 내용 정리
3. **와이어프레임** 스케치: 레이아웃 구상

---

**행운을 빕니다! 🚀**
