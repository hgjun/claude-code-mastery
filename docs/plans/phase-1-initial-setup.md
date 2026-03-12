# Phase 1 개발 계획: 프로젝트 설정 및 기본 구조

## Context

사용자가 개발자 웹 이력서 프로젝트를 시작했으며, ROADMAP.md에 정의된 Phase 1을 완료하고자 합니다. 현재 프로젝트는 기본 Hello World 상태의 index.html만 존재하는 초기 단계입니다.

**해결해야 할 문제:**
- 프로젝트 디렉토리 구조가 없음 (css/, js/, assets/ 폴더)
- Tailwind CSS가 연동되지 않음
- 시맨틱 HTML5 구조가 없음
- 10개 섹션 골격이 필요 (Hero, About, Social Media, Skills, Experience, Projects, Education, Contact, Footer)
- SNS 링크를 위한 별도 섹션 필요 (GitHub, YouTube, Instagram 등)
- JavaScript 인터랙티브 기능이 없음
- 프로젝트 설명 문서(README.md)가 없음

**의도된 결과:**
- 완전한 프로젝트 구조 생성
- Tailwind CSS CDN 연동
- 10개 섹션을 포함한 완전한 HTML 골격 (SNS 섹션 포함)
- 반응형 네비게이션 및 스크롤 애니메이션
- 로컬 서버에서 즉시 확인 가능한 상태

## 구현 계획

### 1. 디렉토리 구조 생성

```bash
mkdir -p /root/lab/claude-code-mastery/css
mkdir -p /root/lab/claude-code-mastery/js
mkdir -p /root/lab/claude-code-mastery/assets/images
mkdir -p /root/lab/claude-code-mastery/assets/icons
```

**생성 파일:**
- `css/` - 커스텀 CSS 파일용
- `js/` - JavaScript 파일용
- `assets/images/` - 이미지 파일용
- `assets/icons/` - 아이콘 파일용

### 2. CSS 파일 생성: `/root/lab/claude-code-mastery/css/style.css`

**목적:** Tailwind CSS를 보완하는 커스텀 스타일 제공

**주요 내용:**
- CSS 변수 정의 (색상 팔레트, 폰트)
  - `--color-primary: #3B82F6` (파란색)
  - `--color-secondary: #8B5CF6` (보라색)
  - `--color-accent: #10B981` (초록색)
- 스크롤 애니메이션 클래스 (`.fade-in`, `.fade-in.visible`)
- 버튼 호버 효과 (`.btn-hover`)
- 섹션 패딩 유틸리티 (`.section-padding`)
- 부드러운 스크롤 (`html { scroll-behavior: smooth; }`)

### 3. JavaScript 파일 생성: `/root/lab/claude-code-mastery/js/main.js`

**목적:** 인터랙티브 기능 구현

**주요 기능:**
1. **모바일 메뉴 토글** (`initMobileMenu`)
   - `#mobile-menu-button` 클릭 시 `#mobile-menu` 토글

2. **부드러운 스크롤 네비게이션** (`initSmoothScroll`)
   - `a[href^="#"]` 링크 클릭 시 스크롤
   - 모바일 메뉴 자동 닫기

3. **스크롤 애니메이션** (`initScrollAnimations`)
   - Intersection Observer API 사용
   - `.fade-in` 요소가 화면에 나타날 때 `.visible` 클래스 추가

### 4. HTML 파일 개선: `/root/lab/claude-code-mastery/index.html`

**기존 파일 완전 교체**

**주요 변경사항:**

#### `<head>` 섹션
- **SEO 메타 태그:** title, description, keywords, author
- **Open Graph 메타 태그:** SNS 공유 최적화 (og:type, og:title, og:description, og:url, og:image)
- **Twitter Card 메타 태그:** Twitter 공유 최적화
- **Tailwind CSS CDN:** `https://cdn.tailwindcss.com`
- **Google Fonts:** Noto Sans KR, Fira Code
- **Font Awesome:** 아이콘 (v6.4.0)
- **커스텀 CSS:** `css/style.css` 링크

#### `<body>` 구조 (10개 섹션)

1. **Header/Navigation**
   - 고정 헤더 (`fixed top-0`)
   - 데스크톱 메뉴 (`hidden md:flex`)
   - 메뉴 항목: 소개, SNS, 기술, 경력, 프로젝트, 학력, 연락처
   - 모바일 메뉴 버튼 및 드롭다운

2. **Hero Section** (`#hero`)
   - 프로필 이미지 플레이스홀더
   - 이름 및 직무
   - 기본 소셜 미디어 링크 (GitHub, LinkedIn, Email)
   - CTA 버튼

3. **About Section** (`#about`)
   - 자기소개 텍스트
   - 이력서 다운로드 버튼

4. **Social Media Section** (`#social`) **[신규 추가]**
   - 제목: "소셜 미디어" 또는 "Follow Me"
   - 다양한 SNS 플랫폼 링크 카드 그리드 (3-4열 그리드)
   - 포함 플랫폼:
     - **GitHub** - 코드 저장소 및 오픈소스 프로젝트 (fab fa-github)
     - **YouTube** - 개발 관련 영상 콘텐츠 (fab fa-youtube)
     - **Instagram** - 일상 및 디자인 포트폴리오 (fab fa-instagram)
     - **Twitter/X** - 기술 트렌드 및 짧은 글 (fab fa-twitter / fab fa-x-twitter)
     - **LinkedIn** - 전문 네트워크 및 커리어 (fab fa-linkedin)
     - **Medium/Blog** - 기술 블로그 및 아티클 (fab fa-medium)
     - **Discord** - 개발자 커뮤니티 (fab fa-discord)
     - **Twitch** - 코딩 라이브 스트리밍 (fab fa-twitch, 선택 사항)
   - 각 카드 구조:
     - 플랫폼별 브랜드 컬러 배경 (GitHub: #181717, YouTube: #FF0000, Instagram: 그라데이션 등)
     - 큰 아이콘 (Font Awesome, 크기: text-5xl)
     - 플랫폼 이름 (font-bold)
     - 간단한 설명 (1줄)
     - "방문하기" 버튼 또는 전체 카드 클릭 가능
   - 호버 효과: 카드 확대 (scale), 그림자 증가
   - 모든 링크는 새 탭에서 열기 (`target="_blank" rel="noopener noreferrer"`)
   - 반응형: 모바일 1열, 태블릿 2열, 데스크톱 3-4열

5. **Skills Section** (`#skills`)
   - 3개 카테고리 그리드 (프론트엔드, 백엔드, 도구)
   - 아이콘 및 기술 목록

6. **Experience Section** (`#experience`)
   - 타임라인 형식
   - 회사명, 직책, 기간, 주요 업무

7. **Projects Section** (`#projects`)
   - 프로젝트 카드 그리드 (3개 샘플)
   - 썸네일, 제목, 설명, 기술 태그, GitHub/Live Demo 링크

8. **Education Section** (`#education`)
   - 학력 정보
   - 자격증 및 수료증

9. **Contact Section** (`#contact`)
   - 연락처 정보 (이메일, 전화, 위치)
   - 연락처 폼 (이름, 이메일, 메시지)

10. **Footer**
    - 저작권 정보
    - 기술 스택 언급

**접근성:**
- `aria-label` 속성 추가 (버튼, 링크)
- `alt` 텍스트 (이미지)
- 시맨틱 HTML5 태그 사용

**반응형:**
- Tailwind 반응형 클래스 사용 (`md:`, `lg:`)
- 모바일 우선 접근

### 5. README 파일 생성: `/root/lab/claude-code-mastery/README.md`

**목적:** 프로젝트 설명 및 사용법 문서화

**주요 섹션:**
- 프로젝트 개요
- 기술 스택
- 프로젝트 구조
- 주요 기능 (현재 구현된 것 vs 계획된 것)
  - ✅ SNS 링크 전용 섹션 포함
- 로컬 개발 방법 (Python, Node.js, PHP)
- 반응형 브레이크포인트
- 섹션 구조 설명 (10개 섹션: Hero, About, Social Media, Skills, Experience, Projects, Education, Contact, Footer)
- 개발 가이드 (HTML, CSS, JavaScript 규칙)
- 커스터마이징 가이드
- 배포 방법 (GitHub Pages, Vercel, Netlify)
- 브라우저 지원
- 라이선스 및 작성자

### 6. ROADMAP 업데이트: `/root/lab/claude-code-mastery/ROADMAP.md`

**Phase 1 체크리스트를 완료로 표시:**

```markdown
## Phase 1: 프로젝트 설정 및 기본 구조 (1-2일)

### 1.1 프로젝트 초기화
- [x] 프로젝트 디렉토리 생성
- [x] Tailwind CSS CDN 설치 결정
- [x] 기본 파일 구조 생성

### 1.2 HTML 기본 구조 작성
- [x] DOCTYPE 및 메타 태그 설정
- [x] Tailwind CSS 링크 추가
- [x] 시맨틱 HTML5 태그 구조 설계
```

## Critical Files

Phase 1 구현에 수정/생성할 파일:

1. **`/root/lab/claude-code-mastery/css/style.css`** [생성]
   - CSS 변수, 커스텀 스타일, 애니메이션

2. **`/root/lab/claude-code-mastery/js/main.js`** [생성]
   - 모바일 메뉴, 스크롤 네비게이션, Intersection Observer

3. **`/root/lab/claude-code-mastery/index.html`** [완전 교체]
   - Tailwind CDN 연동, 9개 섹션, 메타 태그, 외부 리소스 링크

4. **`/root/lab/claude-code-mastery/README.md`** [생성]
   - 프로젝트 문서화

5. **`/root/lab/claude-code-mastery/ROADMAP.md`** [부분 수정]
   - Phase 1 체크리스트 완료 표시

## 검증 방법

### 1. 파일 구조 검증
```bash
# 디렉토리 및 파일 존재 확인
ls -la /root/lab/claude-code-mastery/
ls -la /root/lab/claude-code-mastery/css/
ls -la /root/lab/claude-code-mastery/js/
ls -la /root/lab/claude-code-mastery/assets/

# 파일 내용 미리보기
head -20 /root/lab/claude-code-mastery/css/style.css
head -20 /root/lab/claude-code-mastery/js/main.js
```

### 2. 로컬 서버 실행
```bash
cd /root/lab/claude-code-mastery
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속

### 3. 기능 테스트

**✅ 확인 사항:**
- [ ] 페이지가 정상적으로 로드됨
- [ ] Tailwind CSS 스타일이 적용됨 (색상, 레이아웃)
- [ ] Font Awesome 아이콘이 표시됨
- [ ] Google Fonts가 적용됨 (Noto Sans KR)
- [ ] 10개 섹션이 모두 표시됨 (Social Media 섹션 포함)
- [ ] SNS 섹션에 다양한 플랫폼 카드가 표시됨 (GitHub, YouTube, Instagram 등)
- [ ] 네비게이션에 SNS 메뉴 항목이 있음
- [ ] 네비게이션 클릭 시 부드럽게 스크롤됨
- [ ] 스크롤 시 요소가 fade-in 애니메이션으로 나타남
- [ ] 모바일 메뉴 버튼 클릭 시 메뉴가 토글됨 (화면 축소 시)
- [ ] 소셜 미디어 링크가 새 탭에서 열림
- [ ] 연락처 폼이 표시됨

### 4. 반응형 테스트

**브라우저 개발자 도구 (F12) 사용:**
1. 디바이스 툴바 토글 (Ctrl+Shift+M)
2. 다양한 화면 크기에서 테스트:
   - **모바일**: iPhone SE (375px) - 햄버거 메뉴 표시
   - **태블릿**: iPad (768px) - 레이아웃 전환
   - **데스크톱**: 1920px - 전체 네비게이션 표시

### 5. 브라우저 콘솔 확인

**에러 없이 다음 로그가 표시되어야 함:**
```
페이지 로드 완료
```

**주의:** JavaScript 에러가 없어야 함

### 6. 접근성 검사 (선택)

**Lighthouse 실행:**
1. 개발자 도구 → Lighthouse 탭
2. "Generate report" 클릭
3. Accessibility 점수 확인 (목표: 90+)

## 예상 소요 시간

- 디렉토리 생성: 5분
- CSS 파일 작성: 20분
- JavaScript 파일 작성: 30분
- HTML 파일 개선: 60분
- README 작성: 30분
- ROADMAP 업데이트: 5분
- 검증 및 테스트: 30분

**총 소요 시간: 약 3시간**

## 주의사항

1. **Tailwind CDN 사용**: 인터넷 연결 필요
2. **문자 인코딩**: 모든 파일은 UTF-8로 저장 (한글 깨짐 방지)
3. **샘플 콘텐츠**: 일반적인 플레이스홀더 텍스트 사용 (사용자가 나중에 수정 가능)
4. **링크**: 소셜 미디어 및 프로젝트 링크는 예시 URL (사용자가 나중에 수정)

## 다음 단계 (Phase 2 준비)

Phase 1 완료 후:
1. 실제 프로필 사진 및 프로젝트 이미지 추가
2. 개인 정보로 콘텐츠 교체
3. Phase 2 시작 (섹션별 상세 디자인 및 스타일링 개선)
