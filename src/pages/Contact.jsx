import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { BreadCrumb } from '../components';
import { courses } from '../data';
import CourseCard from '../components/CourseCard';


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
            <BreadCrumb page={"Contact"} />
            <section className="bg-gray-200 py-20">
                <div className="container max-w-[960px] mx-auto flex flex-col md:flex-row md:justify-center md:items-center gap-2 px-4">
                    <div className="flex flex-col gap-3 md:flex-1 md:pr-2 py-4">
                        <h3 className="text-blue-700 font-bold text-2xl md:text-3xl">Contact us for any Enquiry</h3>
                        <p className="thin-text leading-[1.8]">Our dedicated team are always happy to answer any kind of queries you may have. Try us.</p>
                        <p className="thin-text leading-[1.8]">Alternatively, you can use the live chat to get instant reply (working days and hours only)</p>
                    </div>
                    <div className="sm:flex-1 grid grid-cols-1 justify-center gap-2 bg-white px-4 py-5 md:p-6 shad shadow-gray-500 overflow-hidden rounded-sm w-max">
                    <form ref={formRef} onSubmit={handleSubmit} className="w-[90%] sm:w-full flex flex-col gap-5">
                            {/* <h3 className="text-md md:text-xl text-center font-bold text-cyan-500 uppercase">We will get back to you in no time</h3> */}
                            {success && <div className="text-sm text-white py-2 my-2 px-4 bg-pri text-center rounded-md">{success}</div>}
                            {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="text" placeholder='First Name' name='firstname'  required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="text" placeholder='Last Name'  name='lastname' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="email" placeholder='Email'  name='email' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="phone" placeholder='Phone Number (optional)'  name='phone' className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <textarea onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))}  placeholder='Would be interested in knowing your drive (optional)'  name='message'   className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[10rem] lg:col-span-2 resize-y " ></textarea>
                            </div>
                            <button type="submit" disabled={loading} className="text-gray-50 bg-[#ec1c3e] rounded-[2rem] w-max px-4 py-2 text-sm md:text-md shadow-lg cursor-pointer shadow-[#ec1c3e]">{loading ? 'Processing...' : 'Send Message'}</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 px-4">
                <div className="container relative mx-auto max-w-[980px] py-10 flex flex-col overflow-hidden">
                    <h3 className="py-2 px-3 text-indigo-500 border-0 border-l-[3px] border-l-indigo-500 font-bold text-lg md:text-xl">Suggested Courses for you</h3>
                    <div className="col-span-1 md:col-span-3 pt-6 pb-4 grid course__wrap gap-3" style={{gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"}}>
                        {
                        courses.filter(course => course.featured === true).slice(0,4).reverse().map(course => <CourseCard key={course.id} {...course} state={course}/>)
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact