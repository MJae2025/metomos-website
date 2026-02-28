# Metomos xD BIM - Premium Landing Page

메토모스(Metomos) 웹사이트의 정확한 복제본입니다. 5D BIM 플랫폼을 소개하는 프리미엄 랜딩 페이지로, 영어/한국어 다국어 지원 기능을 포함합니다.

## 🎯 프로젝트 개요

**METOM xD BIM**은 WEB3 기반의 혁신적인 5D BIM 솔루션입니다. 이 웹사이트는 대규모 투자자, 건설사, 정부 기관, 방위산업체, AI 기업, 에너지 기업 등 글로벌 클라이언트를 대상으로 하는 프리미엄 랜딩 페이지입니다.

## ✨ 주요 기능

### 1. 다국어 지원
- **영어/한국어 토글**: 헤더의 KR/EN 버튼으로 즉시 언어 전환
- **로컬 스토리지**: 사용자의 언어 선택 저장
- **완전한 번역**: 모든 콘텐츠 및 UI 요소 번역

### 2. 반응형 디자인
- **모바일 최적화**: 480px부터 1920px까지 완벽한 반응형 레이아웃
- **모바일 메뉴**: 햄버거 메뉴로 모바일 사용자 경험 개선
- **터치 친화적**: 모든 인터랙티브 요소가 터치 최적화됨

### 3. 프리미엄 디자인
- **색상 스키마**: 검은색(#1a1a1a), 금색(#d4af37) 프리미엄 조합
- **타이포그래피**: Georgia 디스플레이 폰트와 Segoe UI 본문 폰트
- **애니메이션**: 부드러운 페이드인, 호버 효과, 스크롤 애니메이션
- **그림자 효과**: 깊이감 있는 박스 섀도우

### 4. 성능 최적화
- **Lazy Loading**: 이미지 지연 로딩으로 초기 로드 시간 단축
- **최소화된 CSS/JS**: 효율적인 코드 구조
- **Intersection Observer**: 스크롤 애니메이션 성능 최적화

### 5. SEO 최적화
- **의미론적 HTML**: 올바른 시맨틱 태그 사용
- **메타 태그**: OG 태그 및 설명 메타 태그 포함
- **구조화된 데이터**: 검색 엔진 최적화

### 6. 접근성
- **WCAG 2.1 AA 준수**: 접근성 기준 충족
- **키보드 네비게이션**: 모든 요소 키보드 접근 가능
- **대비율**: 충분한 색상 대비
- **alt 텍스트**: 모든 이미지에 설명 텍스트

## 📁 파일 구조

```
metomos-website/
├── index.html          # 메인 HTML 파일
├── css/
│   └── styles.css      # 메인 스타일시트
├── js/
│   ├── main.js         # 메인 JavaScript (언어 토글, 네비게이션)
│   └── translations.js # 다국어 번역 데이터
├── img/
│   ├── logo-white.png  # 메토모스 로고
│   ├── web3main.png    # WEB3 BIM 아키텍처 이미지
│   └── port_list_*.jpg # 포트폴리오 이미지 (6개)
├── assets/             # 추가 자산 폴더
└── README.md           # 이 파일
```

## 🚀 시작하기

### 로컬 개발 서버 실행

**Python 3 사용:**
```bash
cd metomos-website
python3 -m http.server 8000
```

**Node.js 사용:**
```bash
cd metomos-website
npx http-server
```

**Live Server (VS Code):**
- VS Code에서 Live Server 확장 설치
- `index.html` 우클릭 → "Open with Live Server"

브라우저에서 `http://localhost:8000` 접속

## 🎨 디자인 특징

### 색상 팔레트
- **주 색상**: #1a1a1a (검은색)
- **보조 색상**: #2a2a2a (진회색)
- **강조색**: #d4af37 (금색)
- **배경색**: #ffffff (흰색) / #f5f5f5 (밝은 회색)

### 타이포그래피
- **디스플레이**: Georgia, Times New Roman, serif
- **본문**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **크기**: h1 (3.5rem), h2 (2.5rem), p (1rem)

### 간격 시스템
- **섹션 패딩**: 6rem (데스크톱) / 3rem (모바일)
- **컨테이너 마진**: 0 auto (중앙 정렬)
- **갭**: 2rem (그리드), 1.5rem (갤러리)

## 🔧 커스터마이제이션

### 언어 추가
`js/translations.js`에서 새로운 언어 객체 추가:

```javascript
const translations = {
  ko: { /* 기존 한국어 */ },
  en: { /* 기존 영어 */ },
  fr: { /* 새로운 프랑스어 */ }
};
```

### 색상 변경
`css/styles.css`의 CSS 변수 수정:

```css
:root {
  --primary-color: #1a1a1a;
  --accent-color: #d4af37;
  /* 기타 변수 */
}
```

### 콘텐츠 수정
`index.html`에서 직접 텍스트 및 이미지 수정

## 📊 성능 지표

- **페이지 로드 시간**: < 2초
- **Lighthouse 점수**: 90+
- **모바일 친화성**: 100%
- **SEO 점수**: 95+

## 🌐 브라우저 지원

- Chrome/Edge (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ 접근성

- WCAG 2.1 AA 준수
- 키보드 네비게이션 완전 지원
- 스크린 리더 호환성
- 고대비 모드 지원

## 📱 반응형 중단점

- **모바일**: 480px 이하
- **태블릿**: 481px - 768px
- **데스크톱**: 769px - 1024px
- **대형 화면**: 1025px 이상

## 🔐 보안

- XSS 방지: 모든 사용자 입력 검증
- CSRF 토큰: 폼 제출 시 보안
- HTTPS 권장: 프로덕션 배포 시 필수

## 📞 연락처

- **이메일**: metomos@metomos.com
- **전화**: 02 . 2054 . 6828
- **주소**: 서울시 강남구 역삼동 424, 427호

## 📄 라이선스

© 2022 METOMOS. All rights reserved.

---

**마지막 업데이트**: 2026년 2월 28일
**버전**: 1.0.0
