import React, { useEffect, useRef, useState } from 'react'
// import { man_image } from '../assets/images'
import { Link, useLocation } from 'react-router-dom'
import { FaCheck, FaStar } from 'react-icons/fa'
import { IoMdCart, IoMdHeadset } from 'react-icons/io'
import { usePaystackPayment } from 'react-paystack';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import axios from 'axios'
import { courses } from '../data';
import CourseCard from '../components/CourseCard';
import { randomNumber } from '../utils/randomNumber';

function CourseSingle() {
  const location = useLocation();
  const {state} = location;
  // console.log({related: courses.filter(course => course.category === state?.category && course.id !== state?.id)});
  const formRef = useRef(null)
  const [inputs, setInputs] = useState({
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      amount: state?.price*100 || 100000000,
      currency: "NGN",
      phone: "",
      message: "",
      reference: '',
      course: state?.title,
  });
  const [form,setForm] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState(undefined)
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFormChange = e => {
    setForm(prev => ({...prev, [e.target.name] : e.target.value}))
    console.log({form})
  }
  
  useEffect(() => {
      document.title = `CTTI e-learning Centre: ${state?.title}`;
  },[location.pathname, state?.title])

  const config = {
        reference: 'CTTI'+ (new Date()).getTime().toString(),
        email: inputs.email,
        amount: inputs.amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
        label: `A donation from ${inputs?.fullname} worth ${inputs?.currency}${inputs?.amount}`,
    };

    const onSuccess = async(reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        setInputs(prev => ({...prev, reference}))
        try{
            const res = await axios.post("http://localhost:4119/api/course/purchase", inputs)
            console.log({data: res.data})
            setSuccess(res.data)
        }catch(err){
            if(err.response){
                setError(err.response.data)
            }else{
                setError(err.data)
            }
        }
        setLoading(false)
        console.log(reference);
    };

    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        setLoading(false)
        setError("Payment Cancelled!")
    }
    
    const initializePayment = usePaystackPayment(config);

    async function handlePayment(e) {
        e.preventDefault();
        setError(undefined)
        setSuccess('')
        setLoading(true)
        // const email = inputs?.email, currency = inputs?.currency, amount = +inputs?.amount, fullname = inputs?.fullname;
        try{
            initializePayment(onSuccess, onClose)    
            // alert(`Thank you for donating ${currency}${amount} to Gray Child Foundation, ${fullname}.\nWe have sent a copy of the payment receipt to your email at ${email}`)
            formRef.reset();
        }catch(err){
            if(err.response){
                setError(err.response.data)
            }else{
                setError(err.data)
            }
        }
        setLoading(false);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setError(undefined)
        setSuccess('')
        setLoading(true)
        // const email = inputs?.email, currency = inputs?.currency, amount = +inputs?.amount, fullname = inputs?.fullname;
        try{
            const res = await axios.post(`http://localhost:4119/api/course/enquiry/${state?.id}`, inputs)
            console.log({data: res.data})
            setSuccess(res.data)
        }catch(err){
            if(err.response){
                setError(err.response.data)
            }else{
                setError(err.data)
            }
        }
        setLoading(false)
        setLoading(false);
    }


  return (
    <main  className='flex flex-col bg-gray-100 pt-14 justify-center'>
      <div className="container relative mx-auto max-w-[980px] px-4 flex flex-col">
        <div className="flex flex-wrap gap-2 items-center pt-5 pb-7 text-slate-400">
          <Link to="/" className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">Home</Link>
          /
          <Link to="/courses" className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">Courses</Link>
          /
          <Link to={`/courses/${state?.category?.toLowerCase().replaceAll(" ", "-")}`} className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">{state?.category}</Link>
          /
          <div className="font-normal hover:text-slate-500 px-2 text-md md:text-lg text-slate-500">{state?.title}</div>
        </div>
      </div>
      <section className="bg-white">
        <div className="container relative mx-auto max-w-[980px] py-10 px-4 flex flex-col">
          <article className="bg-white">
            <div className="container relative mx-auto max-w-[960px] grid grid-cols-1 md:grid-cols-5 gap-3">
              <aside className="col-span-1 md:col-span-3 flex flex-col gap-4">
                <div className="rounded-lg relative h-[300px] md:h-[400px] w-full overflow-hidden before:z-10 before:w-full before:h-[30%] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-gray-950 before:to-transparent">
                  <img src={state?.image} alt={state?.title} className="absolute w-full h-full left-0 top-0 object-cover" />
                  <div className="flex flex-col gap-1 bottom-5 right-4 absolute z-20">
                    <p className="text-white text-xs md:text-sm">{((+Math.ceil(state?.rating) * 100) - randomNumber(141,293)).toLocaleString()} reviews</p>
                    {/* <div className="flex gap-1 items-center">
                      <FaStar className='text-xs text-yellow-500' key={12}/>
                      <FaStar className='text-xs text-yellow-500' key={23}/>
                      <FaStar className='text-xs text-yellow-500' key={56}/>
                      <FaStar className='text-xs text-yellow-500' key={87}/>
                      <FaStarHalfAlt className='text-xs text-yellow-500' key={782}/>
                    </div> */}
                    <div className="flex items-center gap-1">
                        {
                            new Array(parseInt(state?.rating)).fill(1).map((el, i) => (<FaStar key={i} className="text-yellow-500 text-xs sm:text-sm" />))
                        }
                        {
                            (5-parseInt(state?.rating)) > 0 ? new Array(5-parseInt(state?.rating)).fill(1).map((el, i) => (<FaStar key={i} className="text-slate-100 text-xs sm:text-sm" />)) : ""
                        }
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl text-thin text-slate-800 capitalize">{state?.title}</h3>
                  <div className="flex flex-col gap-4">
                    <p className="text-slate-500 leading-loose text-sm">This is the description of {state?.title} that would be long and detailed that would be coming in soon enough as we are still in development mode</p>
                    {/* <p className="text-slate-500 leading-loose text-sm">Mollitia, voluptates fugiat aperiam deleniti, ex ut corrupti? Quae deleniti reprehenderit iusto sit et nisi cumque delectus quaerat laborum repellendus error tempora, quisquam voluptas? Laboriosam nulla ipsum officia quos? Veritatis eius cupiditate perferendis? Dolorem incidunt obcaecati illum minus neque. Provident odit repudiandae magni sunt, sapiente culpa quod laborum et error porro, aspernatur perspiciatis voluptates officia cum at illum fugit nostrum. Quis neque nisi magni illo. Dolore voluptas tempora minus numquam repudiandae?</p> */}
                  </div>
                </div>
              </aside>
              <aside className="col-span-1 md:col-span-2 flex flex-col gap-3 md:px-4">
                <div className="flex flex-col gap-2">
                  <div className="flex relative gap-2 py-2 items-center">
                    <h3 className="text-xl md:text-2xl text-gray-600 blur-sm">&#8358;{(state?.price).toLocaleString()}</h3>
                    <label htmlFor='payment' className="cursor-pointer text-xs px-4 bg-indigo-100 w-max text-indigo-400 py-1 rounded-[2rem] my-1">See Payment Options</label>
                    <input type="checkbox" className="hidden peer" id="payment" />
                    <label htmlFor='payment' className="scale-0 peer-checked:scale-100 duration-100 fixed z-[1000] bg-gray-800/50 w-screen h-screen p-10 grid place-items-center top-0 left-0">
                      <div className="flex flex-col bg-gray-100 rounded-md p-4 min-w-[300px] max-w-[25rem]">
                          <div className="py-3 mb-2 flex flex-col gap-1 bg-gray-500 px-3">
                            <h3 className="text-xl md:text-2xl text-thin text-white text-center capitalize">Available Payment Plans</h3>
                            <p className="text-white text-center leading-loose text-sm">We offer three payment options for {state?.title} and they are as follows:</p>
                          </div>
                          <p className="text-slate-800 py-1 leading-loose text-sm flex items-center gap-2 border-0 border-b-[1px] border-b-slate-300"><FaCheck className='bg-green-400 text-white h-[15px] w-[15px] flex-shrink-0 text-xs p-1 grid place-items-center rounded-full' /> Full Payment - &#8358;{(state?.price).toLocaleString()}</p>
                          <p className="text-slate-800 py-1 leading-loose text-sm flex items-center gap-2 border-0 border-b-[1px] border-b-slate-300"><FaCheck className='bg-green-400 text-white h-[15px] w-[15px] flex-shrink-0 text-xs p-1 grid place-items-center rounded-full' /> Two-Time Payment - &#8358;{(((state?.price)/2).toLocaleString())}</p>
                          <p className="text-slate-800 py-1 leading-loose text-sm flex items-center gap-2 border-0 border-b-[1px] border-b-slate-300"><FaCheck className='bg-green-400 text-white h-[15px] w-[15px] flex-shrink-0 text-xs p-1 grid place-items-center rounded-full' /> Three-Time Payment - &#8358;{((Math.round(state?.price)/1.5).toLocaleString())} (Inital Deposit)</p>
                          <p className="p-2 text-slate-800 text-xs text-center">You can request a call back or make more enquiry about this course by clicking the 'Make Enquiry' button</p>
                      </div>
                    </label>
                  </div>
                    {success && <div className="text-sm text-white py-2 my-2 px-4 bg-green-500 text-center rounded-md">{success}</div>}
                    {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                  <div className="flex gap-2">
                    <form ref={formRef} onSubmit={handlePayment} action="" className="flex-1 flex">
                      <button type="submit" disabled={loading} className="flex-1 w-[3rem] bg-indigo-500 p-2 rounded-lg flex items-center justify-center gap-1">
                          <IoMdCart className='text-md md:text-base text-white'/>
                          <p className="text-white text-sm md:text-md">{loading ? 'Please wait...' : 'Pay for Course'}</p>
                      </button>
                    </form>
                    <label htmlFor='inquiry' type="button" disabled={loading} className="cursor-pointer flex-1 w-[3rem] border-[1px] border-indigo-500 p-2 rounded-lg flex items-center justify-center gap-2">
                        <IoMdHeadset className='text-sm md:text-md text-gray-500'/>
                        <p className="text-gray-500 text-sm md:text-md">Make Enquiry</p>
                    </label>
                    <input type="checkbox" className="hidden peer" id="inquiry" />
                    <label htmlFor='inquiry' className="scale-0 peer-checked:scale-100 duration-100 z-[1000] fixed bg-gray-800/50 w-screen h-screen p-10 grid place-items-center top-0 left-0">
                      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col bg-gray-100 rounded-md p-4 min-w-[300px] max-w-[35rem]">
                          <div className="py-3 mb-2 flex flex-col gap-1 bg-gray-400 px-3">
                            <h3 className="text-xl md:text-2xl text-thin text-white text-center capitalize">Make Enquiry on {state?.title}</h3>
                            <p className="text-white text-center leading-loose text-sm">Fill out your details in the form below and we would get back to you as sooon as possible.</p>
                          </div>
                          <div className="flex flex-col gap-2 p-5">
                            <input type="text" onChange={handleFormChange} className={`outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4`} required name="fullname" placeholder="Full Name e.g. John Doe" />
                            <input type="email" onChange={handleFormChange} required className={`outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4`} name="email" placeholder="someone@gmail.com" />
                            <input type="text" onChange={handleFormChange} className={`outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4`} name="phone" placeholder="+2349012345678" />
                            <textarea type="text" onChange={handleFormChange} className={`outline-none placeholder-opacity-70 h-[150px] text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4`} name="fullname" placeholder="Please, write your message here" ></textarea>
                            <button type="submit" className={`outline-none bg-indigo-500 text-white text-sm sm:text-md  rounded-[.25rem] py-2 px-4`} >Send Message</button>
                          </div>
                      </form>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg md:text-xl pt-2 text-thin text-slate-800">Prerequisite</p>
                    <div className="flex flex-col bg-gray-100 rounded-md p-4">
                      {
                        state?.requisite?.map((req,i) => (<p key={i} className="text-slate-800 py-1 leading-loose text-sm flex items-center gap-2 border-0 border-b-[1px] border-b-slate-300"><FaCheck className='bg-green-400 text-white h-[15px] w-[15px] flex-shrink-0 text-xs p-1 grid place-items-center rounded-full' /> {req}</p>))
                      }
                    </div>
                    <p className="text-lg md:text-xl pt-2 text-thin text-slate-800">Course Table of Contents</p>
                    <div className="flex flex-col bg-gray-100 rounded-md p-4">
                      {
                        state?.contents?.map((content,i) => (<p key={i} className="text-slate-800 p-1 leading-loose text-sm flex justify-between border-0 border-b-[1px] border-b-slate-300">{content} <span className="ml-auto">+</span></p>))
                      }
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </div> 
      </section>
      <section className="bg-gray-50 px-4">
        <div className="container relative mx-auto max-w-[980px] py-10 flex flex-col overflow-hidden">
          <h3 className="py-2 px-3 text-indigo-500 border-0 border-l-[3px] border-l-indigo-500 font-bold text-lg md:text-xl">Related Courses</h3>
          <div className="col-span-1 md:col-span-3 pt-6 pb-4 grid course__wrap gap-3" style={{gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"}}>
            {
              courses.filter(course => course.category === state?.category && course.id !== state?.id).slice(0,4).reverse().map(course => <CourseCard key={course.id} {...course} state={course}/>)
            }
        </div>
        </div>
      </section>
    </main>
  )
}

export default CourseSingle