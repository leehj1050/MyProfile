import { RiBearSmileLine, RiCloudLine, RiNextjsFill, RiReactjsFill, RiRobot2Line, RiTailwindCssFill } from "react-icons/ri";

export const PROJECT_LIST = [
    {
        id: 1,
        src: "/projectsImg/FortuneGPT.png",
        project_name: "AI 사주풀이 웹 플랫폼",
        desc: ["GPT API를 활용한 사주팔자 자동 해석 서비스", "사용자의 생년월일/출생시간을 기반으로 음양오행, 성격, 재물운, 관계운 분석"],
        detail: {
            summary: [
                { strong: "Next.js 기반 개발", desc: "– 프로젝트는 Next.js를 사용하여 구성되었으며, 서버 컴포넌트에서 OpenAI API를 호출해 프롬프트를 생성하고 응답을 처리하도록 설계했습니다." },
                { strong: "사용자 입력 처리", desc: "– 사용자의 이름, 생년월일, 성별, 출생시간(모를 경우 “모름”으로 처리)을 입력받아 서버 컴포넌트의 프롬프트에 동적으로 포함시켜 GPT에게 요청을 보냅니다." },
                { strong: "유효성 검사", desc: "– 이름, 성별, 생년월일 중 하나라도 입력되지 않은 경우 alert 창을 띄워 사용자에게 경고를 주는 방식으로 기본적인 입력 검증 로직을 구현했습니다." },
                { strong: "SPA 형식의 결과 렌더링", desc: "– 결과 페이지로 이동하지 않고, 기존 레이아웃을 유지한 채 내부 컴포넌트만 교체하여 자연스러운 화면 전환을 구현했습니다." },
                { strong: "로딩 상태 표현", desc: "– 사용자 경험 개선을 위해 GPT 응답 대기 중 Pending UI 컴포넌트를 표시하여 로딩 상태를 시각적으로 표현했습니다." },
                { strong: "프로젝트 기획 의도", desc: "– 최근 GPT와 같은 AI 기술이 활발히 활용되는 시대에, 전통적인 사주풀이도 AI를 통해 구현 가능하다는 점에 흥미를 느껴 시작했습니다. 실제로 GPT를 사용해 사주풀이를 시도해보았을 때 기존 사주 내용과 유사한 결과가 나오는 것을 보고, AI 기반으로 간결하고 현대적인 사주풀이 앱을 만들어 보고자 했습니다." },
            ],
            tech: [
                { tech_stack: "Next.js", icon: <RiNextjsFill />, color: "text-white-600" },
                { tech_stack: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "text-teal-600" }
            ],
            project_href: "https://gpt20q.netlify.app/",
        }
    },
    {
        id: 2,
        src: "/projectsImg/MindMateAI.png",
        project_name: "대화형 AI 정신건강케어 서비스",
        desc: ["GPT API를 활용한 대화형 정신건강케어 서비스", "사용자의 심리상태 및 기분 등을 입력하면 고민을 들어주고 방향을 제시해주는 마인드컨트롤 서비스"],
        detail: {
            summary: [
                {
                    strong: "Next.js 기반 AI 서비스 개발",
                    desc: "– Next.js를 기반으로 프로젝트를 구성하고, 서버 컴포넌트에서 OpenAI API를 호출하여 사용자 상황에 맞는 정신건강 케어 대화를 생성하도록 설계했습니다."
                },
                {
                    strong: "대화형 사용자 입력 처리",
                    desc: "– 사용자의 현재 감정 상태, 고민 내용, 대화 흐름을 입력으로 받아 프롬프트에 반영하고, 이전 대화 맥락을 유지한 채 GPT와 자연스러운 상담형 대화를 이어갈 수 있도록 구현했습니다."
                },
                {
                    strong: "프롬프트 설계 및 응답 제어",
                    desc: "– AI가 과도하게 길거나 일반적인 답변을 생성하지 않도록, ‘공감 → 질문 → 간단한 정리’ 구조의 프롬프트를 설계하여 가독성과 실제 상담에 가까운 응답을 유도했습니다."
                },
                {
                    strong: "입력 유효성 및 UX 개선",
                    desc: "– 사용자가 메시지를 입력하지 않았거나 공백만 입력한 경우 전송을 제한하고, 잘못된 인터랙션을 방지하여 안정적인 대화 흐름을 유지하도록 처리했습니다."
                },
                {
                    strong: "SPA 기반 채팅 UI 구현",
                    desc: "– 페이지 이동 없이 채팅 인터페이스 내에서 메시지가 순차적으로 렌더링되도록 구성하여, 실제 메신저와 유사한 몰입감 있는 상담 경험을 제공했습니다."
                },
                {
                    strong: "로딩 및 응답 상태 시각화",
                    desc: "– AI 응답 대기 중에는 Pending 메시지 및 로딩 UI를 노출하여, 사용자가 시스템 상태를 인지할 수 있도록 UX를 개선했습니다."
                },
                {
                    strong: "프로젝트 기획 의도",
                    desc: "– 정신건강 관리에 대한 접근 장벽을 낮추고, 언제든지 가볍게 감정을 털어놓을 수 있는 ‘AI 기반 마인드 메이트’를 만들고자 프로젝트를 기획했습니다. 단순한 위로 문구가 아닌, 공감과 질문을 통해 사용자가 자신의 감정을 정리할 수 있도록 돕는 대화형 케어 서비스 구현을 목표로 했습니다."
                }
            ]
            ,
            tech: [
                { tech_stack: "Next.js", icon: <RiNextjsFill />, color: "text-white-600" },
                { tech_stack: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "text-teal-600" }
            ],
            project_href: "https://prodmindmateai.netlify.app/",
        }
    },
    {
        id: 3,
        src: "/projectsImg/WeatherApp.png",
        project_name: "위치 기반 날씨 정보 서비스",
        desc: [
            "사용자 위치 및 검색 지역 기반의 실시간 날씨 정보 제공 웹 애플리케이션",
            "기상청 API를 활용하여 현재 날씨, 하늘 상태, 기온 정보를 직관적인 UI로 시각화한 서비스"
        ],
        detail: {
            summary: [
                {
                    strong: "Next.js 기반 날씨 서비스 개발",
                    desc: "– Next.js를 기반으로 프로젝트를 구성하고, 서버/클라이언트 컴포넌트를 분리하여 날씨 데이터 요청과 UI 렌더링을 효율적으로 처리했습니다."
                },
                {
                    strong: "위치 기반 날씨 데이터 연동",
                    desc: "– 브라우저 Geolocation API를 활용해 사용자의 현재 위경도를 수집하고, 이를 기상청 격자 좌표(nx, ny) 데이터와 매칭하여 정확한 지역 날씨 정보를 조회하도록 구현했습니다."
                },
                {
                    strong: "지역 검색 및 필터링 로직 구현",
                    desc: "– 시·군·구·동 단위의 지역 데이터를 JSON 형태로 가공하여 관리하고, 사용자 입력에 따라 조건부 필터링을 수행해 원하는 지역의 날씨를 빠르게 검색할 수 있도록 처리했습니다."
                },
                {
                    strong: "날씨 상태별 UI 및 스타일 분기",
                    desc: "– 맑음, 구름 많음, 흐림 등 하늘 상태 코드(SKY)에 따라 배경 그라데이션, 아이콘, 카드 스타일이 동적으로 변경되도록 구성하여 시각적 직관성을 강화했습니다."
                },
                {
                    strong: "UX 중심의 로딩 및 예외 처리",
                    desc: "– 날씨 API 응답 대기 중에는 로딩 UI를 노출하고, 데이터가 없는 경우나 오류 발생 시에도 화면이 깨지지 않도록 fallback UI 및 방어 로직을 적용했습니다."
                },
                {
                    strong: "모바일 환경 및 크로스 브라우징 고려",
                    desc: "– 모바일 Safari 환경에서의 vh 단위 이슈, 스크롤 문제 등을 고려해 레이아웃을 설계하고, 주요 브라우저에서 동일한 사용자 경험을 제공할 수 있도록 대응했습니다."
                },
                {
                    strong: "프로젝트 기획 의도",
                    desc: "– 복잡한 기상 정보 나열이 아닌, 사용자가 ‘지금 이 순간의 날씨’를 직관적으로 이해할 수 있는 UI를 목표로 기획했습니다. 위치 기반 자동 조회와 간단한 검색 기능을 통해 일상에서 빠르게 활용할 수 있는 날씨 앱을 구현하고자 했습니다."
                }
            ],
            tech: [
                { tech_stack: "Next.js", icon: <RiNextjsFill />, color: "text-white-600" },
                { tech_stack: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "text-teal-600" },
                { tech_stack: "Tanstack-query", icon: <RiReactjsFill />, color: "text-blue-400" },
                { tech_stack: "Zustand", icon: <RiBearSmileLine />, color: "text-[#8B4513]" },
            ],
            project_href: "https://devweatherappgo.netlify.app"
        }
    },
    {
        id: 4,
        src: "/projectsImg/AiFaceReading.png",
        project_name: "AI 관상 분석 웹 서비스",
        desc: [
            "사용자가 업로드한 얼굴 이미지를 기반으로 관상 요소를 분석하고 해석 결과를 제공하는 AI 관상 웹 서비스",
            "얼굴 유효성 검증부터 AI 분석 결과 시각화까지 하나의 흐름으로 구성된 사용자 중심 분석 서비스"
        ],
        detail: {
            summary: [
                {
                    strong: "AI 관상 분석 서비스 기획 및 구현",
                    desc: "– 사용자가 얼굴 이미지를 업로드하면 관상 분석 결과를 단계적으로 제공하는 웹 서비스를 기획하고 구현했습니다. 분석 전 검증 단계와 결과 표현 단계를 명확히 분리하여 사용자 신뢰도를 높였습니다."
                },
                {
                    strong: "얼굴 이미지 검증 로직 설계",
                    desc: "– AI 분석 요청 전 단계에서 얼굴 존재 여부, 다중 얼굴 여부, 이미지 크기 제한 등을 사전 검증하여 불필요한 API 호출을 방지하고 안정적인 분석 흐름을 구성했습니다."
                },
                {
                    strong: "OpenAI Vision API 연동",
                    desc: "– 얼굴 이미지 데이터를 Base64 형태로 변환하여 OpenAI Vision 모델에 전달하고, 관상 요소(얼굴형, 이마, 눈, 코 등)에 대한 텍스트 분석 결과를 구조화된 데이터로 수신하도록 구현했습니다."
                },
                {
                    strong: "단계별 UX 흐름 및 상태 관리",
                    desc: "– 사진 업로드 → 얼굴 검증 → AI 분석 → 결과 노출까지의 흐름을 상태 머신 개념으로 설계하고, 각 단계별 UI 상태(로딩, 에러, 완료)를 명확히 구분해 사용자 혼란을 최소화했습니다."
                },
                {
                    strong: "분석 결과 UI 컴포넌트화",
                    desc: "– 관상 항목별 결과를 카드 단위 컴포넌트로 분리하여 재사용성을 높였으며, 데이터 구조 변화에도 유연하게 대응할 수 있도록 렌더링 로직을 구성했습니다."
                },
                {
                    strong: "모바일 환경 및 인앱 브라우저 대응",
                    desc: "– 모바일 Safari 및 토스 인앱(WebView) 환경에서의 파일 업로드, HTTPS 요구사항, 레이아웃 이슈 등을 고려하여 서비스가 동일하게 동작하도록 대응했습니다."
                },
                {
                    strong: "프로젝트 기획 의도",
                    desc: "– 단순한 재미 요소를 넘어, 사용자가 자신의 얼굴 특징을 하나의 이야기로 이해할 수 있도록 ‘단계적 분석 경험’을 제공하는 것을 목표로 기획했습니다. 기술적으로는 이미지 처리, 비동기 흐름 제어, UX 설계를 함께 고민한 프로젝트입니다."
                }
            ],
            tech: [
                { tech_stack: "Next.js", icon: <RiNextjsFill />, color: "text-white-600" },
                { tech_stack: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "text-teal-600" },
                { tech_stack: "TanStack Query", icon: <RiReactjsFill />, color: "text-blue-400" },
                { tech_stack: "Zustand", icon: <RiBearSmileLine />, color: "text-[#8B4513]" },
                { tech_stack: "OpenAI API", icon: <RiRobot2Line />, color: "text-purple-400" },
            ],
            project_href: "https://ai-facereading.shop"
        }
    }

]