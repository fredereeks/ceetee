import React, { useEffect, useState, lazy } from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {  courses, categories, } from '../data';
import { BreadCrumb } from '../components'

const CourseCard = lazy(() => import ('../components/CourseCard'))
// import { randomColor } from '../utils'

function CoursesPage() {
  const [active, setActive] = useState("All") 
  // const [allCourses, setAllCourses] = useState(courses)
  const [selectedCourse, setSelectedCourse] = useState(courses)

  useEffect(() => {
    document.title = "CTTI e-learning Centre: Courses";
  },[])

  const changeSelectedCourse = (title) => {
    setActive(title);
    title === "All" ? setSelectedCourse(courses.filter(course => course.category !== title)) : setSelectedCourse(courses.filter(course => course.category === title))
  }

  return (
    <main className='flex flex-col justify-center bg-white'>
        <BreadCrumb key={8923} page={"Courses"} />
        <section className="container bg-white relative mx-auto max-w-[960px] flex flex-col gap-5 py-20">
          <div className="flex flex-col gap-2 pb-10 justify-center items-center">
              {/* <h3 className="text-2xl md:text-2xl font-bold text-blue-600 mx-auto max-w-[90%] sm:max-w-[300px] text-center capitalize">We are equipped with<span className ="text-cyan-400">Expert Trainers</span> in the following courses </h3> */}
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mx-auto max-w-[90%] md:max-w-[80%] text-center leading-tight">We are equipped with Expert Trainers in the following courses </h3>
              <p className="normal-text py-2 px-4 text-center">Taking a course with us gives you access and guarantees a slew of benefits and resources during and after course</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex md:hidden flex-row gap-2 justify-start md:justify-start items-center md:items-stretch py-5 px-4 bg-slate-100">
              <Carousel 
                className='w-full h-full flex flex-col justify-start items-center'
                // infiniteLoop={true}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={20}
                preventMovementUntilSwipeScrollTolerance={true}
                emulateTouch={true}
                stopOnHover={true}
              >
                <button onClick={() => changeSelectedCourse("All")} className={`py-2 px-4 w-full ${active === "All" ? 'bg-gradient-to-l from-blue-500 to-indigo-500 text-white' : 'hover:bg-indigo-500 hover:text-white'} rounded-br-full rounded-tr-full text-slate-600 text-xs md:text-sm text-center md:text-left`} >All</button>
                {
                  categories.map((category) => {
                    const link = {...category}
                    return(<button onClick={() => changeSelectedCourse(link.title)} className={`py-2 px-4 w-full hover:text-white ${active === link.title ? 'bg-gradient-to-l from-blue-500 to-indigo-500 text-white' : 'hover:bg-indigo-500 hover:text-white'} rounded-sm md:rounded-br-full md:rounded-tr-full text-slate-600 text-xs md:text-sm text-center md:text-left`} key={link.id} >{link.title}</button>)
                  })
                }
              </Carousel>
            </div>
            <div className="hidden md:flex flex-row md:flex-col gap-2 justify-center md:justify-start items-center md:items-stretch py-5 pr-4 bg-slate-100">
              <button onClick={() => changeSelectedCourse("All")} className={`py-2 px-4 w-full ${active === "All" ? 'bg-gradient-to-l from-blue-500 to-indigo-500 text-white' : 'hover:bg-indigo-500 hover:text-white'} rounded-br-full rounded-tr-full text-slate-600 text-xs md:text-sm text-center md:text-left`} >All</button>
              {
                categories.map((category) => {
                  const link = {...category}
                  return(<button onClick={() => changeSelectedCourse(link.title)} className={`py-2 px-4 w-full hover:text-white ${active === link.title ? 'bg-gradient-to-l from-blue-500 to-indigo-500 text-white' : 'hover:bg-indigo-500 hover:text-white'} rounded-sm md:rounded-br-full md:rounded-tr-full text-slate-600 text-xs md:text-sm text-center md:text-left`} key={link.id} >{link.title}</button>)
                })
              }
            </div>
            <div className="col-span-1 md:col-span-3 px-4 grid course__wrap bg-white gap-3" style={{gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"}}>
              {
                selectedCourse.map(course => (<CourseCard state={course} key={course.id} {...course} />))
              }
            </div>
          </div>
        </section>
    </main>
  )
}

export default CoursesPage