import React from 'react'
import {randomColor} from "../utils"
import { FaCheck } from 'react-icons/fa'

function CorporateCard({title, contents}) {
  return (
    <aside className="bg-white p-4 shadow-lg flex flex-col gap-2 m-2">
        <h3 style={{color: randomColor(.8)}} className={`text-lg md:text-xl font-bold p-2`}>{title}</h3>
        <div className="flex flex-col gap-2 py-2">
          {
            contents.map((req,i) => (<p key={i} className="text-slate-800 py-1 leading-loose text-sm flex items-center gap-2 border-0 border-b-[1px] border-b-slate-300"><FaCheck className='bg-green-400 text-white h-[15px] w-[15px] flex-shrink-0 text-xs p-1 grid place-items-center rounded-full' /> {req}</p>))
          }
        </div>
    </aside>
  )
}

export default CorporateCard