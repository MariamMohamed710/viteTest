import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Footer.module.css'

export default function Footer() {
   
  let [hei , sethei]= useState(0);

 // sethei(calc(-106px + 100 vh));

  return <>
 <div className="w-screen bg-cyan-900 py-8 text-white">
     <div className=' flex flex-col lg:flex-row justify-around items-center py-2 text-center '>

     <div className=' w-1/3 m-5 p-5'>
        <h3 className='text-3xl' >LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>

      <div className=' w-1/3 m-5 p-5'>
      <h3 className='text-3xl' >AROUND THE WEB</h3>
      <ul>
        <li className='mx-2 space-x-2'>
          <i className='fab fa-facebook-f'></i>
          <i className='fab fa-youtube'></i>
          <i className='fab fa-linkedin-in'></i>
          <i className='fab fa-instagram'></i>
        </li>
      </ul>
      </div>

      <div className=' w-1/3 m-5 p-5'>
      <h3 className='text-3xl' >ABOUT FREELANCER</h3>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>

     </div>

    </div>
<div className='text-center bg-cyan-950 p-2'>
  <p>Copyright © Your Website 2021</p>
</div>
  </>
}
 