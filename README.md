# 개발자 웹 이력서

현대적이고 반응형인 개발자 포트폴리오 웹사이트입니다.

## 프로젝트 개요

이 프로젝트는 개인 이력서 및 포트폴리오를 온라인으로 공유하기 위한 정적 웹사이트입니다.
모바일, 태블릿, 데스크톱 등 모든 기기에서 최적화된 경험을 제공합니다.

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 스타일링 및 애니메이션
- **JavaScript (ES6+)**: 인터랙티브 기능
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크 (CDN)
- **Font Awesome**: 아이콘
- **Google Fonts**: 웹 폰트 (Noto Sans KR, Fira Code)

## 프로젝트 구조

```
/root/lab/claude-code-mastery/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 커스텀 CSS
├── js/
│   └── main.js            # JavaScript 로직
├── assets/
│   ├── images/            # 이미지 파일
│   └── icons/             # 아이콘 파일
├── README.md              # 이 파일
├── ROADMAP.md             # 개발 로드맵
└── CLAUDE.md              # 프로젝트 가이드
```

## 주요 기능

### 현재 구현된 기능 (Phase 1)
- ✅ 반응형 네비게이션 (데스크톱/모바일)
- ✅ 10개 섹션 구조 (Hero, About, Social Media, Skills, Experience, Projects, Education, Contact, Footer)
- ✅ **SNS 링크 전용 섹션** (GitHub, YouTube, Instagram, Twitter, LinkedIn, Medium, Discord, Twitch)
- ✅ 부드러운 스크롤 네비게이션
- ✅ 스크롤 시 요소 애니메이션 (Intersection Observer)
- ✅ 모바일 햄버거 메뉴
- ✅ SEO 최적화 (메타 태그, Open Graph)
- ✅ 접근성 (aria-label, alt 텍스트)

### 계획된 기능 (Phase 2+)
- 🔜 다크 모드 전환
- 🔜 프로젝트 필터링
- 🔜 연락처 폼 유효성 검사 및 전송
- 🔜 타이핑 애니메이션
- 🔜 이미지 최적화 및 lazy loading

## 로컬 개발

### 방법 1: 브라우저에서 직접 열기
```bash
# 파일 탐색기에서 index.html 파일을 더블클릭
```

### 방법 2: 로컬 서버 실행 (권장)

**Python 3 사용**
```bash
cd /root/lab/claude-code-mastery
python3 -m http.server 8000
```

**Node.js 사용**
```bash
cd /root/lab/claude-code-mastery
npx serve
```

**PHP 사용**
```bash
cd /root/lab/claude-code-mastery
php -S localhost:8000
```

브라우저에서 `http://localhost:8000` 접속

## 반응형 브레이크포인트

- **모바일**: `< 768px`
- **태블릿**: `768px - 1024px`
- **데스크톱**: `> 1024px`

## 섹션 구조

1. **Header/Navigation**: 고정 헤더, 반응형 네비게이션
2. **Hero**: 프로필 소개, 직무, 소셜 링크, CTA 버튼
3. **About**: 자기소개 및 이력서 다운로드
4. **Social Media**: 다양한 SNS 플랫폼 카드 (GitHub, YouTube, Instagram, Twitter, LinkedIn, Medium, Discord, Twitch)
5. **Skills**: 기술 스택 (프론트엔드/백엔드/도구)
6. **Experience**: 경력 타임라인
7. **Projects**: 프로젝트 카드 그리드
8. **Education**: 학력 및 자격증
9. **Contact**: 연락처 정보 및 메시지 폼
10. **Footer**: 저작권 정보

## 개발 가이드

### HTML
- 시맨틱 HTML5 태그 사용
- 접근성 속성 추가 (alt, aria-label, role)

### CSS
- Tailwind 유틸리티 클래스 우선 사용
- 커스텀 스타일은 `css/style.css`에 작성
- 모바일 우선(Mobile-First) 접근

### JavaScript
- ES6+ 문법 사용
- 바닐라 JavaScript (외부 라이브러리 최소화)
- 함수/변수명은 영어, 주석은 한국어

## 커스터마이징 가이드

### 1. 개인 정보 수정
- `index.html`에서 이름, 직무, 연락처, 소셜 링크 등을 수정하세요.

### 2. 색상 변경
- `css/style.css`의 `:root` 섹션에서 CSS 변수를 수정하세요.

### 3. 콘텐츠 추가
- 각 섹션의 HTML 구조를 복사하여 새로운 항목을 추가하세요.

### 4. 이미지 추가
- `assets/images/` 폴더에 이미지를 업로드하고, HTML에서 경로를 수정하세요.

### 5. SNS 링크 수정
- Social Media 섹션에서 각 플랫폼의 URL을 수정하세요.
- 필요 없는 플랫폼은 해당 `<a>` 태그를 삭제하세요.

## 배포

### GitHub Pages
```bash
git checkout -b gh-pages
git push origin gh-pages
# GitHub 저장소 Settings → Pages → Source: gh-pages 선택
```

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 라이선스

MIT License

## 작성자

홍길동 - your.email@example.com

## 참고 자료

- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

**개발 시작일**: 2026-03-06
**현재 Phase**: Phase 1 완료
**버전**: 1.0.0
