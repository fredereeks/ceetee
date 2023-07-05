import React, { useEffect } from 'react'
import { blog_slider3 } from '../assets/images'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
// import { randomColor } from '../utils'

function TeamTraining() {
  useEffect(() => {
    document.title = "CTTI e-learning Centre: Team Training";
  },[])

  return (
    <main className="flex flex-col bg-white">
        <section className="bg-blue-950 py-20 px-4">
          <div className="container relative mx-auto max-w-[980px] flex flex-col">
            <div className="flex flex-wrap gap-2 items-center pt-5 pb-10 text-slate-50">
              <Link to="/" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white  ">Home</Link>
              /
              <Link to="/solutions" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white ">Solutions</Link>
              /
              <div className="font-normal px-2 text-md md:text-lg text-slate-50">Team Training</div>
            </div>
          </div>
          <aside className="flex flex-col gap-2 justify-center container max-w-[960px] py-5 px-2 mx-auto">
            <h2 className="text-2xl md:text-4xl text-white font-bold">Customized Training Solutions</h2>
            <p className="text-white max-w-[80%] sm:max-w-[70%] md:max-w-[80%] leading-[1.8] text-md md:text-base py-2 text-justify">At CTTI, we understand that every organisation has unique training needs. We offer standard and customised training programs for corporate and government clients. Whether you want to enhance your team's skills or train individual employees, we have tailored solutions to meet your requirements. With our comprehensive training offerings and industry expertise, we can help your organisation achieve its goals and retain top talent.</p>
          </aside>
        </section>
        <section className="py-10 bg-white">
          <aside className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center container max-w-[960px] p-5 mx-auto">
            <div className="relative h-150 w-200 border-indigo-700 border-4 rounded-md shadow-lg -skew-x-[5deg] overflow-hidden">
              <img src={blog_slider3} alt="" className="absolute w-[150%] h-[150%] top-0 left-0 object-cover scale-120 skew-x-[5deg]" />
            </div>
            <div className="col-span-2 py-20 px-5 flex flex-col gap-2">
              <h2 className="text-2xl md:text-4xl text-indigo-700 font-bold">Individual and Team Training</h2>
              <p className="text-gray-700 leading-[1.8] text-md md:text-base py-2 text-justify">Whether you want to train an individual or a team, our experienced trainers can deliver personalised instruction to individuals, addressing their specific learning objectives. Additionally, we can conduct comprehensive team training sessions, fostering collaboration and knowledge-sharing among your employees.</p>
            </div>
          </aside>
        </section>
        <section className="bg-gray-50 py-10">
          <aside className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center container max-w-[960px] p-5 mx-auto">
              
          </aside>
        </section>
    </main>
  )
}

export default TeamTraining