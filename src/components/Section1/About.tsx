import React, { forwardRef, useState } from 'react'
import { TechStack } from './TechStack'
import styles from './About.module.css'
import { INTRODUCE_INFO } from './config';


const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      className="flex gap-5 flex-col min-h-[calc(100vh-75px)] items-center justify-center"
    >
      <div className='flex flex-col gap-1'>
        <h1 className="text-4xl [@media(max-width:600px)]:text-2xl font-bold">안녕하세요.</h1>
        <h2 className='text-2xl [@media(max-width:600px)]:text-lg'>
          가치와 스스로의 해결방법을 탐구하는
          <br />
          프론트엔드 개발자 <strong>'이혜진'</strong> 입니다.
        </h2>

        <div className='flex items-center gap-1'>
          <p className='shrink-0 text-xl font-bold'>Tech Stack</p>
          <p>|</p>
          <TechStack />
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        {INTRODUCE_INFO.map((info, infoIndex) => (
          <div key={info.id}>
            <div className='flex gap-1'>
              {info.title.map((titleText, titleIndex) => (
                <h3 className={`text-xl font-bold`} key={titleIndex}>
                  {titleText.focusText.split("").map((ch, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${styles.type_char} `}
                      style={{
                        color: titleText.focusColor,
                        animationDelay: `${infoIndex * 0.8 + titleIndex * 0.3 + i * 0.08}s`,
                      }}
                    >
                      {ch}
                    </span>
                  ))}
                  <span>{titleText.restText}</span>
                </h3>
              ))}
            </div>
            <p>- {info.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
})

About.displayName = "About"
export default About





