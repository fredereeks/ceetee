import React, { useEffect } from 'react'
import { masonry8, masonry9 } from '../assets/images'
import { Link, useLocation } from 'react-router-dom'
import { FaCheck, FaChevronRight, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { randomColor } from '../utils'
import { randomNumber } from '../utils/randomNumber'
import { IoMdCart, IoMdGift } from 'react-icons/io'
import { BreadCrumb } from '../components'
import { skills } from '../data'
import SkillCard from '../components/SkillCard'

function SkillAssessment() {
  const location = useLocation();

  useEffect(() => {
    document.title = `CTTI e-learning Centre :: Skill Assessment`;
},[])
  return (
    <main  className='flex flex-col pt-5 justify-center'>
      <BreadCrumb page={"Skill Assessment"} />
      <section className="bg-white">
        <div className="container relative mx-auto max-w-[980px]  px-4 flex flex-col">
            {/* <aside className=" flex flex-col gap-4 bg-blue-800">
              <div className="rounded-lg relative h-auto md:h-[400px] w-full overflow-hidden before:z-10 before:w-full before:h-[90%] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-gray-950 before:to-transparent grid grid-cols-1 md:grid-cols-2 items-center">
                <img src={masonry8} alt={"CTTI Skill Assessment"} className="w-full h-full object-cover relative z-20" />
                <div className="flex flex-col gap-3 px-4 justify-center gap-1 relative z-20">
                  <h3 className="text-2xl text-3xl text-thin text-white capitalize">Accurate Skill Assessment</h3>
                  <p className="text-white leading-loose text-sm">At CTTI, we understand that accurately assessing the skills and capabilities of your workforce is crucial for achieving organisational success. That's why we offer comprehensive skills assessment services tailored to the specific needs of our corporate clients. Our expert assessments provide valuable insights into your employees' skill levels, identify areas for improvement, and guide your organisation's training and development initiatives. Discover the power of skills assessment with CTTI.</p>
                </div>
              </div>
            </aside> */}
            <div className="flex flex-col gap-3 p-5 items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 capitalize">Our <span className="text-indigo-400">Skill</span> Assessment</h3>
                  <p className="text-slate-400 text-md md:text-base leading-loose text-justify py-2 pr-2">At CTTI, we are dedicated to supporting your organisation's growth and success through comprehensive skills assessment services.</p>
            </div>
            <div className="flex flex-col gap-2">
              {
                skills.map((skill,i) => {
                  const direction = i % 2 === 0 ? true : false;
                  return (<SkillCard key={skill.id} direction={direction} {...skill} />)
                })
              }
            </div>
            <p className="text-slate-600 text-md md:text-base leading-loose text-justify py-2 px-5">Contact us today to discuss your organisation's skills assessment needs. Let us help you uncover the true potential of your workforce through accurate and insightful skills assessments. <br/>At CTTI, we are dedicated to supporting your organisation's growth and success through comprehensive skills assessment services.</p>
        </div> 
      </section>
    </main>
  )
}

export default SkillAssessment