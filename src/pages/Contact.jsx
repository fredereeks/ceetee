import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { FaArrowDown } from 'react-icons/fa'
import { niit_swift_student } from '../assets/images'


function Contact(){
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    });
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const formRef = useRef(null);

    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Contact";
    },[]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess("");
            setError(undefined)
        },2000)
        return () => {
            clearTimeout(timer);
        }
    },[success,error])

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        setSuccess("")
        setSuccess(undefined)
        try{
            const res = await axios.post("http://localhost:4119/api/contact", inputs);
            setSuccess(res.data);
            formRef.current.reset();
        }catch(err){
            console.log({err})
            setError(err.message)
        }
        setLoading(false);
    }
    
    return (
        <main className="relative">
            <section className="contact relative py-10 bg-orange-50">
                <div className="md:container md:mx-auto px-4 py-20 md:px-4 grid grid-cols-1 md:grid-cols-2 items-stretch">
                    <aside className="flex flex-col justify-center gap-3 md:gap-5">
                        <p className="uppercase text-md md:text-base font-semibold text-sec">Contact</p>
                        <h3 className="text-3xl text-sky-700 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal">Feel free to <span className="text-cyan-500">reach out</span> to us</h3>
                        <p className="text-md md:text-md font-semibold text-slate-600"></p>
                        <a href="#contact-form" className="bg-slate-700 text-white text-xs sm:text-sm md:text-md w-max px-3 sm:py-4 flex gap-2 items-center py-3 my-3 sm:px-4 rounded-sm">Send in your Inquiry <FaArrowDown className="mt-1 text-xs md:text-sm" /></a>
                    </aside>
                    <div className="relative border-1 border-zinc-50 before:h-40 before:w-40 before:left-0 before:top-0 before:bg-pri before:absolute after:h-40 after:w-40 after:right-0 after:bottom-0 after:bg-sec after:absolute p-4">
                        <img src={niit_swift_student} alt="" className="relative shadow-lg z-10 w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <section className="contact px-0 -mx-2 bg-pri-light">
                <div className="md:px-10 md:container pt-20 mx-auto sm:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                    <div className="flex col-start-1 flex-col justify-center items-center md:items-start gap-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-pri uppercase text-center md:text-justify">Fill out <span className="text-sec underline">your inquiries</span> in the form provided</h3>
                        <p className="text-sm md:text-md text-zinc-500 text-center px-4 sm:px-3 md:px-0 md:text-justify w-full md:w-[70%] leading-loose">Our dedicated team are always happy to answer any kind of queries you may have. Try us.</p>
                    </div>
                    <div id="contact-form" className="flex col-span-2 justify-center px-2 py-5 md:p-5">
                        <form ref={formRef} onSubmit={handleSubmit} className="bg-white px-8 py-12 rounded-sm w-[90%] sm:max-w-[30rem] shadow-md shadow-slate-300 md:-mb-10 flex flex-col gap-5">
                            <h3 className="text-md md:text-xl text-center font-bold text-sec uppercase">We will get back to you in no time</h3>
                            {success && <div className="text-sm text-white py-2 my-2 px-4 bg-pri text-center rounded-md">{success}</div>}
                            {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="text" placeholder='First Name' name='firstname'  required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="text" placeholder='Last Name'  name='lastname' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="email" placeholder='Email'  name='email' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="phone" placeholder='Phone Number (optional)'  name='phone' className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <textarea onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))}  placeholder='Would be interested in knowing your drive (optional)'  name='message'   className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[10rem] lg:col-span-2 resize-y " ></textarea>
                            </div>
                            <button type="submit" disabled={loading} className="py-2 px-5 rounded-md mx-auto bg-pri cursor-pointer text-center text-gray-100 w-full">{loading ? 'Processing...' : 'Sign Me Up'}</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact