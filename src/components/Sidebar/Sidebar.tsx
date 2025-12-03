import React from 'react'
import { Roboto } from "next/font/google";
import { useDarkMode } from '@/app/contextAPI/useDarkMode';

const roboto = Roboto({
    subsets: ["latin"],
    weight: "600",
})

const steps = [
    { key: 1, id: "About", label: "Introduce" },
    { key: 2, id: "Career", label: "Work Experience" },
    { key: 3, id: "Projects", label: "Projects" },
    { key: 4, id: "Contact", label: "Contact" },
];

export default function Sidebar({ currentSection }: { currentSection: string }) {
    const { isDarkMode } = useDarkMode()

    return (
        <div className={`${roboto.className} h-full w-full flex items-center justify-center`}>
            <ul className="flex flex-col gap-[5vw] relative  flex-1">
                {steps.map((step, i) => (
                    <li key={step.key} className="flex items-center justify-center relative ">
                        {/* 세로 라인 (맨 마지막 제외) */}
                        {i < steps.length - 1 && (
                            <span className={`absolute left-[50%] top-[50px] w-[2px] h-[calc(100%+16px)] hidden aside-line xl:inline `}></span>
                        )}


                        {/* 단계 이름 */}
                        <span
                            className={`${step.id === currentSection
                                ? "text-base xl:text-[25px]" //[@media(min-width:1325px)]:text-xl
                                : "text-sm  xl:text-lg text-gray-400"
                                } transition-all duration-300`}
                        >
                            {step.label}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
