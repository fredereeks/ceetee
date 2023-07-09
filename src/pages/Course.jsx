import React, { useEffect } from 'react'
// import { error404 } from '../assets/images'
// import { Link } from 'react-router-dom'
// import { FaArrowLeft } from 'react-icons/fa'
import { randomColor } from '../utils'

function Course() {
  useEffect(() => {
    document.title = "CTTI e-learning Centre: Course";
},[])
  return (
    <main style={{background: randomColor()}} className='min-h-screen flex flex-col justify-center'>
      
    </main>
  )
}

export default Course