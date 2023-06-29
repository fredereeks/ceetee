import React from 'react'

function DiffCard({id, icon, background, title, text, full}) {
  return (
    <aside key={id} className={`bg-white flex flex-col items-start gap-2 px-4 py-6 sm:p-6 sm:py-8 ${full ? 'w-full' : 'max-w-[25rem]'} shad hover:shadow-lg rounded-base transition-all duration-300`}>
        <div className={`h-[40px] w-[40px] mb-2 rounded-md grid place-items-center ${background}`}>
            {icon}
        </div>
        <h4 className="text-base md:text-lg font-bold text-slate-500 capitalize">{title}</h4>
        <p className={`text-xs md:text-sm text-justify leading-loose text-slate-400 ${full ? '' : 'overflow-hidden text-ellipsis line-clamp-4'}`}>{text}</p>
    </aside>
  )
}

export default DiffCard