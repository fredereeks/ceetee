import React, { useEffect, useState} from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'

const LinkCard = ({title, link, sublinks, onClick, dropdown}) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(false);

    useEffect(() => {
        location.pathname === link ? setActiveLink(true) : setActiveLink(false);
        return () => {
            setActiveLink(false);
        } 
    },[location, link, dropdown]);
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[location.pathname])
    
    if(sublinks.length > 0){
        return (
            <li className={`relative`}>
                <div className={`flex items-center w-full cursor-pointer hover:bg-cyan-400 md:hover:bg-transparent group`}>
                    <Link to={link} className={`group-hover:text-white md:group-hover:text-slate-500 ${activeLink} text-sm py-2 px-3 text-slate-500 hover:text-white hover:bg-cyan-400 md:hover:bg-transparent md:hover:text-slate-600 flex gap-1 items-center`}>{title}</Link>
                    <FaCaretDown className={`group-hover:text-white md:group-hover:text-slate-400 text-[.76rem] cursor-pointer text-slate-400 mt-1 -mx-1`} onClick={() => onClick(title.toLowerCase())}  />
                </div>
                <ul className={`transition-all duration-300 relative md:absolute z-[888] overflow-hidden top-full left-0 border-0 border-t-2 w-full md:min-w-[15rem] md:max-w-[25rem] md:shadow-md ${dropdown ? 'border-indigo-200 max-h-max' : 'border-t-transparent max-h-0'}  flex-col bg-white`}>
                {sublinks.map(({id,link,title}) => (
                    <li key={id} className={`relative`}>
                        <Link to={link} key={id} className={`text-sm py-2 px-3 text-slate-500 hover:text-white hover:bg-cyan-400 md:hover:bg-transparent md:hover:text-slate-600 flex gap-1 items-center`}>{title}</Link>
                    </li>
                ))}
                </ul>
            </li>
        )
    }
    else return <Link to={link} className={`text-sm py-2 px-3 text-slate-500 hover:text-white hover:bg-cyan-400 md:hover:bg-transparent md:hover:text-slate-600 flex gap-1 items-center`}>{title}</Link>

}

export default LinkCard