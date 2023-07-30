import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css'
import { ctti_coder } from '../assets/images'
import { Button } from '../components/Button'
import {courses} from "../data"

function Enquiry() {
    const [inputs, setInputs] = useState({
        phone: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const formRef = useRef(null);

    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Enquiry";
    }, []);

    useEffect(() => {
        let timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            setSuccess("");
            setError(undefined)
        }, 5000)
        return () => {
            clearTimeout(timer);
        }
    }, [success, error])

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            setError(undefined)
            setSuccess("")
            const res = await axios.post(`http://localhost:4119/api/enquiry`, inputs)
            setSuccess(res.data)
            formRef.current.reset();
        } catch (err) {
            console.log({ err })
            setError(err.message)
        }
        setLoading(false);
    }

    return (
        <section className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative flex items-center justify-center">
                <form action="" onSubmit={handleSubmit} ref={formRef} className="form max-w-[40rem] w-[15rem] relative mx-auto flex flex-col gap-3 ">
                    <div className="flex flex-col py-4 items-center">
                        <p className="text-xs md:text-sm text-slate-400">Feel free to </p>
                        <h3 className="text-lg md:text-xl text-indigo-500 font-semibold uppercase">Inquire about our Courses</h3>
                        {success && <div className="text-sm text-white py-2 my-2 px-4 bg-green-500 text-center rounded-md">{success}</div>}
                        {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <input onChange={handleChange} type="text" placeholder='First Name' name='firstname' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                        <input onChange={handleChange} type="text" placeholder='Last Name' name='lastname' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                        <div className="flex w-full gap-1 py-2 border-[1px] border-zinc-200 bg-transparent rounded-md overflow-hidden">
                            <PhoneInput
                                onChange={(value) => setInputs(prev => ({ ...prev, phone: value }))}
                                placeholder={"Enter Phone Number"}
                                international
                                withCountryCallingCode={true}
                                key={234}
                                defaultCountry='NG'
                                style={{ outline: 0, width: '108%' }}
                                countryCallingCodeEditable={false}
                                value={inputs.phone}
                                name="phone"
                                flags={flags}
                                limitMaxLength={8}
                                className='w-full outline-none placeholder-opacity-70 text-zinc-500 bg-transparent rounded-md px-4 flex-1'
                            />
                        </div>
                        <label htmlFor="courses" className="text-slate-500 text-sm py-2">Select a Course of your Interest</label>
                        <select name="courses" id="courses" className="relative w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4">
                            {
                                courses.map(course => (
                                    <option key={course.id}>{course.title}</option>
                                ))
                            }
                        </select>
                        <input onChange={handleChange} type="email" placeholder='Email Address' name='email' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                        <textarea onChange={handleChange} type="email" placeholder='Please enter your message...' name='message' required className="w-full resize-y outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" cols={10} ></textarea>
                        <Button styles={'text-white font-semibold bg-gradient-to-r from-pink-500 to-pink-600 w-full'} text={`${loading ? 'Processing...' : 'Send Enquiry'}`} key={118} />
                    </div>
                    {/* <Link to="/login" className="text-xs md:text-sm text-center text-slate-400 py-1">Have an Account already? <span className="text-indigo-500 font-semibold">Login</span></Link> */}
                </form>
            </div>
            <div className="relative hidden md:flex">
                <img src={ctti_coder} alt="CTTI Swift Students" className="absolute w-full h-full left-0 top-0 object-contain" />
            </div>
        </section>
    )
}

export default Enquiry;
