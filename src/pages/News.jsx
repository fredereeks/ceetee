import {useEffect} from 'react'
import { FaCommentAlt } from 'react-icons/fa';
// import {blog_slider1, blog_slider2, blog_slider3, rocket} from "../assets/images"

function News({image, user, title, category, text, comments}) {
  useEffect(() => {
    document.title = "CTTI e-learning Centre :: News";
},[]);
  return (
    <main className="bg-slate-50 py-20">
      <div className="container pt-10 mx-auto max-w-960 flex flex-col">
        <div className="flex flex-col gap-3 p-5 items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize">Our <span className="text-cyan-400">News</span> and Trends</h3>
              <p className="text-slate-400 text-md md:text-base leading-loose text-justify py-2 pr-2">Stay abreast latest updates and news about CTTI</p>
        </div>
        <section className="py-20 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <aside className="max-w-[25rem] rounded-md shad hover:shadow-lg bg-white flex felx-col gap-2">
              <img src={image} alt={title} className="h-[200px] w-full object-cover" />
              <div className="flex flex-col gap-2 px-3 pt-2 pb-4 bg-white justify-between">
                <div className="flex flex-col gap-1">
                <span className="text-xs px-4 py-2 rounded-[2rem] text-slate-200 ">{category}</span>
                <h3 className="font-bold text-slate-700 text-lg md:text-xl">{title}</h3>
                <p className="text-sm md:text-sm text-truncate-2 text-ellipsis leading-loose text-slate-500">{text}</p>
                </div>
                <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <img src={user?.image} alt={user?.name} className="h-[40px] w-[40px] md:h-[60px] md:w-[60px] object-cover" />
                  <p className="text-xs text-slate-400">{user?.firstname} {user?.lastname}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCommentAlt className="text-xs text-slate-400" /> <p className="text-xs text-slate-400">{comments}</p>
                </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}

export default News