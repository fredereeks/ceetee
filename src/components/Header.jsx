import React, { useEffect, useRef, useState} from 'react'
import { logo } from '../assets/images'
import {Link, useLocation} from 'react-router-dom'
import { headerLinks } from '../data/headerLinks';
import LinkCard from './LinkCard';

function Header(){
    const [navshow, setNavShow] = useState(false);
    const [fixed, setFixed] = useState(false);
    const header = useRef();
    const navRef = useRef();
    const location = useLocation();
    const [dropdowns, setDropdowns] = useState({
        about: false,
        courses: false,
        solutions: false,
        resources: false,
    })

    const toggleDropdown = name => {
        const newDropdown = dropdowns
        for(let i in newDropdown) { 
            newDropdown[i] = i === name ? !newDropdown[i] : false;
            setDropdowns(prev => ({...prev, ...newDropdown}))
        }
    }

    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY > 60) {
                setFixed(true)
            }
            else {
                setFixed(false)
            }
        }
        return () => {
            setFixed(false);
            window.scrollTo(0,0)
            setNavShow(false);
            setDropdowns({ about: false, courses: false, solutions: false, resources: false,})
        }
    },[location])

    /* useEffect(() => {
        if(navshow){
            document.addEventListener("click", (e) => {
                const navDimension = navRef.current.getBoundingClientRect();
                const {left, right, top, bottom} = navDimension;
                if(e.clientX < left || e.clientX > right || e.clientY < top || e.clientY > bottom ){
                    setNavShow(prev => !prev)
                }
            })
        }
        return () => {
            window.removeEventListener("click", document)
        }
    },[dropdowns, navshow]) */

    return (
        <header ref={header} className={`bg-white z-[999] p-2 fixed ${fixed ? 'shadow-md shadow-slate-200' : 'shadow-none'} w-full left-0 top-0`}>
            <div className="container max-w-[960px] mx-auto flex justify-between items-center md:gap-3">
                <div className="md:width-[600px] flex flex-start">
                    <Link to="/" className='w-[70px] h-[50px] mt-0 text-gray-100'>
                        <img src={logo} alt="CTTI Logo" className="w-full h-[50px] object-contain sm:object-contain" />
                    </Link>
                </div>
                <nav ref={navRef}  style={{left: '0 !important'}} className={`flex-1 sm:flex-4 flex flex-col md:flex-row md:justify-center md:pl-[6rem] absolute md:relative shadow-md transition-all duration-300 ${navshow ? 'left-0 top-full z-50' : 'left-[110%] md:left-0 z-0 top-full'} md:top-0 w-screen md:w-max md:shadow-none bg-white md:mx-0`}>
                    <ul className="list-style-none mx-auto flex flex-col md:flex-1 md:flex-row gap-2">
                        {
                            headerLinks.map((link) => <LinkCard key={link.id} {...link} dropdown={dropdowns[link.title.toLowerCase()]} onClick={toggleDropdown} />)
                        }
                    </ul>
                    <div className="md:ml-auto flex flex-col justify-center pt-1 h-full w-full md:w-max md:flex-row md:gap-3">
                        <Link to="/login" className="text-sm grid place-items-center md:border-[1px] md:border-indigo-400 text-indigo-400 md:rounded-md h-10 md:h-8 w-full md:w-max px-2 md:px-4 relative">Login
                        </Link>
                        <Link to="/signup" className="text-sm grid place-items-center text-white bg-indigo-400 md:rounded-md h-10 md:h-8 w-full md:w-max px-2 md:px-4 relative">Signup
                        </Link>
                    </div>
                </nav>
                <div className="relative py-2 px-1 cursor-pointer rounded-sm w-[35px] h-[35px] flex md:hidden items-center" onClick={() => setNavShow(prev => !prev)}>
                    <div className={`relative h-[2px] w-full ${navshow ? 'bg-white' : 'bg-cyan-700 rounded-lg'} ${navshow ? 'before:rotate-[45deg] before:-translate-y-[400%]' : 'before:rotate-0 before:-translate-y-[400%]'} before:transition-all before:duration-300 before:origin-top-left before:h-full before:w-full before:left-0 before:bg-cyan-700 rounded-lg before:absolute before:z-10 ${navshow ? 'after:rotate-[-45deg] after:translate-y-[400%]' : 'after:rotate-0 after:translate-y-[400%]'} after:transition-all after:duration-300 after:origin-bottom-left after:h-full after:w-full after:right-0  after:bg-cyan-700 rounded-lg after:absolute after:z-10`}></div>
                </div>
            </div>
        </header>
    )
}

export default Header;