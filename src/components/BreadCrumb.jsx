import React from 'react'
import { Link } from 'react-router-dom'

export const BreadCrumb = ({page, extra}) => {
    return (
      <section className="bg-gray-100 pt-14">
        <div className="container relative mx-auto max-w-[960px] px-4 flex flex-col">
          <div className="flex flex-wrap gap-2 items-center pt-5 pb-7 text-slate-400">
            <Link to="/" className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600  ">Home</Link>
            /
            {extra && <><Link to={extra?.link} className="font-bold hover:text-slate-500 px-2 text-md md:text-lg text-slate-600">{extra?.name}</Link>
            /</>}
            <div className="font-normal hover:text-slate-500 px-2 text-md md:text-lg text-slate-500">{page}</div>
          </div>
        </div>
      </section>
  )
}
