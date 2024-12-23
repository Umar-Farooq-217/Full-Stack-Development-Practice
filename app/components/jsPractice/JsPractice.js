'use client'
import React, { useEffect, useState } from 'react'

export default function JsPractice() {
const [fun ,setFun] = useState([])
useEffect(()=>{
  console.log('before');
  
  const timeOutId = setTimeout(()=>{
  setFun((prevFun)=>[...prevFun,'Hello, this is a delayed function!'])
  },1100)
  console.log('after');
return ()=>clearTimeout(timeOutId)
  },[])
 
  
  
  

  return (
    <div>
      <h1>{fun}</h1>
      
    </div>
  )
}

