import React, { forwardRef } from 'react'

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-[calc(100vh-75px)] flex items-center justify-center "
    >
      <h1 className="text-4xl font-bold">Projects Section</h1>
    </section>
  )
})

Projects.displayName = "Projects"
export default Projects