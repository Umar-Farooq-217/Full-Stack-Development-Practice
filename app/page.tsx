import React from "react";

import TsPractice from "./components/tsPractice/TsPractice";


export default function Home() {
  //Optional params by (?)
// const greet =(name:string,id?:number)=>{

// Default Params => params:type = value
// const greet =(name:string,id:number = 1)=>{
const greet =(name:string,id?:number)=>{
  return {name,id}
  
}
console.log(greet('umar'));





  
  
  return (
    <div >
      <TsPractice/>
   

    </div>
  );
}
