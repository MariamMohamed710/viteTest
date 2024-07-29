import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Home.module.css'
import avatar from '../../assets/avataaars.svg'

export default function Home() {
   
  return <>
  <div className='text-white bg-amber-300  flex justify-center items-center h-screen w-screen' >
    <div className="flex justify-center items-center text-center">
      <div >
      <img src={avatar} width={200} className='mx-auto' alt="" />
      <h3 className='text-5xl'>START FRAMEWORK</h3>
      <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </div>
  </>
}
