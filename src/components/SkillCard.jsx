import React from 'react'

function SkillCard({image, title, text, direction}) {
  return (
    <aside className={`group py-8 px-4 flex flex-col gap-3 md:gap-5 md:items-center ${direction ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="relative mx-auto h-[250px] md:h-full w-full md:w-[250px] md:flex-1 flex-shrink-0 group-hover:shad bg-white rounded-md overflow-hidden">
            <img src={image} alt={title} className="h-full w-full rounded-md hover:shadow-xl shadow-lg object-cover md:object-contain scale-150 group-hover:scale-100" />
        </div>
        <div className="flex flex-col gap-2 py-4 flex-1 md:flex-2">
            <h4 className={`text-xl md:text-3xl text-transparent font-bold bg-gradient-to-r from-indigo-500 to-cyan-800 bg-clip-text`}>{title}</h4>
            <p className="text-slate-600 text-justify text-md md:text-base leading-loose py-2 pr-2">{text}</p>
        </div>
    </aside>
  )
}

export default SkillCard