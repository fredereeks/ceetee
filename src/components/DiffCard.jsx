import React from 'react'
import { Link } from 'react-router-dom'

function DiffCard({id, icon, background, title, text, full}) {

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
    <Link  to={`${full ? '' : '/about'}`} onClick={handleClick} key={id} className={`bg-white flex flex-col items-start gap-2 py-6 sm:p-6 sm:py-8 ${full ? 'w-full px-6' : 'max-w-[25rem] px-4'} shad hover:shadow-lg rounded-base transition-all duration-300`}>
        <div className={`${full ? 'h-[55px] w-[55px]' : 'h-[40px] w-[40px]'} mb-2 rounded-md grid place-items-center ${background}`}>
          <span className={`${full ? 'scale-125' : 'scale-100'}`}>
            {icon}
          </span>
        </div>
        <h4 className={`${full ? 'text-lg md:text-xl' : 'text-base md:text-lg'} font-bold text-slate-500 capitalize`}>{title}</h4>
        <p className={`text-md md:text-base text-justify leading-loose text-slate-400 ${full ? '' : 'overflow-hidden text-ellipsis line-clamp-2'}`}>{text}</p>
    </Link>
  )
}

export default DiffCard