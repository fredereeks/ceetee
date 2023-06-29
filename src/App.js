/* https://www.youtube.com/watch?v=Xoz31I1FuiY */
import React, {lazy, Suspense} from 'react'
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import Footer from './components/Footer'
import Header from './components/Header'

const About = lazy(() => import ('./pages/About'))
const BlogPage = lazy(() => import ('./pages/BlogPage'))
const Contact = lazy(() => import ('./pages/Contact'))
const Error = lazy(() => import ('./pages/Error'))
const Login = lazy(() => import ('./pages/Login'))
const News = lazy(() => import ('./pages/News'))
const Signup = lazy(() => import ('./pages/Signup'))
const SingleBlog = lazy(() => import ('./pages/SingleBlog'))
const Home = lazy(() => import ('./pages/Home'))
// const Home = lazy(() => import ('./pages/Home'))
const Partners = lazy(() => import ('./pages/Partners'))

// const Home = lazy(() => import ('./pages/Home'))

function App() {

  const Layout = () => {
    return(
      <>
        <Header />
        <Suspense fallback={"<p>Loading...</p>"}><Outlet /></Suspense>
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
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/blogs",
          element: <BlogPage />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/news",
          element: <News />
        },
        {
          path: "/partners",
          element: <Partners />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/post/:id",
          element: <SingleBlog />
        },
      ],
      errorElement: <Error />,
      // lazy: <Skeleton  type={"courses"} total={3} key={419} />,
    }
  ])
  return (
    <div className="bg-slate-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
