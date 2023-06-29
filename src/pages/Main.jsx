import React, { lazy, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { man_image } from '../assets/images'
import { IoIosArrowDropright } from 'react-icons/io'
import { categories, courses, differences } from '../data'
import Skeleton from '../components/Skeleton'
const DiffCard = lazy(() => import ('../components/DiffCard'))
const CategoryCard = lazy(() => import ('../components/CategoryCard'))
const CourseCard = lazy(() => import ('../components/CourseCard'))
const PartnerSlide = lazy(() => import ('../components/PartnerSlide'))

function Main() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const timeout = window.setTimeout(() => {
        setLoading(false)
      },7000)
      return () => {
        clearTimeout(timeout)
      }
  },[])
  
  useEffect(() => {
    document.title = "CTTI e-learning Centre :: Home";
},[]);

  return (
    <>
      <section className="bg-slate-50 px-4 py-20">
          <div className="container max-w-[960px] mx-auto items-center px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-4xl text-transparent  bg-gradient-to-r from-indigo-500 to-cyan-300 bg-clip-text font-bold capitalize py-2">Explore your learning area and gather knowledge</h2>
              <p className="text-slate-400 text-sm font-thin leading-loose pr-2 pb-2">Learning is the process of acquiring new or modifying exiting knowledge, behaviours, skills, values or preferences</p>
              <Link to="/" className="text-sm text-white w-max rounded-[2rem] py-2 px-4 sm:px-6 bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-sky-200 drop-shadow-md">Get Started</Link>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={man_image} alt="Hero Student" className="h-120 w-120 rounded-t-r-full rounded-t-r-xl object-cover rounded-full" />
            </div>
          </div>
      </section>
      <section className="counter bg-gradient-to-l from-indigo-500 to-sky-500">
        <div className="container mx-auto justify-center max-w-[960px] grid grid-cols-2 md:grid-cols-4 py-10 px-4">
          {
            [
              [111, "8K+", "Online Learners", "border-2 border-r-slate-50/30"],
              [112, "200+", "Expert Instructors", "md:border-2 md:border-r-slate-50/30"],
              [113, "105K+", "Validated Students", "border-2 border-r-slate-50/30"],
              [114, "310+", "Trendy Subjects", "border-0"],
            ].map(([id, stat, text, border]) => (
              <aside key={id} className={`flex flex-col p-3 items-center justify-center gap-3 text-white border-transparent ${border}`}>
                <h3 className="text-inherit text-xl md:text-2xl font-bold">{stat}</h3>
                <p className="text-inherit text-xs md:text-sm text-center">{text}</p>
              </aside>
            ))
          }
        </div>
      </section>
      <section className="difference py-20 sm:px-4 bg-[#f8f8fa90]">
        <div className="container justify-center items-stretch grid diff sm:grid-cols-3 mx-auto py-10 gap-x-2 gap-y-4 sm:gap-y-8 sm:gap-x-6 max-w-[960px] py-10 px-2 sm:px-4">
          <aside className="col-span-2 flex flex-col justify-center gap-2 px-2 py-4">
            <h3 className="text-2xl md:text-4xl font-bold text-sky-400">Why are we <span className="text-sky-600">different</span> from other?</h3>
            <p className="leading-loose text-justify text-slate-500 text-sm py-2 pr-2">At CTTI, we are committed to nurturing the next generation of IT professionals and supporting organisations in their digital transformation journeys. Whether you are a student looking to kick-start your IT career or an organisation seeking to upskill your workforce, we invite you to join us and embark on a transformative learning experience. Discover the power of knowledge with CTTI - your trusted IT training and education partner.</p>
            <Link to="/about" className="text-slate-50 bg-gradient-to-br from-sky-500 to-sky-600 rounded-[2rem] mt-1 text-sm px-4 md:px-6 py-2 w-max shadow-md shadow-indigo-200">Read More</Link>
          </aside>
          {
            differences.map((difference) => <DiffCard key={difference.id} full={false} {...difference} />)
          }
        </div>
      </section>
      <section className="categories py-20 bg-white">
        <div className="container mx-auto max-w-[960px] flex flex-col gap-8 mx-auto py-20">
          <div className="flex flex-wrap px-4 gap-2 items-center md:justify-between">
            <div className="flex-2 flex flex-col gap-1 pr-5">
              <h3 className="text-2xl md:text-4xl font-bold text-sky-600 capitalize">Explore <span className="text-cyan-400">Subjects</span> by Category</h3>
              <p className="text-slate-400 text-md md:text-base py-2 pr-2">Browse through our courses categories to choose the best for your career and/or academic pursuits</p>
            </div>
            <div className="flex-1 flex items-end justify-center md:justify-end">
              <button className="flex items-center gap-2 text-slate-500 group text-sm px-4 py-2 border-[1px] border-transparent border-b-2 border-b-sky-200">Explore More <IoIosArrowDropright className='mt-1 text-inherit group-hover:translate-x-2 transition-all duration-300' /></button>
            </div>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
            {
              loading ? <Skeleton key={891} type={'course'} total={3} />
              : 
              categories.map(category => (<CategoryCard {...category} />))
            }
          </div>
        </div>
      </section>
      <section className="courses py-20 px-2 sm:px-4 bg-indigo-50">
        <div className="container mx-auto max-w-[960px] flex flex-col gap-3 mx-auto py-20">
          <div className="flex flex-wrap gap-2 items-center md:justify-between">
            <div className="flex-1 flex flex-col gap-1 pr-5">
              <h3 className="text-2xl md:text-4xl font-bold text-sky-600 capitalize"><span className="text-cyan-400">Popular Subjects</span> for you</h3>
              <p className="text-slate-400 text-md md:text-base py-2 pr-2">Get the best course, with the best price, with a world-class tutor</p>
            </div>
            <div className="flex-1 flex items-end justify-end">
              <button className="flex items-center gap-2 text-slate-500 group text-sm px-4 py-2 border-[1px] border-transparent border-b-2 border-b-sky-200">See All <IoIosArrowDropright className='mt-1 text-inherit group-hover:translate-x-2 transition-all duration-300' /></button>
            </div>
          </div>
          <div className="py-5 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
            {
              courses.slice(0,6).map(course => (<CourseCard key={course.id} {...course} />))
            }
          </div>
        </div>
      </section>
      <section className="newsletter py-20 bg-slate-50">
        <div className="container mx-auto max-w-[960px] flex flex-col gap-3 items-center justify-center py-20 px-4">
            <div className="flex-1 flex flex-col gap-1 p-5 items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize">Subscribe to our <span className="text-cyan-400">Newsletter</span></h3>
              <p className="text-slate-400 text-md md:text-base py-2 pr-2">Be the first to learn about our latest updates: discount, new courses and trends </p>
            </div>
            <form className="shad w-full md:w-[70%] mx-auto flex bg-white items-center justify-center rounded-md overflow-hidden">
              <input onChange={(e) => console.log("Works")} type="text" className="flex-1 bg-transparent text-sm p-2 text-slate-300 outline-0 border-[1px] border-slate-50" />
              <button type="submit" className="bg-indigo-500 px-4 w-max py-3 text-white">Subscribe</button>
            </form>
        </div>
      </section>
      <PartnerSlide  key={898} />
    </>
  )
}

export default Main