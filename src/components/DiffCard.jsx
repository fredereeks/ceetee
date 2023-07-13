import React from 'react'
import { Link } from 'react-router-dom'

function DiffCard({id, icon, background, tag, title, text, full}) {

  const handleClick = e => {
    if(full) {
      e.preventDefault();
      return false;
    }
    else{
      return true;
    }
  }

  return (
    <Link  to={`${full ? `id='${tag}'` : `/about#${tag}`}`} onClick={handleClick} key={id} className={`bg-white flex flex-col items-start gap-2 py-6 sm:p-6 sm:py-8 ${full ? 'w-full px-6 cursor-text' : 'cursor-pointer max-w-[25rem] px-4'} shad hover:shadow-lg rounded-base transition-all duration-300`}>
        <div className={`${full ? 'h-[55px] w-[55px]' : 'h-[50px] w-[50px]'} mb-2 rounded-md grid place-items-center ${background}`}>
          <span className={`${full ? 'scale-150' : 'scale-125'}`}>
            {icon}
          </span>
        </div>
        <h4 className={`${full ? 'text-lg md:text-xl' : 'text-xl'} font-bold text-slate-500 capitalize`}>{title}</h4>
        <p className={`text-justify leading-loose ${full ? 'thin-text' : 'normal-text overflow-hidden text-ellipsis line-clamp-3'}`}>{text}</p>
    </Link>
  )
}

export default DiffCard