import React from 'react'
import {
  exam_announcement,
  exam_courses,
  exam_groupread,
  exam_slider,
  exam_study,
  exam_template,
} from '../assets/images'
import { Link } from 'react-router-dom'

function PartnerSlide() {
  return (
    <section className="partners py-20 bg-white">
      <div className="container mx-auto max-w-[960px] flex flex-col gap-3 items-center justify-center py-20 px-4">
        <div className="flex-1 flex flex-col gap-1 p-5 items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize">Our <span className="text-cyan-400">Strategic</span> Partners</h3>
              {/* <p className="text-slate-400 text-md md:text-base py-2 pr-2">Be the first to learn about our latest updates: discount, new courses and trends </p> */}
        </div>
        <div className="overflow-hidden w-full px-4 py-10">
          <div className="flex gap-3 justify-center">
            <Link to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_announcement} alt="exam_announcement" className="h-full w-full object-contain" />
            </Link>
            <Link to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_groupread} alt="exam_groupread" className="h-full w-full object-contain" />
            </Link>
            <Link to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_slider} alt="exam_slider" className="h-full w-full object-contain" />
            </Link>
            <Link to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_courses} alt="exam_courses" className="h-full w-full object-contain" />
            </Link>
            <Link to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_template} alt="exam_template" className="h-full w-full object-contain" />
            </Link>
            <Link to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_study} alt="exam_study" className="h-full w-full object-contain" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSlide