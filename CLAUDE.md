# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**개발자 웹 이력서** - 정적 웹사이트 프로젝트
- 현대적이고 반응형 개인 포트폴리오/이력서 웹사이트
- 상세한 개발 로드맵은 `ROADMAP.md` 참조

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 스타일링 및 애니메이션
- **JavaScript (ES6+)**: 인터랙티브 기능
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크

## 프로젝트 구조

```
/root/lab/claude-code-mastery/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 커스텀 CSS (Tailwind 보완)
├── js/
│   └── main.js            # JavaScript 로직
├── assets/
│   ├── images/            # 이미지 파일
│   └── icons/             # 아이콘 파일
├── ROADMAP.md             # 개발 로드맵 및 체크리스트
└── CLAUDE.md              # 이 파일
```

## 개발 명령어

### 로컬 개발

정적 웹사이트이므로 별도의 빌드 과정이 필요 없습니다.

**방법 1: 브라우저에서 직접 열기**
```bash
# 파일 탐색기에서 index.html 더블클릭 또는
xdg-open index.html  # Linux
open index.html      # macOS
```

**방법 2: 로컬 서버 실행 (권장)**
```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx 사용)
npx serve

# PHP
php -S localhost:8000
```

브라우저에서 `http://localhost:8000` 접속

### Tailwind CSS 설정

**현재 계획**: CDN 방식 (간단, 빠른 프로토타이핑)
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**프로덕션용**: npm 방식 (최적화, 커스터마이징)
```bash
npm install -D tailwindcss
npx tailwindcss init
npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
```

## 아키텍처 개요

### 페이지 섹션 구조
1. **Header/Navigation**: 고정 헤더, 부드러운 스크롤 네비게이션
2. **Hero/Profile**: 프로필 사진, 이름, 직무, SNS 링크
3. **About**: 자기소개 및 강점
4. **Skills**: 기술 스택 (카테고리별 분류)
5. **Experience**: 경력 타임라인
6. **Projects**: 프로젝트 카드 그리드
7. **Education**: 학력 및 자격증
8. **Contact**: 연락처 폼 및 정보
9. **Footer**: 저작권 및 추가 링크

### JavaScript 주요 기능
- **Intersection Observer**: 스크롤 시 요소 애니메이션
- **Smooth Scroll**: 네비게이션 클릭 시 부드러운 이동
- **Mobile Menu Toggle**: 반응형 햄버거 메뉴
- **Form Validation**: 연락처 폼 유효성 검사
- **Dark Mode** (선택): localStorage 기반 테마 전환

### 반응형 브레이크포인트
- 모바일: `< 768px`
- 태블릿: `768px - 1024px`
- 데스크톱: `> 1024px`

## 개발 워크플로우

1. **ROADMAP.md 확인**: 현재 Phase 및 체크리스트 검토
2. **로컬 서버 실행**: 변경사항 실시간 확인
3. **섹션별 개발**: HTML 구조 → CSS 스타일링 → JS 기능
4. **반응형 테스트**: 브라우저 개발자 도구 사용
5. **브라우저 호환성 테스트**: Chrome, Firefox, Safari, Edge

## 배포

### 옵션 1: GitHub Pages
```bash
# gh-pages 브랜치 생성 및 푸시
git checkout -b gh-pages
git push origin gh-pages
# Settings → Pages → Source: gh-pages 선택
```

### 옵션 2: Vercel
```bash
# Vercel CLI 설치 및 배포
npm i -g vercel
vercel
```

### 옵션 3: Netlify
```bash
# Netlify CLI 설치 및 배포
npm i -g netlify-cli
netlify deploy
```

## 코딩 규칙

### HTML
- 시맨틱 HTML5 태그 사용 (`<header>`, `<nav>`, `<section>`, `<article>`)
- 접근성 속성 추가 (`alt`, `aria-label`, `role`)

### CSS
- Tailwind 유틸리티 클래스 우선 사용
- 커스텀 스타일은 `css/style.css`에 작성
- 모바일 우선(Mobile-First) 접근

### JavaScript
- ES6+ 문법 사용 (const/let, 화살표 함수, 템플릿 리터럴)
- 바닐라 JS 사용 (외부 라이브러리 최소화)
- 함수/변수명은 영어, 주석은 한국어

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)
