import React from 'react'

export default function JsPractice() {

const names = (message)=>{
  // console.log(' function delayed');
  console.log(message);}
console.log('before');


setTimeout(() => names('Hello, this is a delayed function!'), 300);
// clearTimeout(setTimeout)
console.log('after');
  return (
    <div>
      
    </div>
  )
}

