import React, {useEffect} from 'react'
import { BreadCrumb } from '../components'
import { category_2 } from '../assets/images';

function CustomizedTraining() {
    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Customized Training";
    },[]);

    return (
        <main className='flex flex-col justify-center'>
            <BreadCrumb extra={{ name: "Solutions", link: "/solutions" }} page={"Customized Training"} />
            <section className="bg-white">
                <div className="container relative mx-auto max-w-[980px] pt-20 px-4 flex flex-col md:flex-row">
                    <img src={category_2} alt="" className="flex-1 h-300 rounded-br-full" />
                    <div className="flex flex-col gap-3 p-5 items-center md:items-start">
                        <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 capitalize">About Us at <span className="text-cyan-400">CTTI</span></h3>
                        <p className="text-slate-600 text-md md:text-base leading-loose text-justify py-2 pr-2">At CTTI, we are dedicated to empowering individuals and organisations with the knowledge and skills needed to excel in the rapidly evolving world of Information Technology. As a leading IT training organisation, we offer a comprehensive range of cutting-edge programs designed to meet the diverse needs of our students and clients.</p>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100">
                
            </section>
        </main>
    )
}

export default CustomizedTraining