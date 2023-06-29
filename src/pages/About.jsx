import React, {useEffect} from 'react'
import {
  exam_groupread,
  exam_announcement,
} from '../assets/images'
import { differences } from '../data'
import DiffCard from '../components/DiffCard'

function About() {
  useEffect(() => {
    document.title = "CTTI e-learning Centre :: About";
},[]);
  return (
    <main className="bg-slate-50 py-20">
      <div className="container pt-10 mx-auto max-w-[960px] flex flex-col">
        <div className="flex flex-col gap-3 p-5 items-center md:items-start">
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize">About Us at <span className="text-cyan-400">CTTI</span></h3>
              <p className="text-slate-400 text-md md:text-base leading-loose text-justify py-2 pr-2">At CTTI, we are dedicated to empowering individuals and organisations with the knowledge and skills needed to excel in the rapidly evolving world of Information Technology. As a leading IT training organisation, we offer a comprehensive range of cutting-edge programs designed to meet the diverse needs of our students and clients.</p>
        </div>
        <div className="flex flex-col gap-2">
          <aside className={`py-2 flex flex-col gap-3 md:gap-5 md:items-center md:flex-row`}>
              <div className="relative  px-4 md:p-2 h-[200px] md:h-full w-[200px] md:flex-1 flex-shrink-0 bg-white rounded-md">
                  <img src={exam_groupread} alt="Our Mission" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col gap-2 px-4 py-2 md:p-4 flex-1 md:flex-2">
                  <h4 className={`text-lg md:text-2xl text-transparent font-bold text-cyan-500 uppercase`}>Our Mission</h4>
                  <p className="text-slate-400 text-base md:text-lg leading-loose text-justify py-2 pr-2">CTTI's mission is to provide top-quality IT training that equips individuals with the expertise to thrive in today's digital landscape. We strive to bridge the gap between theoretical knowledge and practical application, ensuring our students gain the confidence and competence necessary to succeed in their chosen IT career paths.</p>
              </div>
          </aside>
          <aside className={`py-2 flex flex-col gap-3 md:gap-5 md:items-center md:flex-row-reverse`}>
              <div className="relative  px-4 md:p-2 h-[200px] md:h-full w-[200px] md:flex-1 flex-shrink-0 bg-white rounded-md">
                  <img src={exam_announcement} alt="Our Approach" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col gap-2 px-4 py-2 md:p-4 flex-1 md:flex-2">
                  <h4 className={`text-lg md:text-2xl text-transparent font-bold text-indigo-600 uppercase`}>Our Approach</h4>
                  <p className="text-slate-400 text-base md:text-lg leading-loose text-justify py-2 pr-2">We believe a holistic approach to IT training is crucial for long-term success. We offer various training options to suit different learning preferences and schedules. Whether you prefer traditional classroom instruction, virtual training from the comfort of your home, or a blended learning experience that combines the best of both worlds, we have a solution for you.</p>
              </div>
          </aside>
        </div>
        <section className="difference py-20 sm:px-4 bg-[#f8f8fa90]">
          <div className="container justify-center items-stretch grid diff sm:grid-cols-2 mx-auto gap-x-2 gap-y-4 sm:gap-y-8 sm:gap-x-6 max-w-[960px] py-10 px-2 sm:px-4">
            <aside className="col-span-2 flex flex-col justify-center gap-2 md:max-w-[70%] py-4">
              <h3 className="text-2xl md:text-4xl font-bold text-sky-400">Why are we <span className="text-sky-600">different</span> from other?</h3>
              <p className="leading-loose text-justify text-slate-500 text-sm py-2 pr-2">At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys. Whether you are a student looking to kick-start your IT career or an organisation seeking to upskill your workforce, we invite you to join us and embark on a transformative learning experience. Discover the power of knowledge with CTTI - your trusted IT training and education partner.</p>
            </aside>
            {
              differences.map((difference) => <DiffCard key={difference.id} full={true} {...difference} />)
            }
          </div>
          <div className="container mx-auto max-w-[960px]">
            <div className="flex flex-col md:flex-row gap-3 p-5 ">
              <p className="text-slate-400 text-md md:text-base leading-loose text-justify py-2 pr-2">Through our strategic partnerships with Microsoft, Cisco, Oracle, and PMI, CTTI can provide you with industry-recognized training that meets the highest standards of quality and excellence. These partnerships enable us to stay at the forefront of technological advancements and deliver training that is directly aligned with the needs of the IT industry.</p>
              <p className="text-slate-400 text-md md:text-base leading-loose text-justify py-2 pr-2">By choosing CTTI, you gain access to our experienced instructors and comprehensive curriculum and the expertise and resources of our esteemed partners. We are committed to empowering you with the skills and certifications to propel your IT career forward.</p>
            </div>
            <p className="text-slate-400 text-md md:text-base leading-loose text-justify py-2 px-5">Partner with CTTI and embark on a learning journey that will unlock endless opportunities in the world of technology.</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About