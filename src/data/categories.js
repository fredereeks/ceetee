import { IoIosLaptop, IoIosMan, IoIosNotificationsOutline, IoLogoEuro, IoMdBriefcase, IoMdColorPalette } from 'react-icons/io'

export const categories = [
    {
        id: 341,
        icon: <IoMdColorPalette className='text-2xl text-sky-500 group-hover:text-white md:text-3xl' />,
        background: "bg-sky-100 group-hover:bg-sky-500",
        title: "Design & Development",
        text: "4+ Courses Here"
    },
    {
        id: 342,
        icon: <IoIosNotificationsOutline className='text-2xl text-purple-500 group-hover:text-white md:text-3xl' />,
        background: "bg-purple-100 group-hover:bg-purple-500",
        title: "Marketing & Communication",
        text: "6+ Courses Here"
    },
    {
        id: 343,
        icon: <IoIosLaptop className='text-2xl text-yellow-500 group-hover:text-white md:text-3xl' />,
        background: "bg-yellow-100 group-hover:bg-yellow-500",
        title: "Digital Marketing",
        text: "9+ Courses Here"
    },
    {
        id: 344,
        icon: <IoMdBriefcase className='text-2xl text-indigo-500 group-hover:text-white md:text-3xl' />,
        background: "bg-indigo-100 group-hover:bg-indigo-500",
        title: "Business & Counselling",
        text: "5+ Courses Here"
    },
    {
        id: 345,
        icon: <IoLogoEuro className='text-2xl text-pink-500 group-hover:text-white md:text-3xl' />,
        background: "bg-pink-100 group-hover:bg-pink-500",
        title: "Finance Management",
        text: "7+ Courses Here"
    },
    {
        id: 346,
        icon: <IoIosMan className='text-2xl text-green-500 group-hover:text-white md:text-3xl' />,
        background: "bg-green-100 group-hover:bg-green-500",
        title: "Self Development",
        text: "10+ Courses Here"
    },
    // {
    //     id: 348,
    //     icon: <IoMdFlashlight className='text-lg md:text-2xl text-white' group-hover:text-white />,
    //     3ackground: "bg-gradient-to-br from-orange-500 to-orange-600",
    // color: '2xl text-white',
    //     title: "Creative Thinking",
    //     text: "Our course brings out the best in you that you never knew was even there. We guarantee to send your creativity and problem-solving skills nuclear!"
    // },
]