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

// type Student = {
// name:string;
// age:number;
// greet:(country:string)=>string
// }

// const students:Student={
//   name:'farooq',
//   age:43,
//   greet:(country):string=>`Hi my name is ${students.name} and my age is ${students.age} and my country is ${country}`
// }
// console.log(students);

// const introduction : (student:Student)=>string = (students:Student)=>{
//   const {name,age} = students
//   return `Hi my name is ${name} and age is ${age} and  i live in ${country}`
// }
// console.log(students.greet('pakistan'));
// console.log(introduction());
// console.log(...data:introduction(students));

// type Product = {
//   product: string;
//   price:number;
//   description:(country:string)=>string
// }
//   const products:Product={
//     product:'laptop',
//     price:456,
//     description:(country):string =>`Hi this is ${products.product} and his price is ${products.price} and this is take from ${country}`
//   }
//   console.log(products.description('india'));


// Enums in ts
// enum Roles {
//   user='user',
//   admin='admin'
// }
// type loginDetails = {
//   email:string;
//   password:string;
//   role:Roles
// }
// const person4:loginDetails = {
//   email:'ufmarE@gmail.com',
//   password:'245umar',
//   role:Roles.user
// }
// const person5:loginDetails = {
//   email:'uf@gmail.com',
//   password:'umar',
//   role:Roles.admin
// }
// console.log(person4,'this is unable for website updating');
// console.log(person5,'this is able for website updating');

// // Tupples in TS 

// type Teacher =readonly [string,number,string]
// // readonly property not allow to add data without defination
// const teacherDetails : Teacher = ['umar', 55 , 'male']
// const teacher1Details : Teacher = ['ali', 55 , 'male']
// // const teacher2Details = teacher1Details.push('sakoon')
// console.log(teacherDetails);
// console.log(teacher1Details);

// const user = (value:string | number):string | boolean =>{
//   if(typeof value === 'number'){
//     return true
//   }
//   else if(typeof value === 'string'){
//     return false
//   }
// }
 

// console.log(user(3));
// console.log(user('ali'));

// Intersection in TS 

// type Person = {
//   name:string;
//   age:number
// }
// type Employee = {
//   id:number;
//   department:string
// }
// type EmployeeDetails = Person & Employee;
// const employee:EmployeeDetails = {
//   name:'farooq',
//   age:45,
//   id:56,
//   department:'it'
// }
// type EmployeeDetails = Person | Employee;
// const employee:EmployeeDetails = {
//   name:'farooq',
//   age:45,
//   id:56,
//   department:'it'
// }
// console.log(employee);

// Generic in TS 
// function logAndTurns <t>(value:t):t{
 
//   return value
  
// }
// const numberResult = logAndTurns<number>(6)
// const strResult = logAndTurns<string>('hey')
// const boolResult = logAndTurns<boolean>(true)
// console.log(numberResult);
// console.log(strResult);
// console.log(boolResult);

// function add<T,U>(a:T , b:U ,c:boolean){
//   console.log( a);
//   console.log( b);
//   return c ? `${a} and ${b} are combined` : 'a and b are not combined'
// }
// console.log(add('9',9,false));
// console.log(add('9',9,true));


interface Student {
  name: string;
  age:number
}

const student:Student={
  name:'ali',
  age:45
}
console.log(student);



  
  return (
    <div >
      <TsPractice/>
   

    </div>
  );
}
