import React, { useEffect, useState } from 'react'
// import { error404 } from '../assets/images'
// import { Link } from 'react-router-dom'
// import { FaArrowLeft } from 'react-icons/fa'
import { courses } from '../data';
import { capitalize} from '../utils'
import { Link, useLocation } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

function Course() {
  const location = useLocation();
  const linkCategory = location.pathname.split("/").slice(-1)[0].replaceAll("-", " ")
  const [state, setState] = useState([])
  const [pageCategory, setPageCategory] = useState(`${capitalize(linkCategory)}`)
  // console.log({pageCategory, linkCategory: capitalize(linkCategory)})

  useEffect(() => {
    // if(linkCategory){
      setState(courses.filter(course => course.category.toLowerCase() === linkCategory.toLowerCase()))
    // }
    setPageCategory(state[0]?.category || 'Courses')
    document.title = `CTTI e-learning Centre :: ${pageCategory}`;
      /* const fetchSinglePost = async () => {
        try {
          const res = await axios.get(`http://localhost:4119/api/posts?id=${postId}`);
          const data = res.data;
          setState(data)
        } catch (err) {
          if(axios.isCancel(err)){
            console.log("Request Cancelled");
            console.log({err})
          }
          setError(err.message)
        }
      }
      fetchSinglePost() */
    
      return () => {
      // cancelToken.cancel()
      setPageCategory('')
      setState([])
    }
    // eslint-disable-next-line
  }, [location.pathname])
  return (
    <main  className='flex flex-col bg-gray-100 pt-14 justify-center'>
      <div className="container relative mx-auto max-w-[980px] px-4 flex flex-col">
        <div className="flex flex-wrap gap-2 items-center pt-5 pb-7 text-slate-400">
          <Link to="/" className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">Home</Link>
          /
          <Link to="/courses" className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">Courses</Link>
          /
          <div className="font-normal hover:text-slate-500 px-2 text-md md:text-lg text-slate-500">{pageCategory}</div>
        </div>
      </div>
      <section className="relative py-20 px-5 bg-white overflow-hidden">
        <div className="absolute left-[20%] sm:left-[40%] top-[1rem] rotate-[-45deg] rounded-t-[4rem] rounded-b-none bg-gradient-to-br from-indigo-400 to-pink-200 overflow-hidden origin-top-left border-2 border-slate-500 w-full h-[200%]">
          {/* <div className="relative w-full h-full rotate-[-15deg]"> */}
            <img src={state[0]?.image} alt={state[0]?.title} className="object-cover w-full h-full opacity-50 -left-[62%] sm:-left-[40%] top-0 rotate-[45deg] absolute" />
          {/* </div> */}
        </div>
        <div className="container relative mx-auto max-w-[980px] px-4 flex flex-col">
          <div className="sm:w-[80%] md:w-[65%] lg:w-[50%] bg-white/50 md:bg-transparent pt-6 pr-3 flex flex-col justify-center">
            <p className="text-thin text-slate-500 leading-loose">The best way to learn</p>
            <h3 className="text-indigo-500 text-3xl md:text-4xl font-bold">{pageCategory}</h3>
            <p className="text-thin text-slate-500 leading-loose py-2">We provide you with guides, instructors, materials and resources to propel you into becoming a {pageCategory} guru beyond the periphery and </p>
            {/* <Link className="text-gray-200 bg-[#3b1cec] rounded-[2rem] w-max px-3 py-2 text-sm md:text-md shadow-lg cursor-not-allowed shadow-[#ec1c3e]">Learn for Free</Link> */}
            <Link to="#courses" className="text-white bg-indigo-500 rounded-[2rem] w-max px-5 py-2 text-sm md:text-md shadow-lg shadow-indigo-200 my-2">See Courses</Link>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-4">
        <div id="#courses" className="container relative mx-auto max-w-[980px] py-10 flex flex-col overflow-hidden">
          <h3 className="py-2 px-3 text-indigo-500 border-0 border-l-[3px] border-l-indigo-500 font-bold text-lg md:text-xl">{pageCategory} Courses</h3>
          <div className="col-span-1 md:col-span-3 pt-6 pb-4 grid course__wrap gap-3" style={{gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"}}>
            {
              state.map(course => <CourseCard key={course.id} {...course} state={course}/>)
            }
        </div>
        </div>
      </section>
    </main>
  )
}

export default Course