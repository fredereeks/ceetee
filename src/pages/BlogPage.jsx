import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import PartnerSlide from '../components/PartnerSlide'
import { Link } from 'react-router-dom';

function BlogPage(){
    const data = [], loading = true;

    useEffect(() => {
        document.title = "CTTI e-learning Centre :: Blog Post";
    },[]);

    return (
        <main className="relative">
            <section className="blogpost relative py-10 bg-slate-200">
                <div className="md:container md:mx-auto px-4 py-20 md:px-0 grid grid-cols-1 md:grid-cols-2 items-stretch relative">
                    <aside className="relative z-50 flex flex-col justify-center items-center md:items-left gap-2 md:gap-5">
                        <p className="uppercase text-md md:text-base font-semibold text-sec">Contribute to a good cause</p>
                        <h3 className="text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal">Help strengthen our capacity to <span className="text-pri">reach out even further</span></h3>
                        <p className="text-md md:text-md max-w-[70%] md:max-w-[75%] font-thin text-slate-600">Your blogposts can go a long way in ensuring someone does not go hungry or have roof over their head</p>
                        <div className="flex flex-col flex-3 md:flex-row md:gap-2 justify-center py-5 px-3">
                            {
                               loading ? "Loading..." : data?.results?.map((user => {
                                    return(<BlogCard  key={user?.id} {...user}/>)
                                }))
                            }
                        </div>
                    </aside>
                </div>
            </section>
            <PartnerSlide />
        </main>
    )
}

const BlogCard = ({picture, name, login }) => {
    const image = picture.large, fullname = `${name.first} ${name.last}`, title = login.username; 
    console.log({image, fullname, title})
    return(
        <aside className="relative flex flex-col">
            <img src={image} alt={fullname} className="h-50 w-full object-cover" />
            <div className="bg-white px-2 pt-3 pb-4 flex flex-col gap-2">
                <div className="flex flex-col">
                    <h4 className="text-xl text-slate-700">{fullname}</h4>
                    <p className="text-xs text-slate-300">{title}</p>
                </div>
                <p className="text-sm text-slate-500 pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, atque assumenda iure doloribus maiores quos similique? Maiores ratione veritatis fugiat laudantium placeat eaque alias id impedit, voluptates adipisci praesentium est.</p>
                <Link to="/" className="text-sm mt-3 text-slate-600">Learn &gt;</Link>
            </div>
        </aside>
    )
}

export default BlogPage