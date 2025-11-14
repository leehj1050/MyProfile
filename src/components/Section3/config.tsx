import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

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

]