import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link } from 'react-router-dom'

import {
  exam_announcement,
  exam_courses,
  exam_groupread,
  exam_slider,
  exam_study,
  exam_template,
} from '../assets/images'

function PartnerSlide() {
  return (
    <section className="partners py-5 bg-white">
      <div className="container mx-auto max-w-[960px] flex flex-col gap-3 items-center justify-center py-20 px-4">
        <div className="flex-1 flex flex-col gap-1 p-5 items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-500 capitalize">Our Strategic Partners</h3>
              {/* <p className="text-slate-400 text-md md:text-base py-2 pr-2">Be the first to learn about our latest updates: discount, new courses and trends </p> */}
        </div>
        <div className="overflow-hidden w-full px-4 py-10">
            <Carousel 
              autoPlay={true}
              className='w-full h-full flex flex-col justify-start items-stretch'
              infiniteLoop={true}
              showArrows={false}
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
              centerMode={true}
              centerSlidePercentage={40}
              preventMovementUntilSwipeScrollTolerance={true}
              emulateTouch={true}
              stopOnHover={true}
            >
            <Link target='_blank' to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_announcement} alt="exam_announcement" className="h-full w-full object-contain" />
            </Link>
            <Link target='_blank' to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_groupread} alt="exam_groupread" className="h-full w-full object-contain" />
            </Link>
            <Link target='_blank' to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_slider} alt="exam_slider" className="h-full w-full object-contain" />
            </Link>
            <Link target='_blank' to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_courses} alt="exam_courses" className="h-full w-full object-contain" />
            </Link>
            <Link target='_blank' to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_template} alt="exam_template" className="h-full w-full object-contain" />
            </Link>
            <Link target='_blank' to="/partners" className='h-[50px] w-[120px] overflow-hidden shad relative'>
              <img src={exam_study} alt="exam_study" className="h-full w-full object-contain" />
            </Link>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default PartnerSlide