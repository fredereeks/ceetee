/* https://www.youtube.com/watch?v=Xoz31I1FuiY */
import React, {lazy, Suspense, useTransition} from 'react'
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import Footer from './components/Footer'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'

const About = lazy(() => import ('./pages/About'))
const BlogPage = lazy(() => import ('./pages/BlogPage'))
const Contact = lazy(() => import ('./pages/Contact'))
const Course = lazy(() => import ('./pages/Course'))
const CourseSingle = lazy(() => import ('./pages/CourseSingle'))
const CoursesPage = lazy(() => import ('./pages/CoursesPage'))
const Error = lazy(() => import ('./pages/Error'))
const Home = lazy(() => import ('./pages/Home'))
const Login = lazy(() => import ('./pages/Login'))
const News = lazy(() => import ('./pages/News'))
const Signup = lazy(() => import ('./pages/Signup'))
const SingleBlog = lazy(() => import ('./pages/SingleBlog'))
const SkillAssessment = lazy(() => import ('./pages/SkillAssessment'))
const TeamTraining = lazy(() => import ('./pages/TeamTraining'))
const Partners = lazy(() => import ('./pages/Partners'))

// const Home = lazy(() => import ('./pages/Home'))

function App() {

  // const [isPending, startTransition] = useTransition()

  const Layout = () => {
    return(
      <>
        <Header />
          <Suspense fallback={<></>}><Outlet /></Suspense>
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Suspense fallback={<></>}><Home />,</Suspense>,
        },
        {
          path: "/about",
          element: <Suspense fallback={<></>}><About /></Suspense>,
        },
        {
          path: "/blogs",
          element: <Suspense fallback={<></>}><BlogPage /></Suspense>,
        },
        {
          path: "/contact",
          element: <Suspense fallback={<></>}><Contact /></Suspense>,
        },
        {
          path: "/courses/:coursename",
          element: <Suspense fallback={<></>}><Course /></Suspense>,
        },
        {
          path: "/course/:coursename/:id",
          element: <Suspense fallback={<></>}><CourseSingle /></Suspense>,
        },
        {
          path: "/courses",
          element: <Suspense fallback={<></>}><CoursesPage /></Suspense>,
        },
        {
          path: "/login",
          element: <Suspense fallback={<></>}><Login /></Suspense>,
        },
        {
          path: "/news",
          element: <Suspense fallback={<></>}><News /></Suspense>,
        },
        {
          path: "/partners",
          element: <Suspense fallback={<></>}><Partners /></Suspense>,
        },
        {
          path: "/signup",
          element: <Suspense fallback={<></>}><Signup /></Suspense>,
        },
        {
          path: "/post/:id",
          element: <Suspense fallback={<></>}><SingleBlog /></Suspense>,
        },
        {
          path: "/solutions",
          element: <Suspense fallback={<></>}><Course /></Suspense>,
        },
        {
          path: "/solutions/skills-assessment",
          element: <Suspense fallback={<></>}><SkillAssessment /></Suspense>,
        },
        {
          path: "/solutions/team-training",
          element: <Suspense fallback={<></>}><TeamTraining /></Suspense>,
        },
      ],
      errorElement: <Error />,
      // lazy: <Skeleton  type={"courses"} total={3} key={419} />,
    }
  ])
  return (
    <div className="bg-slate-50 pt-10">
      <ErrorBoundary>
        <RouterProvider router={router}></RouterProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
