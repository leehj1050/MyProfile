"use client";
import { useState, useEffect } from "react";

interface Chat {
  role: "user" | "me";
  text: string;
}

const messages: Chat[] = [
  { role: "user", text: "안녕하세요, 누구세요?" },
  { role: "me", text: "안녕하세요! 프론트엔드 개발자 이혜진입니다 👋" },
  { role: "user", text: "어떤 일을 하시나요?" },
  { role: "me", text: "Next.js와 TypeScript 기반으로 웹 대시보드와 데이터 시각화 서비스를 개발하고 있습니다." },
  { role: "user", text: "경력은 얼마나 되셨나요?" },
  { role: "me", text: "약 2년 7개월 동안 프론트엔드 개발자로 근무했습니다." },
  { role: "user", text: "앞으로의 목표는요?" },
  { role: "me", text: "좋은 팀에서 함께 성장하며, 사용자 경험을 개선하는 개발자가 되고 싶습니다." },
];

const About = () => {
   const [visible, setVisible] = useState<Chat[]>([]);

   useEffect(() => {
    messages.forEach((msg, idx) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, msg]);
      }, idx * 1200); // 한 줄당 1.2초 간격
    });
  }, []);

  return (
     <section
      id="about"
      className="h-screen flex items-center justify-center bg-gray-800 text-white"
    >
      <div className="flex flex-col border border-blue-600">
        <div className="bg-[#3D3D3D] h-[40px]  rounded-tl-2xl rounded-tr-2xl flex  items-center pl-1 gap-x-[8px]">
          <span className="w-[15px] h-[15px] bg-[#FF5050] rounded-full"></span>
          <span className="w-[15px] h-[15px] bg-[#F7DB3C] rounded-full"></span>
          <span className="w-[15px] h-[15px] bg-[#50D63E] rounded-full"></span>
        </div>

      <div className="flex flex-col gap-y-[15px] p-6 max-w-lg mx-auto bg-gray-900 text-white rounded-bl-2xl rounded-br-2xl shadow-lg p-1">
        {visible.map((m, i) => (
        <div
          key={i}
          className={`flex ${
            m.role === "me" ? "justify-end" : "justify-start"
          } transition-all duration-500`}
        >
          <div
            className={`px-4 py-2 rounded-2xl max-w-[80%] ${
              m.role === "me"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-100"
            }`}
          >
            {m.text}
          </div>
        </div>
      ))}
      </div>
    </div>
    </section>
  )

}

export default About





