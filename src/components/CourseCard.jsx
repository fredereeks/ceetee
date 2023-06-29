import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { IoLogoEuro, IoMdStarOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { randomColor } from '../utils'

function CourseCard({id, image, title, rating, price, users, category}) {
  return (
    <Link to={`/courses?${id}`} key={id} className="bg-white flex flex-col gap-2 p-2 sm:p-3 sm:p-4 max-w-[25rem] group shad hover:shadow-2xl rounded-base transition-all duration-300">
        <div className={`relative h-[100px] sm:h-[200px] w-full mb-2 rounded-md grid place-items-center`} style={{background: randomColor(.5)}}>
            <img src={image} alt={title} className="absolute w-full h-full top-0 left-0 object-cover" />
        </div>
        <div className="flex flex-col justify-between items-start">
            <div className="flex flex-col gap-1">
              <p className="text-[.55rem] sm:text-[.6rem] px-2 sm:px-4 bg-indigo-100 w-max text-indigo-400 py-1 rounded-[2rem] my-1">{category}</p>
              <h4 className="text-sm sm:text-md md:text-lg font-bold text-slate-500 capitalize">{title}</h4>
            </div>
            <div className="flex gap-1 sm:gap-3 items-center pt-4 pb-2">
              <div className="flex items-center text-slate-400 gap-1 sm:gap-2 text-[.6rem] sm:text-sm">
                <p className="flex gap-1 sm:gap-2 items-center bg-green-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center"><FaUserAlt className='text-green-300 text-[.5rem]' /></p>{users}+
              </div>
              <div className="flex items-center text-slate-400 gap-2 text-[.6rem] sm:text-sm">
                <p className="flex gap-1 sm:gap-2 items-center bg-yellow-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center"><IoMdStarOutline className='text-yellow-300 text-[.5rem]' /></p>{rating}
              </div>
              <div className="flex items-center text-slate-400 gap-2 text-[.6rem] sm:text-sm">
                <p className="flex gap-1 sm:gap-2 items-center bg-pink-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center"><IoLogoEuro className='text-pink-300 text-[.5rem]' /></p>&#8358;{price.toLocaleString()}
              </div>
            </div>
        </div>
    </Link>
  )
}

export default CourseCard