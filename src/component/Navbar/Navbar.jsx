import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/download.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Navbar() {
   
  return <>
 
  <nav className='bg-slate-800 lg:fixed top-0 left-0 right-0 z-50 p-4 text-white font-semibold'>
    <div className="container mx-auto text-center flex flex-col lg:flex-row justify-between items-center py-4 capitalize ">
      <div className='flex flex-col lg:flex-row'>
        <Link className=' text-4xl' to=''>START FRAMEWORK</Link>
      </div>

      <div className='flex flex-col lg:flex-row'>
      <ul className='flex flex-col lg:flex-row'>
          <li className='mx-2'> <NavLink  to='about'>ABOUT</NavLink> </li>
          <li className='mx-2'> <NavLink  to='portfolio'>PORTFOLIO</NavLink> </li>
          <li className='mx-2'> <NavLink  to='contact'>CONTACT</NavLink> </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
}
 