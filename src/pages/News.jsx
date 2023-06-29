import {useEffect} from 'react'

function News() {
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
        <div className="flex flex-col gap-2">
          aside.relative.max-w-
        </div>
      </div>
    </main>
  )
}

export default News