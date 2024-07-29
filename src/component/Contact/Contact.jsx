import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Contact.module.css'

export default function Contact() {
   
  return <>
  <h3 className='text-5xl'>CONATCT SECTION</h3>

  <div className='py-5 h-full'>
    <div className="w-screen  py-8"> 
       <div className='w-1/3 mx-auto   my-2 rounded-md border '>
       <input  id="name" type="text" placeholder='UserName'/>
       </div>

        <div className='w-1/3 mx-auto  my-2 rounded-md border '>
        <input id="userAge" type="number" placeholder='UserAge' />
        </div>
       
       <div className='w-1/3 mx-auto   my-2 rounded-md border '>
       <input id="userEmail" type="email" placeholder='UserEmail'  />
       </div>
        
       <div className='w-1/3 mx-auto  my-2 rounded-md border '>
       <input id="passward" type="passward" placeholder='UserPassward' />
       </div>
        
       <div className='w-1/3 mx-auto'>
       <button className='btn ' >Send Message</button>
       </div>
    </div>
  </div>

  </>
}
 