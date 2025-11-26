import Image from 'next/image'
import React, { forwardRef } from 'react'
import { PROJECT_LIST } from './config'
import Link from 'next/link';
import { useDarkMode } from '@/app/contextAPI/useDarkMode';

const Projects = forwardRef<HTMLDivElement, { popupClick: (projectDetail: any) => void }>((props, ref) => {
  const GRID_SIZE = 6; // 3x2
  const placeholderCount = GRID_SIZE - PROJECT_LIST.length;
  const { popupClick } = props
  const { isDarkMode } = useDarkMode()


  return (
    <section
      id="projects"
      ref={ref}
      className=" flex flex-col gap-5 flex-1 mt-5 "
    >
      <h1 className="text-4xl font-bold text-center">Projects</h1>

      <div className="gap-2 grid grid-cols-1 grid-rows-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {PROJECT_LIST.map((project) => (
          <article key={project.id}
            className={`border border-gray-200 rounded-xl overflow-hidden hover:scale-101 duration-300 cursor-pointer ${isDarkMode ? "shadow-[0_0_8px]" : "shadow-md"}`}
            onClick={() => popupClick(project.detail)}
          >
            <div className='relative h-[300px] '>
              <Image src={project.src} alt='gpt_project' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
            <div className='p-2 flex flex-col gap-1'>
              <h3 className='text-lg font-bold'>{project.project_name}</h3>
              {project.desc.map((desc, key) => (
                <ul className='list-disc pl-2 text-sm' key={key}>
                  <li>{desc}</li>
                </ul>
              ))}
            </div>
          </article>
        ))}

        {/* 빈 칸 (placeholders) */}
        {Array.from({ length: placeholderCount > 0 ? placeholderCount : 0 }).map(
          (_, i) => (
            <article key={i} className={`border border-gray-200 rounded-xl overflow-hidden ${isDarkMode ? "shadow-[0_0_8px]" : "shadow-md"}`}>
              <div className='relative h-[300px] bg-black flex items-center justify-center'>
                <p className='text-2xl text-white font-bold'>No Project</p>
              </div>
              <div className='p-2 flex flex-col gap-1'>
                <h3 className='text-lg font-bold'>준비중..</h3>
              </div>
            </article>
          )
        )}
      </div>

    </section>
  )
})

Projects.displayName = "Projects"
export default Projects