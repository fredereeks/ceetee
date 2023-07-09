import React, {useEffect} from 'react'
import { BreadCrumb, CoachingCard } from '../components'
import { category_2 } from '../assets/images';
import { corporates, individuals } from '../data';

function CustomizedTraining() {
    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Customized Training";
    },[]);

    return (
        <main className='flex flex-col justify-center'>
            <BreadCrumb extra={{ name: "Solutions", link: "/solutions" }} page={"Customized Training"} />
            <section className="bg-white">
                <div className="container relative mx-auto max-w-[960px] py-20 px-4 flex flex-col md:flex-row">
                    <img src={category_2} alt="" className="flex-1 h-300 rounded-br-[3rem]" />
                    <div className="flex flex-col gap-3 p-5 items-center md:items-start">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize">Customised <span className="text-cyan-400">Content and Training Programs</span> for Corporate Clients</h3>
                        <p className="text-slate-500 text-md md:text-base leading-loose text-justify font-medium py-2 pr-2">At CTTI, we understand that each organisation has unique training needs. That's why we offer customised content and training programs tailored specifically to the requirements of our corporate clients. Whether you are looking to upskill your workforce, improve employee performance, or address specific challenges within your industry, our expert team is here to develop and deliver training solutions that meet your organisation's unique needs.</p>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100">
                <div className="container max-w-[960px] mx-auto py-10 flex flex-col gap-5">
                    <article className="flex flex-col gap-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize p-5 pt-8">Customized <span className="text-cyan-400">Corporate</span> Training</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2">
                            {
                                corporates.map(corporate => <CoachingCard key={corporate.id} {...corporate} />)
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
                                individuals.map(individual => <CoachingCard key={individual.id} {...individual} />)
                            }
                        </div>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default CustomizedTraining