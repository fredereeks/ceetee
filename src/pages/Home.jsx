import React, { lazy, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDropright } from 'react-icons/io'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { categories, courses, differences, slides } from '../data'
// import Skeleton from '../components/Skeleton'
// import Counter from '../components/Counter'
const DiffCard = lazy(() => import ('../components/DiffCard'))
const CategoryCard = lazy(() => import ('../components/CategoryCard'))
const Counter = lazy(() => import ('../components/Counter'))
const CourseCard = lazy(() => import ('../components/CourseCard'))
const PartnerSlide = lazy(() => import ('../components/PartnerSlide'))

function Home() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //     const timeout = window.setTimeout(() => {
  //       setLoading(false)
  //     },7000)
  //     return () => {
  //       clearTimeout(timeout)
  //     }
  // },[])
  
  useEffect(() => {
    document.title = "CTTI e-learning Centre :: Home";
},[]);

  return (
    <>
      <section className="bg-gradient pt-[3.48rem] pl-5">
          <div className="container mx-auto z-[500] max-w-[960px] max-h-[70vh] h-[70vh] relative overflow-hidden">
            <Carousel 
              autoPlay={true}
              className='w-full h-full flex flex-col justify-start items-stretch'
              infiniteLoop={true}
              showArrows={false}
              showIndicators={true}
              showThumbs={false}
              showStatus={false}
              // preventMovementUntilSwipeScrollTolerance={true}
              // emulateTouch={true}
              stopOnHover={false}
              interval={2000}
              animationHandler={'fade'}
              // axis='vertical'
            >
            {
              slides.map(slide => (
                <aside key={slide.id} className="container max-w-[960px] relative z-50 mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl md:text-4xl text-left text-white bg-indigo-600 bg-clip-text font-bold capitalize py-2">{slide.title}</h2>
                    <p className="text-gray-50 text-left text-sm md:text-lg font-medium leading-loose pr-2 pb-2">{slide.text}</p>
                    <Link to={slide.link} className="text-sm text-indigo-600 font-medium w-max rounded-[2rem] mt-2 py-2 px-4 sm:px-6 bg-white shadow-sky-200">{slide.tag}</Link>
                  </div>
                  <div className="hidden md:flex flex-col h-[70vh] py-24 md:py-4 relative items-center justify-center">
                    <img src={slide.image} alt="Hero Student" className="h-120 w-120 rounded-t-r-full rounded-t-r-xl md:absolute md:h-full md:w-full object-cover" />
                  </div>
                </aside>
              ))
            }
            </Carousel>
          </div>
      </section>
      <section className="counter bg-slate-200">
        <div className="container mx-auto justify-center max-w-[960px] grid grid-cols-2 md:grid-cols-4 py-10 px-4">
          {
            [
              [111, <Counter key={111} speed="fast" end={2140} tag={'K+'} />, "Online Learners", "border-2 border-r-indigo-50/30"],
              [112, <Counter key={112} speed="slow" end={50} tag={'+'} />, "Expert Instructors", "md:border-2 md:border-r-indigo-50/30"],
              [113, <Counter key={113} speed="normal" end={2000} tag={'K+'} />, "Validated Students", "border-2 border-r-indigo-50/30"],
              [114, <Counter key={114} speed="slow" end={67} tag={'+'} />, "Trendy Courses", "border-0"],
            ].map(([id, stat, text, border]) => (
              <aside key={id} className={`flex flex-col p-3 items-center justify-center gap-3 text-site  border-transparent ${border}`}>
                {/* <h3 className="text-inherit text-xl md:text-2xl font-bold"></h3> */}
                {stat}
                <p className="text-inherit text-xs md:text-sm text-center">{text}</p>
              </aside>
            ))
          }
        </div>
      </section>
      {/* <CarouselSlide /> */}
      <section className="difference py-10 sm:px-4 bg-[#f8f8fa90]">
        <div className="container justify-center items-stretch grid diff sm:grid-cols-3 mx-auto py-10 gap-x-2 gap-y-4 sm:gap-y-8 sm:gap-x-6 max-w-[960px] px-2 sm:px-4">
          <aside className="col-span-2 flex flex-col justify-center gap-2 px-2 py-4">
            <h3 className="text-2xl md:text-4xl font-bold text-indigo-600">Why you should choose us</h3>
            <p className="leading-[1.8] overflow-hidden text-ellipsis line-clamp-5 text-justify normal-text py-2 pr-2">At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys. Whether you are a student looking to kick-start your IT career or an organisation seeking to upskill your workforce, we invite you to join us and embark on a transformative learning experience. Discover the power of knowledge with CTTI - your trusted IT training and education partner.</p>
            <Link to="/about" className="text-slate-50 bg-gradient-to-br from-sky-500 to-sky-600 rounded-[2rem] mt-1 text-sm px-5 md:px-7 py-2 w-max shadow-md shadow-indigo-200">Read More</Link>
          </aside>
          {
            differences.map((difference) => <DiffCard key={difference.id} full={false} {...difference} />)
          }
        </div>
      </section>
      <section className="courses py-10 px-3 sm:px-4 bg-gray-100">
        <div className="container max-w-[960px] flex flex-col gap-3 mx-auto py-10">
          <div className="flex flex-wrap gap-2 items-center md:justify-between">
            <div className="flex-2 flex flex-col gap-1 pr-5">
              <h3 className="text-2xl md:text-4xl font-bold text-indigo-600 capitalize">Popular Courses for you</h3>
              <p className="normal-text py-2 pr-2">Get the best course, with the best price, with a world-class tutor</p>
            </div>
            <div className="flex-1 flex items-end md:justify-end">
              <Link to="/courses" className="flex items-center gap-2 bg-indigo-600 text-white rounded-md group text-sm px-5 py-2">See All <IoIosArrowDropright className='text-inherit group-hover:translate-x-1 transition-all duration-300' /></Link>
            </div>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
            {
              courses.filter(course => course.featured === true).map(course => (<CourseCard key={course.id} state={course} {...course} />))
            }
          </div>
        </div>
      </section>
      <section className="categories py-10 bg-white">
        <div className="container max-w-[960px] flex flex-col gap-8 mx-auto py-20 px-4">
          <div className="flex flex-wrap gap-2 items-center md:justify-between">
            <div className="flex-2 flex flex-col gap-1 pr-5">
              <h3 className="text-2xl md:text-4xl font-bold text-sky-500 capitalize">Browse through our Course Catalogue</h3>
              <p className="normal-text py-2 pr-2">Browse through our courses categories to choose the best for your career and/or academic pursuits</p>
            </div>
            
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
            {
              // loading ? <Skeleton key={891} type={'course'} total={3} />
              // : 
              categories.slice(0,6).map(category => (<CategoryCard key={category.id} {...category} />))
            }
          </div>
          <div className="flex-1 flex items-center justify-center">
              <Link to="/courses" className="flex items-center gap-2 bg-sky-500 text-white group text-sm px-4 py-2">Explore More <IoIosArrowDropright className='mt-1 text-inherit group-hover:translate-x-2 transition-all duration-300' /></Link>
            </div>
        </div>
      </section>
      <section className="newsletter py-10 bg-gray-100">
        <div className="container mx-auto max-w-[960px] flex flex-col gap-3 items-center justify-center py-20 px-4">
            <div className="flex-1 flex flex-col gap-1 p-5 items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize">Subscribe to our Newsletter</h3>
              <p className="normal-text py-2 pr-2">Be the first to learn about our latest updates: discount, new courses and trends </p>
            </div>
            <form className="shad w-full md:w-[70%] mx-auto flex bg-white items-center justify-center rounded-md overflow-hidden">
              <input onChange={(e) => console.log("Works")} type="text" className="flex-1 bg-transparent text-sm p-2 text-slate-300 outline-0 border-[1px] border-slate-50" />
              <button type="submit" className="bg-indigo-600 px-4 w-max py-3 text-white">Subscribe</button>
            </form>
        </div>
      </section>
      <PartnerSlide  key={898} />
    </>
  )
}

export default Home