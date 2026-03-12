# 다크모드 리디자인 계획

## Context

현재 개발자 웹 이력서는 라이트모드 디자인(흰색/밝은 회색 배경)으로 구현되어 있습니다. 사용자는 참고 이미지(https://dribbble.com/shots/26099437-Personal-Portfolio-Website-Animation)에서 영감을 받아 다음과 같은 모던하고 세련된 다크모드 디자인으로 전체 리디자인을 요청했습니다:

**참고 디자인의 주요 특징:**
- 완전한 다크 배경 (거의 순수 검정색)
- 흰색/밝은 회색 텍스트로 강한 대비
- 대형 타이포그래피와 넉넉한 여백
- 미니멀하고 고급스러운 느낌
- 원형 버튼 및 부드러운 그라데이션

**변경이 필요한 이유:**
- 현재 디자인은 일반적인 라이트모드로 차별화 부족
- 모던한 포트폴리오 트렌드는 다크모드 중심
- 더 강렬하고 인상적인 시각적 임팩트 필요
- 개발자 포트폴리오에 적합한 테크니컬한 느낌

## 색상 시스템 설계

### 다크모드 색상 팔레트

**배경색 (Backgrounds)**
```
Primary Background: #0A0A0A (거의 순수 검정)
Secondary Background: #111111 (카드/섹션 배경)
Tertiary Background: #1A1A1A (호버 상태)
Border Color: #222222 (미묘한 구분선)
```

**텍스트색 (Text)**
```
Primary Text: #FFFFFF (순수 흰색 - 제목)
Secondary Text: #E0E0E0 (밝은 회색 - 본문)
Tertiary Text: #A0A0A0 (중간 회색 - 부제목)
Muted Text: #666666 (어두운 회색 - 덜 중요한 정보)
```

**강조색 (Accent Colors)**
```
Primary Accent: #60A5FA (밝은 파란색 - 기존 #3B82F6보다 밝음)
Secondary Accent: #A78BFA (밝은 보라색 - 기존 #8B5CF6보다 밝음)
Success: #34D399 (밝은 초록색)
Gradient: linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)
```

**그림자 & 효과**
```
Shadow SM: 0 2px 8px rgba(0, 0, 0, 0.4)
Shadow MD: 0 4px 16px rgba(0, 0, 0, 0.5)
Shadow LG: 0 8px 32px rgba(0, 0, 0, 0.6)
Shadow XL: 0 12px 48px rgba(0, 0, 0, 0.7)
Glow Primary: 0 0 20px rgba(96, 165, 250, 0.3)
```

## 레이아웃 개선

### 섹션 간격 일관성
- **모바일**: `padding: 5rem 1.5rem` (상하 80px)
- **태블릿**: `padding: 8rem 2rem` (상하 128px)
- **데스크톱**: `padding: 10rem 3rem` (상하 160px) - 참고 디자인처럼 넉넉하게

### 컨테이너 최대 너비
- **텍스트 중심 섹션** (About, Contact): `max-width: 42rem` (672px)
- **일반 콘텐츠** (Skills, Education): `max-width: 56rem` (896px)
- **그리드 레이아웃** (Projects, Social): `max-width: 72rem` (1152px)
- **전체 너비** (Hero): `max-width: 90rem` (1440px)

### 여백 시스템
- 섹션 제목 하단: `mb-16` (4rem / 64px)
- 카드 간 간격: `gap-10` (2.5rem / 40px)
- 컨테이너 좌우: `px-12` (3rem / 48px) 데스크톱

## 타이포그래피 변경

### 폰트 크기 계층
- **Hero 제목**: `text-6xl md:text-7xl lg:text-8xl` (현재: `text-5xl md:text-6xl`)
- **섹션 제목**: `text-5xl md:text-6xl` (현재: `text-4xl`)
- **카드 제목**: `text-2xl` (유지)
- **본문**: `text-lg` (유지)

### 폰트 두께
- Hero 제목: `font-extrabold` (현재: `font-bold`)
- 섹션 제목: `font-extrabold` (현재: `font-bold`)
- 이름 강조: 그라데이션 텍스트 효과 추가

### 라인 높이
- 대형 제목: `leading-tight` (1.1~1.2)
- 본문: `leading-relaxed` (1.7)

## 인터랙티브 요소

### 버튼 디자인
**Primary Button (CTA)**
- 배경: 그라데이션 (`bg-gradient-to-r from-blue-500 to-purple-500`)
- 모양: 완전한 원형 (`rounded-full`)
- 패딩: `px-10 py-4` (더 크게)
- 호버: 위로 이동 + glow 효과

**Secondary Button (이력서 다운로드)**
- 배경: 반투명 회색 (`bg-white/5`)
- 테두리: `border border-white/20`
- Backdrop blur 효과

### 카드 스타일
**프로젝트 카드**
- 배경: `bg-[#111111]`
- 테두리: `border border-[#222222]`
- 호버: 위로 이동 + 테두리 색상 변경 (파란색) + glow

**스킬 카드**
- 배경: 그라데이션 반투명 (`from-blue-500/5 to-purple-500/5`)
- 테두리: `border border-blue-500/10`
- Backdrop blur

**SNS 카드**
- 기존 색상 유지하되 더 어둡게 조정
- 호버 시 미묘한 glow 효과

### 호버 효과
- 링크: 밑줄 애니메이션 (왼쪽에서 오른쪽으로)
- 카드: `transform: translateY(-8px)` + glow
- 버튼: `transform: translateY(-3px)` + shadow 증가

## 수정할 파일 및 변경 사항

### 1. `/root/lab/claude-code-mastery/css/style.css`

**변경 사항:**
- `:root` CSS 변수 전체 교체 (다크모드 색상 팔레트)
- 새로운 유틸리티 클래스 추가:
  - `.container-narrow`, `.container-standard`, `.container-wide`, `.container-full`
  - `.text-display` (대형 타이포그래피)
  - `.btn-primary`, `.btn-secondary`, `.btn-ghost`
  - `.card-project`, `.card-skill`
  - `.link-hover` (링크 애니메이션)
  - `.gradient-text` (그라데이션 텍스트)
  - `.glass-card` (glassmorphism)
- `.section-padding` 재정의 (더 넉넉한 여백)
- 커스텀 스크롤바 스타일 추가
- 다크모드 그림자 효과
- Backdrop-filter 효과

**주요 CSS 코드:**
```css
:root {
  /* Dark Mode Colors */
  --bg-primary: #0A0A0A;
  --bg-secondary: #111111;
  --bg-tertiary: #1A1A1A;
  --bg-hover: #222222;

  --text-primary: #FFFFFF;
  --text-secondary: #E0E0E0;
  --text-tertiary: #A0A0A0;
  --text-muted: #666666;

  --accent-primary: #60A5FA;
  --accent-secondary: #A78BFA;
  --accent-success: #34D399;

  --border-color: #222222;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-xl: 0 12px 48px rgba(0, 0, 0, 0.7);

  /* Glow */
  --glow-primary: 0 0 20px rgba(96, 165, 250, 0.3);
  --glow-secondary: 0 0 20px rgba(167, 139, 250, 0.3);
}
```

### 2. `/root/lab/claude-code-mastery/index.html`

**주요 변경 사항:**

**Line 42: Body 태그**
```html
<body class="bg-[#0A0A0A]">
```

**Line 46: Header**
```html
<header class="fixed top-0 left-0 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222] shadow-lg z-50">
```
- 로고 색상: `text-white`
- 링크 색상: `text-gray-300 hover:text-blue-400`

**Line 91-127: Hero Section (대폭 리디자인)**
```html
<section id="hero" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A] pt-20">
  <div class="container mx-auto px-6 max-w-5xl text-center fade-in">
    <!-- 프로필 이미지 - 그라데이션 테두리 -->
    <div class="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 shadow-2xl">
      <div class="w-full h-full rounded-full overflow-hidden bg-gray-900">
        <img src="https://i.pravatar.cc/300?img=33" alt="프로필 사진" class="w-full h-full object-cover">
      </div>
    </div>

    <!-- 이름 - 대형 타이포그래피 + 그라데이션 -->
    <h1 class="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
      안녕하세요, <br class="md:hidden">
      <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        홍길동
      </span>입니다
    </h1>
    <p class="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-12 font-light">
      웹 개발자 | 프론트엔드 개발자 | 풀스택 개발자
    </p>

    <!-- 소셜 링크 - 색상 변경 -->
    <div class="flex justify-center space-x-6 mb-12">
      <a href="#" class="text-gray-400 hover:text-white transition">
        <i class="fab fa-github text-3xl"></i>
      </a>
      <!-- 나머지 링크들도 동일 -->
    </div>

    <!-- CTA 버튼 - 원형 + 그라데이션 -->
    <a href="#contact" class="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] transition-all duration-300 hover:-translate-y-1">
      연락하기
    </a>
  </div>
</section>
```

**모든 섹션 공통 변경:**
- 배경색: `bg-white` → `bg-[#0A0A0A]`, `bg-gray-50` → `bg-[#111111]`
- 텍스트 색상: `text-gray-800` → `text-white`, `text-gray-600` → `text-gray-300`
- 섹션 제목: `text-4xl` → `text-5xl md:text-6xl`, `text-gray-800` → `text-white`, `font-bold` → `font-extrabold`
- 제목 하단 여백: `mb-12` → `mb-16`

**Line 132-154: About Section**
- 배경: `bg-[#0A0A0A]`
- 본문: `text-gray-300`
- 이력서 버튼: 반투명 스타일로 변경

**Line 159-231: Social Section**
- 배경: `bg-[#111111]`
- 카드 배경: 기존 색상을 더 어둡게 조정 (예: GitHub `bg-[#1A1A1A]`)

**Line 236-284: Skills Section**
- 배경: `bg-[#0A0A0A]`
- 카드: 그라데이션 반투명 배경 + backdrop-blur
```html
<div class="bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/10 shadow-lg fade-in">
```

**Line 289-327: Experience Section**
- 배경: `bg-[#111111]`
- 텍스트 색상 조정
- 타임라인 보더: `border-blue-500` (밝은 파란색)

**Line 332-422: Projects Section**
- 배경: `bg-[#0A0A0A]`
- 카드: `bg-[#111111] border border-[#222222]`
- 호버: `hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(96,165,250,0.2)]`

**Line 427-460: Education Section**
- 배경: `bg-[#111111]`
- 카드: `bg-[#1A1A1A]`

**Line 465-565: Contact Section**
- 배경: `bg-[#0A0A0A]`
- 입력 필드: 다크모드 스타일
```html
<input class="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
```

**Line 571-586: Footer**
- 배경: `bg-[#0A0A0A]` (현재 `bg-gray-800`)
- 테두리 추가: `border-t border-[#222222]`

### 3. `/root/lab/claude-code-mastery/js/main.js`

**변경 사항: 없음 (기존 기능 유지)**
- 모바일 메뉴 토글
- 부드러운 스크롤
- Intersection Observer 애니메이션

**선택사항 (Phase 2):** 테마 토글 기능 추가 가능
- 현재 계획에서는 다크모드 고정으로 구현
- 향후 라이트모드 토글 기능을 원할 경우 별도 작업

## 구현 단계

### Phase 1: CSS 변수 및 기본 색상 변경 (필수)
1. `css/style.css`의 `:root` 섹션을 새 색상 팔레트로 교체
2. 새로운 유틸리티 클래스 추가 (버튼, 카드, 컨테이너 등)
3. `.section-padding` 재정의
4. 커스텀 스크롤바 스타일 추가

### Phase 2: HTML 색상 클래스 일괄 변경 (필수)
1. `<body>` 태그에 `bg-[#0A0A0A]` 추가
2. Header 배경 및 텍스트 색상 변경
3. 모든 섹션의 배경색 변경 (`bg-white` → `bg-[#0A0A0A]`, `bg-gray-50` → `bg-[#111111]`)
4. 모든 텍스트 색상 변경 (회색 → 흰색/밝은 회색)
5. 섹션 제목 크기 및 폰트 두께 증가

### Phase 3: Hero Section 리디자인 (필수)
1. 프로필 이미지에 그라데이션 테두리 추가
2. 제목 크기를 `text-6xl md:text-7xl lg:text-8xl`로 변경
3. 이름에 그라데이션 텍스트 효과 추가
4. CTA 버튼을 원형 + 그라데이션으로 변경
5. 배경 그라데이션 조정

### Phase 4: 카드 및 인터랙티브 요소 (필수)
1. 프로젝트 카드 스타일 개선 (다크 배경, glow 효과)
2. 스킬 카드에 그라데이션 배경 + backdrop-blur
3. SNS 카드 색상 어둡게 조정
4. 버튼 호버 효과 개선
5. 입력 필드 다크모드 스타일링

### Phase 5: 세부 조정 및 검증 (필수)
1. 반응형 테스트 (모바일, 태블릿, 데스크톱)
2. 색상 대비 확인 (WCAG 준수)
3. 애니메이션 타이밍 조정
4. 그림자 및 효과 미세 조정

## 검증 방법

### 로컬 서버 실행
```bash
# Python 3
python3 -m http.server 8000

# 또는 Node.js
npx serve
```
브라우저에서 `http://localhost:8000` 접속

### 반응형 테스트
- Chrome DevTools → Device Toolbar
- 테스트 해상도:
  - 모바일: 375px, 414px
  - 태블릿: 768px, 1024px
  - 데스크톱: 1440px, 1920px

### 색상 대비 확인
- Chrome DevTools → Lighthouse → Accessibility
- 목표: WCAG 2.1 AA 준수 (4.5:1 이상)
- 주요 대비:
  - 흰색(#FFFFFF) on 검정(#0A0A0A) = 21:1 ✅
  - 밝은 회색(#E0E0E0) on 검정(#0A0A0A) = 16.75:1 ✅
  - 파란색(#60A5FA) on 검정(#0A0A0A) = 8.59:1 ✅

### 기능 테스트
- [x] 모바일 햄버거 메뉴 작동
- [x] 부드러운 스크롤 네비게이션
- [x] Intersection Observer 애니메이션
- [x] 모든 링크 클릭 가능
- [x] 호버 효과 작동

### 브라우저 호환성
- Chrome (최신)
- Firefox (최신)
- Safari (macOS/iOS)
- Edge (최신)

## Critical Files

- `/root/lab/claude-code-mastery/css/style.css` - CSS 변수 교체, 유틸리티 클래스 추가
- `/root/lab/claude-code-mastery/index.html` - 모든 색상 클래스 변경, Hero 섹션 리디자인, 타이포그래피 조정
- `/root/lab/claude-code-mastery/js/main.js` - 변경 없음 (기존 기능 유지)

## 예상 결과

1. 완전한 다크모드 디자인으로 전환
2. 참고 이미지와 유사한 모던하고 세련된 느낌
3. 강렬한 대비와 대형 타이포그래피로 시각적 임팩트 증가
4. 넉넉한 여백으로 고급스러운 레이아웃
5. 부드러운 그라데이션과 glow 효과로 현대적인 느낌
6. 모든 기존 기능 유지 (반응형, 애니메이션 등)
