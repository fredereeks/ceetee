/* https://www.youtube.com/watch?v=Xoz31I1FuiY */
import React, {lazy, Suspense} from 'react'
import { createHashRouter, RouterProvider, Outlet} from "react-router-dom"

import Footer from './components/Footer'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'

const About = lazy(() => import ('./pages/About'))
const BlogPage = lazy(() => import ('./pages/BlogPage'))
const Coaching = lazy(() => import ('./pages/Coaching'))
const Contact = lazy(() => import ('./pages/Contact'))
const Course = lazy(() => import ('./pages/Course'))
const CourseSingle = lazy(() => import ('./pages/CourseSingle'))
const CoursesPage = lazy(() => import ('./pages/CoursesPage'))
const CustomizedTraining = lazy(() => import ('./pages/CustomizedTraining'))
const Error = lazy(() => import ('./pages/Error'))
const Home = lazy(() => import ('./pages/Home'))
const Login = lazy(() => import ('./pages/Login'))
const News = lazy(() => import ('./pages/News'))
const Signup = lazy(() => import ('./pages/Signup'))
const SingleBlog = lazy(() => import ('./pages/SingleBlog'))
const SkillAssessment = lazy(() => import ('./pages/SkillAssessment'))
const TeamTraining = lazy(() => import ('./pages/TeamTraining'))
const Partners = lazy(() => import ('./pages/Partners'))
const VirtualTraining = lazy(() => import ('./pages/VirtualTraining'))

// const Home = lazy(() => import ('./pages/Home'))

function App() {

  // const [isPending, startTransition] = useTransition()

  const Layout = () => {
    return(
      <>
        <Header />
          <ErrorBoundary>
            <Suspense fallback={<main><Loader /></main>}><Outlet /></Suspense>
          </ErrorBoundary>
        <Footer />
      </>
    )
  }

  const Loader = () => (<section className="min-h-[60vh] w-full flex flex-col justify-center items-center gap-3">
    {/* <h3 className="py-20 text-xl md:text-3xl text-slate-600 text-center">Please wait a moment...</h3> */}
    <div className="relative h-3 w-3 rounded-full transition-all duration-75 bg-blue-400 before:absolute before:-left-[200%] before:bg-cyan-600 before:animate-bounce before:h-full before:w-full before:transition-all before:duration-75 after:absolute after:left-[200%] after:bg-indigo-600 after:animate-pulse after:h-full after:w-full after:transition-all after:duration-75"></div>
  </section>)

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Suspense fallback={<main><Loader /></main>}><Home />,</Suspense>,
        },
        {
          path: "/about",
          element: <Suspense fallback={<main><Loader /></main>}><About /></Suspense>,
        },
        {
          path: "/blogs",
          element: <Suspense fallback={<main><Loader /></main>}><BlogPage /></Suspense>,
        },
        {
          path: "/contact",
          element: <Suspense fallback={<main><Loader /></main>}><Contact /></Suspense>,
        },
        {
          path: "/courses/:coursename",
          element: <Suspense fallback={<main><Loader /></main>}><Course /></Suspense>,
        },
        {
          path: "/course/:coursename/:id",
          element: <Suspense fallback={<main><Loader /></main>}><CourseSingle /></Suspense>,
        },
        {
          path: "/courses",
          element: <Suspense fallback={<main><Loader /></main>}><CoursesPage /></Suspense>,
        },
        {
          path: "/login",
          element: <Suspense fallback={<main><Loader /></main>}><Login /></Suspense>,
        },
        {
          path: "/news",
          element: <Suspense fallback={<main><Loader /></main>}><News /></Suspense>,
        },
        {
          path: "/partners",
          element: <Suspense fallback={<main><Loader /></main>}><Partners /></Suspense>,
        },
        {
          path: "/signup",
          element: <Suspense fallback={<main><Loader /></main>}><Signup /></Suspense>,
        },
        {
          path: "/post/:id",
          element: <Suspense fallback={<main><Loader /></main>}><SingleBlog /></Suspense>,
        },
        {
          path: "/solutions",
          element: <Suspense fallback={<main><Loader /></main>}><Course /></Suspense>,
        },
        {
          path: "/solutions/coaching",
          element: <Suspense fallback={<main><Loader /></main>}><Coaching /></Suspense>,
        },
        {
          path: "/solutions/customized-training",
          element: <Suspense fallback={<main><Loader /></main>}><CustomizedTraining /></Suspense>,
        },
        {
          path: "/solutions/skills-assessment",
          element: <Suspense fallback={<main><Loader /></main>}><SkillAssessment /></Suspense>,
        },
        {
          path: "/solutions/team-training",
          element: <Suspense fallback={<main><Loader /></main>}><TeamTraining /></Suspense>,
        },
        {
          path: "/solutions/virtual-corporate-training",
          element: <Suspense fallback={<main><Loader /></main>}><VirtualTraining /></Suspense>,
        },
      ],
      errorElement: <Suspense fallback={<main><Loader /></main>}><Error /></Suspense>,
      // lazy: <Skeleton  type={"courses"} total={3} key={419} />,
    }
  ])
  return (
    <div className="bg-slate-50 pt-10">
      {/* <ErrorBoundary> */}
        <RouterProvider router={router}></RouterProvider>
      {/* </ErrorBoundary> */}
    </div>
  );
}

export default App;
