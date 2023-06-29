import React, { useEffect, useState, useRef} from 'react'
import { niit_building } from '../assets/images'
// import axios from 'axios'
import {Button} from '../components/Button'
import {TextInput} from '../components/TextInput'
import { Link } from 'react-router-dom'

function Signup(){
    const [inputs, setInputs] = useState({
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            image: "",
            confirmPassword: ""
        });
        const [error, setError] = useState(undefined);
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState("");
        const formRef = useRef(null);
    
        useEffect(() => {
            document.title = "CTTI e-learning Centre :: Register";
        },[]);
    
        useEffect(() => {
            let timer;
            clearTimeout(timer);
            timer = setTimeout(() => {
                setSuccess("");
                setError(undefined)
            },5000)
            return () => {
                clearTimeout(timer);
            }
        },[success,error])

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setLoading(true)
            setError(undefined)
            setSuccess("")
            // const res = await axios.post(`http://localhost:4119/api/auth/register`, inputs)
            // setSuccess(res.data)
            formRef.current.reset();
        }catch(err){
            console.log({err})
            setError(err.message)
        }
        setLoading(false);
    }

    return(
        <section className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative flex items-center justify-center">
                <form action="" onSubmit={handleSubmit} ref={formRef} className="form max-w-[40rem] w-[15rem] relative mx-auto flex flex-col gap-3 ">
                    <div className="flex flex-col py-4 items-center">
                        <h3 className="text-lg md:text-xl text-indigo-500 font-semibold">Become a CTTI Student</h3>
                        <p className="text-xs md:text-sm text-slate-400">Please an account to get started</p>
                        {success && <div className="text-sm text-white py-2 my-2 px-4 bg-green-500 text-center rounded-md">{success}</div>}
                        {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}    
                    </div>
                    <TextInput styles={'w-full'} holder={'Enter Firstname'} id={'firstname'} value={inputs.firstname} onChange={handleChange} type={'text'} key={100} />
                    <TextInput styles={'w-full'} holder={'Enter Lastname'} id={'lastname'} value={inputs.lastname} onChange={handleChange} type={'text'} key={101} />
                    <TextInput styles={'w-full'} holder={'Enter Username'} id={'username'} value={inputs.username} onChange={handleChange} type={'text'} key={102} />
                    <TextInput styles={'w-full'} holder={'Enter Email'} id={'email'} value={inputs.email} onChange={handleChange} type={'email'} key={103} />
                    <TextInput styles={'w-full'} holder={'Enter Password'} id={'password'} value={inputs.password} onChange={handleChange} type={'password'} key={106} />
                    <TextInput styles={'w-full'} holder={'Confirm Password'} id={'confirmPassword'} value={inputs.confirmPassword} onChange={handleChange} type={'password'} key={107} />
                    <Button styles={'text-white font-semibold bg-gradient-to-r from-pink-500 to-pink-600 w-full'} text={`${loading ? 'Processing...' : 'Sign Up'}`} key={118} />
                    <Link to="/login" className="text-xs md:text-sm text-center text-slate-400 py-1">Have an Account already? <span className="text-indigo-500 font-semibold">Login</span></Link>
                </form>
            </div>
            <div className="relative hidden md:flex">
                <img src={niit_building} alt="CTTI Swift Students" className="absolute w-full h-full left-0 top-0 object-cover" />
            </div>
        </section>
    )
}

export default Signup;
