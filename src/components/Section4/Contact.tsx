import React, { forwardRef } from 'react'
import { CONTATC_INFO } from './config'
import { useDarkMode } from '@/app/contextAPI/useDarkMode'

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  const { isDarkMode } = useDarkMode()

  const handleClickButton = (href: string) => {
    window.open(href, "_blank");
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`flex flex-col gap-5 flex-1 mt-5 justify-between ${isDarkMode ? "" : "bg-gray-200"}`}
    >
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>

      <div className="flex gap-2">
        {CONTATC_INFO.map((item, key) => (
          <div key={key} className={`p-1 flex-1 flex gap-1 border border-2 border-gray-300 rounded-lg cursor-pointer hover:scale-102 duration-300 items-center ${isDarkMode ? "shadow-[0_0_8px]" : "shadow-md"}`}
            onClick={() => handleClickButton(item.href)}
          >
            <div className=' text-3xl'>
              <span >{item.icon}</span>
            </div>

            <div className='flex flex-col'>
              <span className='text-xl font-semibold'>{item.title}</span>
              <span>{item.desc}</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
})

Contact.displayName = "Contact"
export default Contact