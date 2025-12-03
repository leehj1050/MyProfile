import Link from 'next/link'
import React from 'react'
import styles from './popup.module.css'

type PopupProps = {
    onClickOutside: () => void
    detailData: {
        summary: { strong: string; desc: string }[]
        tech: { tech_stack: string, icon: React.ReactElement, color: string }[]
        project_href: string
    }
}

export const PopupDetail = ({ onClickOutside, detailData }: PopupProps) => {
    const { summary, tech, project_href } = detailData

    return (
        <div className='absolute inset-[0] z-99 w-full h-[100vh] flex bg-black/90 justify-center items-center' onClick={onClickOutside}>
            <div className='rounded-lg border border-black w-[90%] text-white p-2 bg-gradient-to-b from-neutral-950 to-neutral-800 overflow-y-auto h-[55vh] flex flex-col justify-between'
                onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 막기
            >
                <div className='flex justify-between mb-1.5'>
                    <h3 className='text-lg md:text-xl font-semibold'>프로젝트 설명</h3>
                    <button className='text-xl w-[30px] font-semibold hover:text-gray-400' onClick={onClickOutside}>X</button>
                </div>


                <ul className='list-disc pl-3 flex flex-col gap-1 text-sm md:text-base'>
                    {summary.map((item, summaryKey) => (
                        <li key={summaryKey}>
                            <strong>{item.strong}</strong>
                            {item.desc}
                        </li>
                    ))}
                </ul>

                <h3 className='text-lg md:text-xl font-semibold my-1.5'>사용기술</h3>
                <ul className='flex gap-2.5 text-md md:text-2xl'>
                    {tech.map((item, techKey) => (
                        <li key={techKey} className={`${item.color} flex items-center gap-1`}>
                            {item.icon} {item.tech_stack}
                        </li>
                    ))}
                </ul>


                <h3 className='text-lg md:text-xl font-semibold my-1.5'>프로젝트 Link</h3>
                <ul className='flex gap-2.5 text-xl '>
                    <li className="flex items-center gap-1 relative  ">
                        <Link className='text-gray-500 hover:text-white' href={project_href} target='_blank'>View Project</Link>
                        <div className={`absolute top-0 left-[120%] w-full font-semibold text-lg ${styles.arrow} `}>
                            {`<< Click`}
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}
