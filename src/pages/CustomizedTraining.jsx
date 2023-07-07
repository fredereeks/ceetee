import React from 'react'
import { BreadCrumb } from '../components'

function CustomizedTraining() {
    return (
        <main className='flex flex-col justify-center'>
            <BreadCrumb extra={{ name: "Solutions", link: "/solutions" }} page={"Customized Training"} />
            <section className="bg-white">
                <div className="container relative mx-auto max-w-[980px] pt-20 px-4 flex flex-col">
                </div>
            </section>
        </main>
    )
}

export default CustomizedTraining