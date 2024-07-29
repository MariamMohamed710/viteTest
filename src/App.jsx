import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
import NotFound from './component/NotFound/NotFound'

function App() {
  let routers= createBrowserRouter([
    {path:'',element:<Layout/> , children: [
      {index:true , element: <Home/>},
      {path:'about' , element: <About/>},
      {path:'portfolio' , element: <Portfolio/>},
      {path:'contact' , element: <Contact/>},
      {path:'*' , element: <NotFound/>},
    ]}
  ]
  )

  return <RouterProvider router={routers}></RouterProvider>
}

export default App
