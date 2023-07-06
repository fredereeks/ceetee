import React, { useEffect } from 'react'
import { man_image } from '../assets/images'
import { Link, useLocation } from 'react-router-dom'
import { FaCheck, FaChevronRight, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { randomColor } from '../utils'
import { randomNumber } from '../utils/randomNumber'
import { IoMdCart, IoMdGift } from 'react-icons/io'

function CourseSingle() {
  const location = useLocation();
  const {state} = location;

  useEffect(() => {
    document.title = `CTTI e-learning Centre: ${state?.title}`;
},[location.pathname, state?.title])
  return (
    <main  className='flex flex-col bg-gray-100 pt-8 justify-center'>
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
      <div className="bg-white">
        <div className="container relative mx-auto max-w-[980px] py-10 px-4 flex flex-col">
          <section className="bg-white">
            <div className="container relative mx-auto max-w-[960px] grid grid-cols-1 md:grid-cols-5 gap-3">
              <aside className="col-span-1 md:col-span-3 flex flex-col gap-4">
                <div className="rounded-lg relative h-[300px] md:h-[400px] w-full overflow-hidden before:z-10 before:w-full before:h-[30%] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-gray-950 before:to-transparent">
                  <img src={state?.image} alt={state?.title} className="absolute w-full h-full left-0 top-0 object-cover" />
                  <div className="flex flex-col gap-1 bottom-5 right-4 absolute z-20">
                    <p className="text-white text-xs md:text-sm">{(state?.rating * 1000).toLocaleString()} reviews</p>
                    <div className="flex gap-1 items-center">
                      <FaStar className='text-xs text-yellow-500' key={12}/>
                      <FaStar className='text-xs text-yellow-500' key={23}/>
                      <FaStar className='text-xs text-yellow-500' key={56}/>
                      <FaStar className='text-xs text-yellow-500' key={87}/>
                      <FaStarHalfAlt className='text-xs text-yellow-500' key={782}/>
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
                  <h3 className="text-xl md:text-2xl text-gray-600">&#8358;{(state?.price).toLocaleString()}</h3>
                  <div className="flex gap-2">
                    <Link className="flex-1 w-[3rem] bg-indigo-500 p-3 rounded-lg flex items-center justify-center gap-2">
                        <IoMdCart className='text-sm md:text-md text-white'/>
                        <p className="text-white text-sm md:text-md">Enroll for Course</p>
                    </Link>
                    <Link className="flex-1 w-[3rem] border-[1px] border-indigo-500 p-3 rounded-lg flex items-center justify-center gap-2">
                        <IoMdGift className='text-sm md:text-md text-gray-500'/>
                        <p className="text-gray-500 text-sm md:text-md">Buy as Gift</p>
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg md:text-xl pt-2 text-thin text-slate-800">Prerequisite</p>
                    <div className="flex flex-col bg-gray-100 rounded-md p-4">
                      <p className="text-slate-800 py-1 leading-loose text-sm flex items-center gap-2 border-0 border-b-[1px] border-b-slate-300"><FaCheck className='bg-green-400 text-white h-[15px] w-[15px] text-xs p-1 grid place-items-center rounded-full' /> Basic Computer Appreciation</p>
                      <p className="text-slate-800 py-1 leading-loose text-sm flex items-center gap-2 border-0 border-b-[1px] border-b-slate-300"><FaCheck className='bg-green-400 text-white h-[15px] w-[15px] text-xs p-1 grid place-items-center rounded-full' /> Quality Laptop</p>
                      <p className="text-slate-800 py-1 leading-loose text-sm flex items-center gap-2"><FaCheck className='bg-green-400 text-white h-[15px] w-[15px] text-xs p-1 grid place-items-center rounded-full' /> Optimum Dedication and Concentration</p>
                    </div>
                    <p className="text-lg md:text-xl pt-2 text-thin text-slate-800">Course Table of Contents</p>
                    <div className="flex flex-col bg-gray-100 rounded-md p-4">
                      <p className="text-slate-800 p-1 leading-loose text-sm flex justify-between border-0 border-b-[1px] border-b-slate-300">Introduction <span className="ml-auto">+</span></p>
                      <p className="text-slate-800 p-1 leading-loose text-sm flex justify-between border-0 border-b-[1px] border-b-slate-300">Getting Started <span className="ml-auto">x</span></p>
                      <p className="text-slate-800 p-1 leading-loose text-sm flex justify-between">Packages to Learn <span className="ml-auto">+</span></p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div> 
      </div>
    </main>
  )
}

export default CourseSingle