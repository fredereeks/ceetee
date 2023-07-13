import React, {useEffect} from 'react'
import { BreadCrumb } from '../components'

function Benefits() {
    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Benefits";
    },[])

    return (
        <main className='flex flex-col justify-center bg-white'>
            <BreadCrumb extra={{ name: "About", link: "/about" }} page={"Benefits"} />
        </main>
  )
}

export default Benefits