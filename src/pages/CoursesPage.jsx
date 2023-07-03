import React, { useEffect, useState, lazy } from 'react'
import { blog_teaser } from '../assets/images'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'
import { headerLinks, courses, } from '../data';
const CourseCard = lazy(() => import ('../components/CourseCard'))
// import { randomColor } from '../utils'

function CoursesPage() {
  const [active, setActive] = useState("All")  

  useEffect(() => {
    document.title = "CTTI e-learning Centre: Courses";
  },[])

  const setSelectedCourse = (title) => {
    setActive(title);
  }

  return (
    <main className='flex flex-col justify-center bg-white'>
        <section className="breadcrumb relative bg-indigo-400 py-20 px-4 min-h-80 flex">
          <img src={blog_teaser} alt="course breadcrumb" className="absolute opacity-50 w-full h-full left-0 top-0 object-cover" />
          <div className="container relative mx-auto max-w-[960px] py-20 flex flex-col">
            <h3 className="text-2xl md:text-4xl text-white font-bold uppercase">Courses</h3>
            <div className="flex gap-2 items-center py-5">
              <Link className="text-md md:text-lg text-white font-bold ">Home</Link>
              <FaChevronRight className="text-xs mx-3 mt-1 text-white font-bold"/>
              <div className="text-md md:text-lg text-slate-50/60 font-bold ">Courses</div>
            </div>
          </div>          
        </section>
        <section className="container bg-white relative mx-auto max-w-[960px] py-20 flex flex-col gap-5 py-20">
          <div className="flex flex-col gap-2 pb-10 justify-center items-center">
              {/* <h3 className="text-2xl md:text-2xl font-bold text-blue-600 mx-auto max-w-[90%] sm:max-w-[300px] text-center capitalize">We are equipped with<span className ="text-cyan-400">Expert Trainers</span> in the following courses </h3> */}
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mx-auto max-w-[90%] sm:max-w-[50%] text-center leading-loose capitalize">We are equipped with<span className ="text-cyan-400"> Expert Trainers</span> in the following courses </h3>
              <p className="text-slate-600 text-md md:text-base py-2 px-4 text-center">Taking a course with us gives you access and guarantees of these following benefits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-row md:flex-col gap-2 justify-center md:justify-start items-center md:items-stretch py-5 pr-4 bg-slate-100">
              <button onClick={() => setSelectedCourse("All")} className={`py-2 px-4 w-full ${active === "All" ? 'bg-gradient-to-l from-blue-500 to-indigo-500 text-white' : 'hover:bg-indigo-500 hover:text-white'} rounded-br-full rounded-tr-full text-slate-600 text-xs md:text-sm text-center md:text-left`} >All</button>
              {
                headerLinks[2].sublinks.map((links) => {
                  const link = {...links}
                  return(<button onClick={() => setSelectedCourse(link.title)} className={`py-2 px-4 w-full hover:text-white ${active === link.title ? 'bg-gradient-to-l from-blue-500 to-indigo-500 text-white' : 'hover:bg-indigo-500 hover:text-white'} rounded-sm md:rounded-br-full md:rounded-tr-full text-slate-600 text-xs md:text-sm text-center md:text-left`} key={link.id} >{link.title}</button>)
                })
              }
            </div>
            <div className="col-span-1 md:col-span-3 px-4 grid course__wrap bg-white gap-3" style={{gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"}}>
              {
                courses.map(course => (<CourseCard state={course} key={course.id} {...course} />))
              }
            </div>
          </div>
        </section>
    </main>
  )
}

export default CoursesPage