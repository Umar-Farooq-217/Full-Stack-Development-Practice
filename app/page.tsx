'use client'
import {  useState } from "react";

export default function Home() {
  const [store,setStore]=useState<number | null>(null)
  const [first,setFirst]=useState('')
  const [second,setSecond]=useState('')
  const a = parseFloat(first)
  const b = parseFloat(second)
  let str = 'umar';
  str='ali'
  str='rizwan'
  console.log(str);

  
const addHandler=(a:number,b:number)=>{
  const result = a + b
  setStore(result)
}
  
  
  return (
    <div className="">
      <input type="text" placeholder="Enter Your First Value" onChange={(e)=>setFirst(e.target.value)} />
      <input type="text" placeholder="Enter Your Second Value" onChange={(e)=>setSecond(e.target.value)} />
      <button onClick={()=>addHandler(a,b)}>Add</button>
      <p>Add : {store}</p>

    </div>
  );
}
