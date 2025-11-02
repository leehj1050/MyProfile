import React, { forwardRef } from 'react'

const Career = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id="career"
      ref={ref}
      className="flex-1 flex bg-gray-300 min-h-[calc(100vh-75px)]">

      <div className='border w-[80%]'>
        career
      </div>
    </section>
  )
})

Career.displayName = "Career"
export default Career