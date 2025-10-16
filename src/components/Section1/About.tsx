import React from 'react'



const About = () => {

  return (
    <section
      id="about"
      className="h-screen flex items-center justify-around gap-[30px]"
    >
      <div className='flex flex-col'>
        <h1 className="text-4xl font-bold">안녕하세요.</h1>
        <h2 className='text-2xl'>가치와 스스로의 해결방법을 탐구하는 프론트엔드 개발자 이혜진 입니다.</h2>
      </div>

      <div>
        <div>
          <h3 className='text-xl font-bold'>사용자의 입장에서 생각합니다.</h3>
          <p>- UI 구성부터 작은 인터랙션 하나까지, 사용자의 흐름과 편의성을 최우선으로 고려합니다.</p>
        </div>

        <div>
          <h3 className='text-xl font-bold'>소통을 기반으로 협업합니다.</h3>
          <p>- 디자이너, 백엔드 개발자와의 원활한 커뮤니케이션으로 문제를 빠르게 파악하고 해결해왔습니다.</p>
        </div>

        <div>
          <h3 className='text-xl font-bold'>성장을 목표로 꾸준히 학습합니다.</h3>
          <p>- 새로운 기술과 환경에 대한 두려움 없이, 몰입하고 흡수하는 데 자신이 있습니다.</p>
        </div>

        <div>
          <h3 className='text-xl font-bold'>끈기와 책임감이 강합니다.</h3>
          <p>- 맡은 일은 끝까지 해내는 집요함과 책임감을 갖고 일합니다.</p>
        </div>

        <div>
          <h3 className='text-xl font-bold'>추진력이 있습니다.</h3>
          <p>- 방향이 정해지면 빠르게 실행에 옮기고, 시행착오를 통해 발전합니다.</p>
        </div>
      </div>
    </section>
  )

}

export default About





