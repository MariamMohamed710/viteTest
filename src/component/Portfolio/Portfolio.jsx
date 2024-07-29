import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Portfolio.module.css'
import po1 from '../../assets/po1.png'
import po2 from '../../assets/po2.png'
import po3 from '../../assets/po3.png'
export default function Portfolio() {
  return <>
  <h3 className='text-5xl'>PORTFOLIO COMPONENT</h3>
  <div className="w-screen h-screen mx-auto py-8 justify-between">
    <div className="flex flex-wrap ">
      <div className='w-1/3 p-2'>
        <img src={po1} alt="" width={400}/>
      </div>
      <div className='w-1/3 p-2'>
        <img src={po2} alt="" width={400}/>
      </div>
      <div className='w-1/3 p-2'>
        <img src={po3} alt="" width={400}/>
      </div>
      <div className='w-1/3 p-2'>
        <img src={po3} alt="" width={400}/>
      </div>
      <div className='w-1/3 p-2'>
        <img src={po1} alt="" width={400}/>
      </div>
      <div className='w-1/3 p-2'>
        <img src={po2} alt="" width={400}/>
      </div>
    </div>
  </div>
  </>
}
 