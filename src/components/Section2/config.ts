export const CAREER_CONFIG = [
  {
    id: 1, info: { position: "Front-End Developer", start_working: "Aug 2022", end_working: "Apr 2023" }, company: "밀리언웨어", experience: [
      "Restful API를 사용하여 CRUD 및 디테일 페이지 개발",
      "불필요한 렌더링 방지를 위한 react hooks(useMemo , useCallback 등) 사용",
      "백엔드 개발자와 협업하여 특정 사용자 인증하여 팝업창 유/무 개발",
      "사용자의 password가 Request Payload에 노출되어 요청됨. Base64를 사용하여 인코딩 후 요청으로 변경",
      "하드코딩 개선 및 UI수정 유지보수 업무",
    ],
    techstack: ["React.js", "Redux", "Redux-Saga", "Git"]
  },
  {
    id: 2, info: { position: "Fullstack-Developer", start_working: "Oct 2023", end_working: "Jan 2024" }, company: "블록스미스", experience: [
      "공통 UI 컴포넌트 설계 및 개발",
      "레이아웃 UI 설계 및 개발",
      "Express 사용 CRUD API 개발",
      "TDD 기술검토 및 스터디",
    ],
    techstack: ["Next.js", "Mobx", "Nodejs", "Express", "Git"]
  },
  {
    id: 3, info: { position: "Front-End Developer", start_working: "Mar 2024", end_working: "Oct 2024" }, company: "알파로직", experience: [
      "사용자 페이지 UI개발 및 데이터 차트 시각화 및 반응형 적용",
      "OAuth 2.0 기반 Apple 소셜로그인 기능 신규 도입",
      "PG사 결제프로램 신규 도입",
      "웹페이지 SEO 최적화",
      "웹페이지 성능 최적화 및 유지보수 업무",
    ],
    techstack: ["Next.js","TypeScript", "Recoil", "Git"]
  },
  {
    id: 4, info: { position: "Front-End Developer", start_working: "Nov 2024", end_working: "Present" }, company: "AM매니지먼트", experience: [
      "사용자 페이지 및 어드민 페이지 UI 개발 및 반응형 적용 / 데이터 차트 시각화",
      "Tanstack-Query 도입하여, 데이터 캐싱 및 조건부 데이터 refetching 적용",
      "로그인 흐름 UX 개선 및 서버 인증(Middleware) 도입",
      "페이지 최적화 Lighthouse (LCP)성능 점수 개선",
      "구글 소셜로그인 신규 도입",
    ],
    techstack: ["Next.js","TypeScript", "Zustand", "Git"]
  },

]