import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './About.module.css'

export default function About() {

  return <>
  <div className='w-screen py-8 h-screen  justify-center items-center bg-slate-500 text-white'> 
      <h3 className='text-white text-center p-8 m-8'>ABOUT COMPONENT</h3>
      <div className="container mx-auto p-8 m-8 text-center">
         <div className="flex flex-wrap justify-center items-center">
          <div className="w-1/2">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="w-1/2">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          </div> 
      </div> 
      
  </div>
  </>

}
 