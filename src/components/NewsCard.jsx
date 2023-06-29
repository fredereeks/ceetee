import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { IoLogoEuro, IoMdStarOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { randomColor } from '../utils'

function NewsCard({id, image, title, text, comments, price, users, category}) {
  return (
    <Link to={`/news?${id}`} key={id} className="relative overflow-hidden before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-gradient-to-t before:from-slate-800 before:to-transparent before:z-5 flex flex-col justify-end gap-2 p-2 sm:p-4 max-w-[25rem] group shad hover:shadow-2xl rounded-base transition-all duration-300">
        <img src={image} alt={title} className="absolute w-full h-full top-0 left-0 object-cover" />
        <div className="flex flex-col justify-between items-start">
            <div className="flex flex-col gap-1">
              <p className="text-[.55rem] sm:text-[.6rem] px-2 sm:px-4 bg-orange-400 w-max text-slate-50 py-1 rounded-[2rem] my-1">{category}</p>
              <h4 className="text-lg md:text-xl font-bold text-slate-50 capitalize">{title}</h4>
              <p className={`text-sm md:text-md text-justify leading-loose text-slate-50 overflow-hidden text-ellipsis line-clamp-2`}>{text}</p>
            </div>
            <div className="flex gap-1 sm:gap-3 items-center pt-4 pb-2">
              <div className="flex items-center text-slate-400 gap-1 sm:gap-2 text-[.6rem] sm:text-sm">
                <p className="gap-1 sm:gap-2 items-center bg-green-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center"><FaUserAlt className='text-green-300 text-[.5rem]' /></p>{users}+
              </div>
              <div className="flex items-center text-slate-400 gap-2 text-[.6rem] sm:text-sm">
                <p className="gap-1 sm:gap-2 items-center bg-yellow-100 h-3 w-3 sm:h-5 sm:w-5 rounded-md grid place-items-center"><IoMdStarOutline className='text-yellow-300 text-[.5rem]' /></p>{comments}
              </div>
            </div>
        </div>
    </Link>
  )
}

export default NewsCard