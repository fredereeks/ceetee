import React, {useEffect} from 'react'
import { BreadCrumb } from '../components'

function Resources() {
    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Resources";
    },[])

    return (
        <main className='flex flex-col justify-center bg-white'>
            <BreadCrumb page={"Resources"} />
        </main>
  )
}

export default Resources