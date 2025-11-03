import React, { forwardRef } from 'react'
import { TechStack } from './TechStack'
import { Jua } from "next/font/google";

const jua = Jua({
  subsets: ["latin"],
  weight: "400",
});

const About = forwardRef<HTMLDivElement>((props, ref) => { // [@media(min-width:1235px)]:flex-row
  return (
    <section
      id="about"
      ref={ref}
      className={`${jua.className} flex gap-[30px] flex-col min-h-[calc(100vh-75px)] items-center justify-center`}
    >
      <div className='flex flex-col gap-1'>
        <h1 className="text-4xl  [@media(max-width:600px)]:text-2xl">안녕하세요.</h1>
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
        <div>
          <h3 className='text-xl font-bold'>
            <span className='text-blue-600 text-2xl'>사용자의 입장</span>에서 생각합니다.
          </h3>
          <p>- UI 구성부터 작은 인터랙션 하나까지, 사용자의 흐름과 편의성을 최우선으로 고려합니다.</p>
        </div>

        <div>
          <h3 className='text-xl font-bold'>
            <span className='text-[#daa520] text-2xl'>소통</span>을 기반으로 협업합니다.
          </h3>
          <p>- 디자이너, 백엔드 개발자와의 원활한 커뮤니케이션으로 문제를 빠르게 파악하고 해결해왔습니다.</p>
        </div>

        <div>
          <h3 className='text-xl font-bold'>
            <span className='text-lime-600 text-2xl'>성장</span>을 목표로 꾸준히 <span className='text-teal-600 text-2xl'>학습</span>합니다.
          </h3>
          <p>- 새로운 기술과 환경에 대한 두려움 없이, 몰입하고 흡수하는 데 자신이 있습니다.</p>
        </div>

        <div>
          <h3 className='text-xl font-bold'>
            <span className='text-[#800000] text-2xl'>끈기와 책임감</span>이 강합니다.
          </h3>
          <p>- 맡은 일은 끝까지 해내는 집요함과 책임감을 갖고 일합니다.</p>
        </div>

        <div>
          <h3 className='text-xl font-bold'>
            <span className='text-[#ff69b4] text-2xl'>추진력</span>이 있습니다.
          </h3>
          <p>- 방향이 정해지면 빠르게 실행에 옮기고, 시행착오를 통해 발전합니다.</p>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"
export default About





