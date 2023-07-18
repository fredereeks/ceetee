import React from 'react'
// import {Carousel} from 'react-responsive-carousel'
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
  const index = React.useRef(0);
  const slide = React.useRef(null);

  React.useEffect(() => {
    const slideWidth = slide.current.firstElementChild.getBoundingClientRect().width;
    const total = slide.current.children.length;
  // slide.current.style.width = `${100 * total}px`
    const timer = setInterval(() => {
        let counter = +index.current % (total/2);
        slide.current.style.transform = `translateX(-${counter * slideWidth + 16}px)`
        index.current = +index.current + 1; 
    },3000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <section className="partners py-5 bg-white">
      <div className="container mx-auto max-w-[960px] flex flex-col gap-3 items-center justify-center py-5 px-4">
        <div className="flex-1 flex flex-col gap-1 p-5 items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-500 capitalize">Our Strategic Partners</h3>
              {/* <p className="text-slate-400 text-md md:text-base py-2 pr-2">Be the first to learn about our latest updates: discount, new courses and trends </p> */}
        </div>
        <div className="flex w-full h-150 overflow-hidden">
          <div ref={slide} className="overflow-hidden w-full flex gap-4 justify-start px-4 py-10">
              {/* <Carousel 
                autoPlay={true}
                className=''
                infiniteLoop={true}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={10}
                preventMovementUntilSwipeScrollTolerance={true}
                emulateTouch={true}
              > */}
              <Link target='_blank' to="/partners" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 bg-white overflow-hidden rounded-lg shad relative grid place-items-center'>
                <img src={exam_announcement} alt="exam_announcement" className="h-full w-full object-cover absolute top-0 left-0" />
              </Link>
              <Link target='_blank' to="/partners" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 bg-white overflow-hidden rounded-lg shad relative grid place-items-center'>
                <img src={exam_groupread} alt="exam_groupread" className="h-full w-full object-cover absolute top-0 left-0" />
              </Link>
              <Link target='_blank' to="/partners" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 bg-white overflow-hidden rounded-lg shad relative grid place-items-center'>
                <img src={exam_slider} alt="exam_slider" className="h-full w-full object-cover absolute top-0-0" />
              </Link>
              <Link target='_blank' to="/partners" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 bg-white overflow-hidden rounded-lg shad relative grid place-items-center'>
                <img src={exam_courses} alt="exam_courses" className="h-full w-full object-cover absolute top-0-0" />
              </Link>
              <Link target='_blank' to="/partners" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 bg-white overflow-hidden rounded-lg shad relative grid place-items-center'>
                <img src={exam_template} alt="exam_template" className="h-full w-full object-cover top-absolute 0 left-0" />
              </Link>
              <Link target='_blank' to="/partners" className='h-[70px] w-[100px] p-2 md:p-4 md:h-[150px] md:w-[150px] flex-1 bg-white overflow-hidden rounded-lg shad relative grid place-items-center'>
                <img src={exam_study} alt="exam_study" className="h-full w-full object-cover absolute top-absolute 0-0" />
              </Link>
            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSlide