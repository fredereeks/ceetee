import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BreadCrumb } from '../components'
import { skills } from '../data'
import SkillCard from '../components/SkillCard'

function SkillAssessment() {

  useEffect(() => {
    document.title = `CTTI e-learning Centre :: Skill Assessment`;
},[])
  return (
    <main  className='flex flex-col justify-center'>
      <BreadCrumb page={"Skill Assessment"} />
      <section className="bg-white">
        <div className="container relative mx-auto max-w-[980px] pt-20 px-4 flex flex-col">
            <div className="flex flex-col gap-3 p-5 items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 capitalize">Our <span className="text-indigo-400">Skill</span> Assessment</h3>
                  <p className="text-slate-400 text-md md:text-base leading-loose text-justify py-2 pr-2">At CTTI, we are dedicated to supporting your organisation's growth and success through comprehensive skills assessment services.</p>
            </div>
            <div className="flex flex-col gap-2 py-10">
              {
                skills.map((skill,i) => {
                  const direction = i % 2 === 0 ? true : false;
                  return (<SkillCard key={skill.id} direction={direction} {...skill} />)
                })
              }
            </div>
            <p className="text-slate-600 text-md md:text-base leading-loose text-justify pb-20 px-5"><Link to="/contact" className="text-indigo-500 font-bold underline">Contact us today</Link> to discuss your organisation's skills assessment needs. Let us help you uncover the true potential of your workforce through accurate and insightful skills assessments. <br/><br/>At CTTI, we are dedicated to supporting your organisation's growth and success through comprehensive skills assessment services.</p>
        </div> 
      </section>
    </main>
  )
}

export default SkillAssessment