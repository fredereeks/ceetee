import React from 'react'
import { BreadCrumb } from '../components'
import { ctti_partners } from '../assets/images'
import { Link } from 'react-router-dom'

export default function Solutions() {
  return (
    <main className="bg-gray-50">
        <BreadCrumb key={656} page={"Solutions"}/>
        {/* <section className="py-20 px-4 bg-cyan-500 relative before:rounded-full before:border-[20px] before:border-gray-100/50 before:w-[100px] before:h-[100px] before:absolute before:z-10 before:left-10 before:top-10 before:bg-cyan-500 after:rounded-full after:border-[20px] after:border-gray-100/50 after:w-[100px] after:h-[100px] after:absolute after:z-10 after:right-10 after:-bottom-10 after:bg-cyan-500"> */}
        <section className="py-20 px-4 bg-cyan-500 overflow-hidden relative before:rounded-full before:border-[20px] before:border-gray-100/50 before:w-[100px] before:h-[100px] before:absolute before:z-10 before:left-10 before:top-10 before:bg-cyan-500 after:rounded-full after:border-[20px] after:border-gray-100/50 after:w-[300px] after:h-[300px] after:md:w-[700px] after:md:h-[700px] after:absolute after:z-10 after:right-10 after:-bottom-10 after:bg-white after:opacity-40">
            <div className="container relative z-50 mx-auto max-w-960 py-20 grid grid-cols-2">
              <img src={ctti_partners} alt="CTTI Solutions" className="w-[500px] h-[500px] rounded-full object-cover" />
              <div className="flex flex-col gap-5 items-end">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white">Solutions</h2>
                <ul className="flex flex-col items-end gap-3">
                  <li className="relative before:rounded-full py-2 before:border-[5px] before:border-gray-100/50 before:w-[50px] before:h-[50px] before:absolute before:z-10 before:-left-20 before:top-0 before:bg-indigo-500">
                    <Link to="/solutions/coaching" className="text-xl md:text-3xl font-bold text-white">Coaching</Link>
                  </li>
                  <li className="relative before:rounded-full py-2 before:border-[5px] before:border-gray-100/50 before:w-[50px] before:h-[50px] before:absolute before:z-10 before:-left-20 before:top-0 before:bg-orange-500">
                    <Link to="/solutions/skills-assessment" className="text-xl md:text-3xl font-bold text-white">Skill Assessment</Link>
                  </li>
                  <li className="relative before:rounded-full py-2 before:border-[5px] before:border-gray-100/50 before:w-[50px] before:h-[50px] before:absolute before:z-10 before:-left-20 before:top-0 before:bg-lime-500">
                    <Link to="/solutions/team-training" className="text-xl md:text-3xl font-bold text-white">Team Training</Link>
                  </li>
                  <li className="relative before:rounded-full py-2 before:border-[5px] before:border-gray-100/50 before:w-[50px] before:h-[50px] before:absolute before:z-10 before:-left-20 before:top-0 before:bg-pink-500">
                    <Link to="/solutions/virtual-corporate-training" className="text-xl md:text-3xl font-bold text-white">Virtual Corporate Training</Link>
                  </li>
                  <li className="relative before:rounded-full py-2 before:border-[5px] before:border-gray-100/50 before:w-[50px] before:h-[50px] before:absolute before:z-10 before:-left-20 before:top-0 before:bg-yellow-500">
                    <Link to="/solutions/customized-training" className="text-xl md:text-3xl font-bold text-white">Customized Training</Link>
                  </li>
                </ul>
              </div>
            </div>
        </section>
    </main>
  )
}
