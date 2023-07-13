import React, {useEffect} from 'react'
import { BreadCrumb } from '../components'

function Delivery() {
    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Delivery";
    },[])

    return (
        <main className='flex flex-col justify-center bg-white'>
            <BreadCrumb extra={{ name: "About", link: "/about" }} page={"Delivery"} />
        </main>
  )
}

export default Delivery