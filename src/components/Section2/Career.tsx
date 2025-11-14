import React, { forwardRef } from 'react'
import { CAREER_CONFIG } from './config'
import { useDarkMode } from '@/app/contextAPI/useDarkMode'


const Career = forwardRef<HTMLDivElement>((props, ref) => {
  const { isDarkMode } = useDarkMode()

  return (
    <section
      id="career"
      ref={ref}
      className="flex-1 flex flex-col gap-5">

      <h1 className="text-4xl font-bold text-center">Work Experience</h1>

      <div className='flex flex-col gap-2'>
        {CAREER_CONFIG.map((career) => (
          <div className={`p-1.5 flex flex-col gap-1 border border-gray-300 rounded-xl hover:scale-101 duration-400 ${isDarkMode ? "shadow-[0_0_8px]" : "shadow-lg"}`}
            key={career.id}
          >

            <div className='flex justify-between'>
              <p className='text-xl font-semibold'>{career.info.position}</p>
              <p className='text-gray-500'>{career.info.start_working} - {career.info.end_working}</p>
            </div>

            <div className='font-semibold'>
              <p>{career.company} (Full-Time)</p>
            </div>

            <ul className='list-disc pl-2'>
              {career.experience.map((experience, key) => (
                <li key={key} className='mb-[5px]'>{experience}</li>
              ))}
              { /** experience의 개수가 5개보다 작으면 빈칸 */}
              {career.experience.length < 5 && <li className='list-none'>&nbsp;</li>}
            </ul>


            <div className='flex gap-1'>
              {career.techstack.map((tech, key) => (
                <span key={key}
                  className={` px-1 py-[5px] py-0.5 text-sm rounded-full ${isDarkMode ? "text-white bg-gray-600" : "text-black bg-gray-300"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>


    </section>
  )
})

Career.displayName = "Career"
export default Career