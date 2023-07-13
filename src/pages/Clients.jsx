import React, {useEffect} from 'react'
import { BreadCrumb } from '../components'

function Clients() {
    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Clients";
    },[])

    return (
        <main className='flex flex-col justify-center bg-white'>
            <BreadCrumb extra={{ name: "About", link: "/about" }} page={"Clients"} />
        </main>
  )
}

export default Clients