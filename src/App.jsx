// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from 'react'
import Home from './Components/Home'
import './App.css'
const Contact= lazy(()=>import('./Components/Contact'))
import Navigation from './components/Navigation'
import { Outlet, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
const AboutMe = lazy(()=>import('./Components/AboutMe'))
const Skills_Edu = lazy(()=>import('./Components/Skills_Edu'))
import Loader from './Components/Loader'
import ProjectDisplay from './Components/Projects/ProjectDisplay'
import SocialMedia from './Components/SocialMedia'

const App = () => {
  return (
    <div className='home'>
      <SocialMedia/>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
      <Navigation/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <App />,

    children: [
      {
        path: "/",
        exact: true,
        element: <Home />,
      },
      {
        path: "/about",
        exact: true,
        element: <AboutMe/>,
      },
      {
        path: "/skills",
        exact: true,
        element: <Skills_Edu />,
      },
      {
        path: "/projects",
        exact: true,
        element: <ProjectDisplay />,
      },
      {
        path: "/contact",
        exact: true,
        element: <Contact />,
      },
    ],
  },
]);

export const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default App