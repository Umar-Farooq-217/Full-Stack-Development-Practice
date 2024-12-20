'use client'

export default function BuiltInFunctionsInJs() {
  
    // Math.random()
    // var r = Math.random();
    // var a1 = 1 ;
    // var b1 = 100;
    // var r1 = a1 + (b1 - a1)*Math.random()
    // console.log(r1);

    // min and max function
    // var arr = [3, 6,3, 6,8, 9]
    // console.log(Math.min(3, 6,3, 6,8, 9));
    // console.log(Math.max(3, 6,3, 6,8, 9));

    // unshift() and shift() add data on first index and remove data from first index
    // var arra = [0 ,2,3,4,5]
    // arra.unshift(9) // add at begining of array
    // console.log(arra);
    // arra.shift() // remove from begining of array
    // console.log(arra);

    // push() and pop() add and remove data at last of array 
    // arra.push(34)
    // console.log(arra);
    // arra.pop()
    // console.log(arra);
 
//     const twoSums = (a , b ,)=>{
// for (let index = 0; index < a.length; index++) {
//     const element = b - a[index];
//     for (let j = index + 1 ; j < a.length; j++) {
//         if(a[j] === element ){
//         console.log(`'indices',${index} , ${j}`);
       
        
//         return}
//     }
    
   
// } 
// console.log("No two sums found");
// }


//     var a = [2,3,4,5]
//     var b = 7;
//     twoSums(a,b)


// .toExponential() is used to reduce numbers and show number in power form
// var num = 2356675679.45;
// let num1 = num.toExponential(3)
// console.log(num1);

// toString() if you want to convert number to string
// var num = 2356456;
// var num2 = num.toString()
// console.log(typeof num2);

// Basic Constructor
// First Method 

// class Person  {
//   constructor(name,age){
//     this.name = name;
//     this.age = age
//   }
//   greet(){
//     console.log(`My name is ${this.name} and i am ${this.age} years old`);
    
//   }
// }

// const person1 = new Person('ali',43)
// person1.greet()

// use super in Second Method of Constructor 
// class Animal {
//   constructor(name){
//     this.name = name
    
//   }
// speak(){
//   console.log(`${this.name} makes noise`);
  
// }
// }

// class Dog extends Animal {
//   constructor(name,breed){
//     super(name)
//     this.breed = breed
//   }
//   describe(){
//     console.log(`This is ${this.name} and his breed is ${this.breed}`);
    
//   }
// }
// const dog = new Dog('buddy','GERman shefer')
// dog.speak()
// dog.describe()

// class School {
//   constructor(teacher,student){
//     this.teacher = teacher
//     this.student = student
//   }
//   speech(){
//     console.log(`${this.teacher} is my teacher and my ${this.student} is`);
    
//   }
// }
// const school = new School('Shahid','Umar')
// school.speech()

 var stu = {
  greet : 'Hey'
 }

 var d = stu;
 stu.greet('hello')
 console.log(d.greet);
 

  return (
    <div>
      Built In Functions in Js
     
    </div>
  )
}
