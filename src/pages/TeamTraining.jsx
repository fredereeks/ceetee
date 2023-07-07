import React, { useEffect } from 'react'
import { masonry4 } from '../assets/images'
import { Link } from 'react-router-dom'
import { trainings } from '../data/trainings';
// import { randomColor } from '../utils'

function TeamTraining() {
  useEffect(() => {
    document.title = "CTTI e-learning Centre: Team Training";
  },[])

  return (
    <main className="flex flex-col bg-white">
        <section className="bg-blue-800 py-20 px-4">
          <div className="container relative mx-auto max-w-[980px] flex flex-col">
            <div className="flex flex-wrap gap-2 items-center pt-5 pb-10 text-slate-50">
              <Link to="/" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white  ">Home</Link>
              /
              <Link to="/solutions" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white ">Solutions</Link>
              /
              <div className="font-normal px-2 text-md md:text-lg text-slate-50">Team Training</div>
            </div>
          </div>
          <aside className="flex flex-col gap-2 justify-center container max-w-[960px] py-5 mx-auto">
            <h2 className="text-2xl md:text-4xl text-white font-bold">Customized Training Solutions</h2>
            <p style={{lineHeight: 2}} className="text-white w-full sm:max-w-[70%] md:max-w-[90%] leading-[2] text-md md:text-base py-2 text-justify">At CTTI, we understand that every organisation has unique training needs. We offer standard and customised training programs for corporate and government clients. Whether you want to enhance your team's skills or train individual employees, we have tailored solutions to meet your requirements. With our comprehensive training offerings and industry expertise, we can help your organisation achieve its goals and retain top talent.</p>
          </aside>
        </section>
        <section className="py-10 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-center container max-w-[960px] p-5 mx-auto">
            <div className="relative h-[330px] w-[320px] border-indigo-700 border-[6px] rounded-md shadow-lg mx-auto -skew-x-[5deg] ">
              <img src={masonry4} alt="" className=" border-white border-[6px] w-full h-full top-0 -left-[1rem] object-cover scale-100" />
            </div>
            <div className="col-span-2 p-5 md:py-20 md:px-10 flex flex-col gap-2">
              <h2 className="text-2xl md:text-4xl text-indigo-700 font-bold">Individual and Team Training</h2>
              <p className="text-gray-700 leading-[1.8] text-md md:text-base py-2 text-justify">Whether you want to train an individual or a team, our experienced trainers can deliver personalised instruction to individuals, addressing their specific learning objectives. Additionally, we can conduct comprehensive team training sessions, fostering collaboration and knowledge-sharing among your employees.</p>
            </div>
          </div>
        </section>
        <section className="bg-white py-20 relative after:left-0 after:top-0 after:absolute after:z-5 after:bg-[#8881] after:w-full after:h-full">
          {/* <img src={category_2} alt="" className="absolute w-full h-full z-2 top-0 left-0 object-cover" /> */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center container max-w-[960px] px-5 py-10 mx-auto">
              {/* <h2 className="col-span-1 sm:col-span-2 text-2xl md:text-4xl text-indigo-700 pt-0 pb-10 text-center font-bold">CTTI Advantages for Corporate and Government Clients</h2> */}
              <h3 className="col-span-1 sm:col-span-2 pb-10 text-2xl md:text-3xl font-bold text-blue-600 mx-auto max-w-[90%] sm:max-w-[50%] text-center leading-loose capitalize">CTTI Advantages<span className ="text-cyan-400"> Cororate</span> and <span className ="text-cyan-400"> Government</span> Clients </h3>
            {
              trainings.map((training,i) => {
                const light = i % 2 === 1 ? "-translate-y-4 hover:translate-y-0" : "hover:-translate-y-4 translate-y-0"
                return(
                  <aside key={training.id} className={`group relative ${training.background} ${light} py-8 px-4 rounded-md cursor-pointer flex flex-col gap-3 items-center justify-center overflow-hidden shadow-md`}>
                    {/* <div className="relative flex flex-col items-center group-hover:top-0 h-full w-full overflow-hidden py-2"> */}
                      <div className="flex flex-row gap-3 items-center">
                        {training.icon}
                        <h3 className={`text-lg md:text-xl text-left text-white font-bold`}>{training.title}</h3>
                      </div>
                      <p className="px-3 text-justify leading-loose text-sm md:text-md text-white font-normal">{training.text}</p>
                    {/* </div> */}
                  </aside>
                )
              })
            }
          </div>
        </section>
    </main>
  )
}

export default TeamTraining