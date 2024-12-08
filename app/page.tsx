import React from "react";

import TsPractice from "./components/tsPractice/TsPractice";


export default function Home() {


  //Optional params by (?)
// const greet =(name:string,id?:number)=>{

// Default Params => params:type = value
// const greet =(name:string,id:number = 1)=>{
// const greet =(name:string,id?:number)=>{
//   return {name,id}
  
// }
// console.log(greet('umar'));


// Arrays

// 1st Method of Arrays 
// const arr: number[] = [1,3,3,4,4]
// console.log(arr);

// 2nd Method of Arrays

// const arr1:number[] = new Array(2,4,7,6)
// console.log(arr1[2]);

// 3rd Method of Arrays

// const arr2:string[] = Array.of('ali','uamr','rizwan')
// console.log(arr2);
// console.log('push',arr2.push('usman'));
// console.log(arr2);
// console.log('pop',arr2.pop());
// console.log(arr2);
// console.log('shift',arr2.unshift('umari'));
// console.log(arr2);
// console.log(arr2.shift());
// console.log(arr2);

// for (let index = 0; index < arr2.length; index++) {
//   console.log(arr2[index]);
  
  
// }

// for(let i = 0 ;i<arr2.length;i++){
//   console.log(arr2[i]);
  
// }
//  for(const ar of arr2 ){
//   console.log(ar);
  
//  }

// arr2.forEach((ar)=>{
//   console.log(ar);
  
// })

// arr2.map((ar:string)=>{
// console.log('M ' + ar );

// })



// const resultArrays = arr2.filter((ar:string)=>{
//   if(ar==='li'){
//     return true
//   }else{
//     return false
//   }
// })
// console.log(resultArrays);


// -----------------Objects------------------------
// type Alias 
// type Student = {
// name:string;
// rollNo:number;
// address:{
//   colony:string;
//   block:number
// }
// }
// const student:Student = {
//   name:'umar',
//   rollNo:3,
//   address:{
//     colony : 'faisal town',
//     block :7
//   }
// }
// const student1:Student = {
//   name:'ali',
//   rollNo:3,
//   address:{
//     colony : 'faisal town',
//     block :7
//   }
// }

// console.log(student);
// console.log(student1);

// call signature method 

type Student = {
name:string;
age:number;
greet:(country:string)=>string
}

const students:Student={
  name:'farooq',
  age:43,
  greet:(country):string=>`Hi my name is ${students.name} and my age is ${students.age} and my country is ${country}`
}
const introduction :(student:Student)=>string = (students:Student)=>{
  const {name,age}= students
  return `my name is ${name} and my age is ${age} and i live in ${country}`
}
console.log(...data:introduction(student));
console.log(...data:student.greet(country:'pk'));

  
  
  return (
    <div >
      <TsPractice/>
   

    </div>
  );
}
