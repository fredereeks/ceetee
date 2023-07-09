import {useEffect} from 'react'
import { partners } from '../data'
import PartnersCard from '../components/PartnersCard'
import { Link } from 'react-router-dom';
import { masonry8 } from '../assets/images';
import { CorporateCard } from '../components'
import { corporates, individuals } from '../data';

function Coaching() {

  useEffect(() => {
    document.title = "CTTI e-learning Centre :: Coaching";
  },[]);

  return (
    <main className="bg-slate-50 pb-20">
      <section className="bg-gradient-to-l from-cyan-600 to-blue-600 py-20 px-4">
        <div className="container relative mx-auto max-w-[980px] flex flex-col">
          <div className="flex flex-wrap gap-2 items-center pt-5 pb-10 text-slate-50">
            <Link to="/" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white  ">Home</Link>
            /
            <Link to="/solutions" className="font-bold hover:text-slate-50 px-2 text-md md:text-lg text-white ">Solutions</Link>
            /
            <div className="font-normal px-2 text-md md:text-lg text-slate-50">Coaching </div>
          </div>
        </div>
        <aside className="flex flex-col gap-2 justify-center container max-w-[960px] py-5 mx-auto">
          <h2 className="text-2xl md:text-4xl text-white font-bold">Coaching Solutions and Career Development</h2>
          <p style={{lineHeight: 2}} className="text-white w-full sm:max-w-[70%] md:max-w-[90%] leading-[2] text-md md:text-base py-2 text-justify">At CTTI, we understand the importance of continuous growth and personal development in today's dynamic professional landscape. We offer individuals and corporate organisations comprehensive career development and coaching consulting services. Whether you're an individual seeking to enhance your career prospects or an organisation looking to invest in the success of your employees, our expert consultants are here to guide you on the path to success.</p>
        </aside>
      </section>
      <section className="bg-gray-100">
          <div className="container max-w-[960px] mx-auto py-10 flex flex-col gap-5">
              <article className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize p-5 pt-8">Customized <span className="text-cyan-400">Corporate</span> Training</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
                      {
                          corporates.map(corporate => <CorporateCard key={corporate.id} {...corporate} />)
                      }
                  </div>
              </article>
          </div>
      </section>
      <section className="bg-white">
          <div className="container max-w-[960px] mx-auto py-10 flex flex-col gap-5">
              <article className="flex flex-col gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-500 capitalize p-5 pt-8">Customized <span className="text-indigo-600">Individual</span> Training</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
                      {
                          individuals.map(individual => <CorporateCard key={individual.id} {...individual} />)
                      }
                  </div>
              </article>
          </div>
      </section>
      <section className="bg-white py-20 relative after:left-0 after:top-0 after:absolute after:z-5 after:bg-[#0008] after:w-full after:h-full">
        <img src={masonry8} alt="" className="absolute w-full h-full z-2 top-0 left-0 object-cover" />
        <div className="relative z-50 container mx-auto p-3 flex flex-col gap-2 max-w-[50rem]">
          <p style={{lineHeight: 2}} className="text-white text-base md:text-lg leading-loose text-justify pt-5">At CTTI, our career development and coaching consulting services are designed to empower individuals and organisations to achieve their full potential. Our team of experienced consultants brings a wealth of knowledge and expertise to guide you on your career journey. Whether seeking personal growth or organisational success, we are committed to providing the tools, insights, and support you need to thrive in today's competitive landscape.</p>
          <Link to="/contact" className="bg-indigo-50 px-4 w-max py-2 my-2 rounded-xl text-indigo-600 font-bold">Contact us today</Link>
        </div>
      </section>
    </main>
  )
}

export default Coaching