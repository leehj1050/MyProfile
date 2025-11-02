import React, { forwardRef } from 'react'

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-[calc(100vh-75px)] flex items-center justify-center"
    >
      <h1 className="text-4xl font-bold">Contact Section</h1>
    </section>
  )
})

Contact.displayName = "Contact"
export default Contact