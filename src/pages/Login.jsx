import React, {useEffect, useState, useRef} from 'react'
import { rocket } from '../assets/images'
import axios from 'axios'
import {Button} from '../components/Button'
import {TextInput} from '../components/TextInput'
import { Link } from 'react-router-dom'
import { randomColor } from '../utils'

function Login(){
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState(undefined)
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const formRef = useRef(null);

    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Login";
    },[]);


    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            setLoading(true)
            setError(undefined)
            setSuccess("")
            const res = await axios.post(`http://localhost:4119/api/auth/login`, inputs)
            setSuccess(res.data)
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
                <form action="" onSubmit={handleSubmit} ref={formRef} className="form max-w-[25rem] w-[15rem] relative mx-auto flex flex-col gap-3 ">
                    <div className="flex flex-col items-center py-2">
                        <h3 className="text-lg md:text-xl text-transparent bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text font-semibold">Welcome Back</h3>
                        <p className="text-xs md:text-sm text-slate-400">Please login to continue</p>
                        {success && <div className="text-sm text-white py-2 my-2 px-4 bg-green-500 text-center rounded-md">{success}</div>}
                        {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                    </div>
                    <TextInput required styles={'w-full'} holder={'Enter Username'} id={'username'} value={inputs.username} onChange={handleChange} type={'text'} key={110} />
                    <div className="flex flex-col gap-1">
                        <TextInput required styles={'w-full'} holder={'Enter Password'} id={'password'} value={inputs.password} onChange={handleChange} type={'password'} key={111} />
                        <Link to={'/reset'} className="text-xs text-pink-400 text-left">Forgot Password?</Link>
                    </div>
                    <Button styles={'text-white bg-gradient-to-r from-indigo-400 to-indigo-600 w-full'} bg={'text-indigo-700'} color={'text-white'} text={`${loading ? 'Processing...' : 'Sign In'}`} key={112} />
                    <Link to="/signup" className="text-xs md:text-sm text-center text-slate-400 py-1">Don't have an Account? <span className="text-indigo-500 font-semibold">Sign Up</span></Link>
                </form>
            </div>
            <div style={{background: randomColor(.8)}} className="relative hidden md:flex">
                <img src={rocket} alt="CTTI Web Students" className="absolute w-full h-full left-0 top-0 object-contain" />
            </div>
        </section>
    )
}

export default Login;
