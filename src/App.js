/* https://www.youtube.com/watch?v=Xoz31I1FuiY */
import React, {lazy, Suspense} from 'react'
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

import Footer from './components/Footer'
import Header from './components/Header'

const About = lazy(() => import ('./pages/About'))
const Login = lazy(() => import ('./pages/Login'))
const Signup = lazy(() => import ('./pages/Signup'))
const Main = lazy(() => import ('./pages/Main'))
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
          element: <Main />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/partners",
          element: <Partners />
        },
        {
          path: "/signup",
          element: <Signup />
        },
      ]
    }
  ])
  return (
    <div className="bg-slate-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
