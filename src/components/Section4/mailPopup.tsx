import React, { useState } from 'react'

const MailPopup = ({ onClickOutside }: { onClickOutside: () => void }) => {
    //loading state
    const [isLoading, setIsLoading] = useState(false)


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")

    //error msg
    const [nameErrorMsg, setNameErrorMsg] = useState("")
    const [emailErrorMsg, setEmailErrorMsg] = useState("")
    const [contentErrorMsg, setContentErrorMsg] = useState("")

    // onChange
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { id, value } = e.target

        switch (id) {
            case "name":
                setName(value)
                setNameErrorMsg("")
                return
            case "email":
                setEmail(value)
                setEmailErrorMsg("")
                return
            case "content":
                setContent(value)
                setContentErrorMsg("")
                return
            default:
                return
        }

    }


    // send message
    const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name) {
            setNameErrorMsg("Name is required")
        }
        if (!email) {
            setEmailErrorMsg("Email is required")
        }
        if (!content) {
            setContentErrorMsg("Content in required")
        }

        if (name && email && content) {
            setIsLoading(true)
            try {
                const formatData = {
                    name,
                    email,
                    content
                }
                const response = await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify(formatData)
                })
                if (!response.ok) {
                    throw new Error(`response status: ${response.status}`);
                }
                setIsLoading(false)
                onClickOutside()

            } catch (error) {
                console.error("메일전송 error ", error)
            }

        }

    }

    return (
        <div className='absolute inset-[0] z-99 w-full h-[100vh] flex flex-col gap-5 bg-black/90 justify-center items-center ' onClick={() => {
            if (isLoading) return
            onClickOutside()
        }}>
            <h3 className='text-2xl font-semibold'>Get in touch</h3>
            {
                isLoading ? "메일 전송중..."
                    : (
                        <form className=' max-w-3xl w-full flex flex-col gap-4' onSubmit={(e) => handleSendMessage(e)} onClick={(e) => e.stopPropagation()}>
                            <div className='flex gap-2'>
                                <div className='flex-1'>
                                    <div className='flex flex-col gap-1 relative group/name '>
                                        <label htmlFor='name' className='font-bold'>성명</label>
                                        <input id='name' placeholder='성명을 입력하세요.' className='bg-zinc-800 focus-visible:outline-none rounded-md placeholder-text-neutral-600 p-1' onChange={(e) => handleChangeText(e)} />
                                        <span className="group-hover/name:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                                        <span className="group-hover/name:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
                                    </div>
                                    <span className='text-red-500 text-xs'>{nameErrorMsg ? nameErrorMsg : <>&nbsp;</>}</span>
                                </div>

                                <div className='flex-1'>
                                    <div className='flex flex-col gap-1 relative group/email'>
                                        <label htmlFor='email' className='font-bold'>이메일</label>
                                        <input id='email' placeholder='이메일을 입력하세요.' className='bg-zinc-800 focus-visible:outline-none rounded-md placeholder-text-neutral-600 p-1' onChange={(e) => handleChangeText(e)} />
                                        <span className="group-hover/email:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                                        <span className="group-hover/email:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
                                    </div>
                                    <span className='text-red-500 text-xs'>{emailErrorMsg ? emailErrorMsg : <>&nbsp;</>}</span>
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-col gap-1 relative group/content'>
                                    <label htmlFor='content' className='font-bold'>메시지</label>
                                    <textarea id='content' placeholder='메시지를 입력하세요.' rows={4} className='bg-zinc-800 focus-visible:outline-none rounded-md placeholder-text-neutral-600 resize-none p-1' onChange={(e) => handleChangeText(e)} />
                                    <span className="group-hover/content:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                                    <span className="group-hover/content:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
                                </div>
                                <span className='text-red-500 text-xs'>{contentErrorMsg ? contentErrorMsg : <>&nbsp;</>}</span>
                            </div>

                            <div className='bg-zinc-800 rounded-md font-semibold text-center group/btn'>
                                <button className='w-full h-full p-1 relative'>
                                    메시지 보내기 →
                                    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                                    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
                                </button>
                            </div>
                        </form>
                    )
            }
        </div>
    )
}

export default MailPopup