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

// className Person  {
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
// className Animal {
//   constructor(name){
//     this.name = name
    
//   }
// speak(){
//   console.log(`${this.name} makes noise`);
  
// }
// }

// className Dog extends Animal {
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

// className School {
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

//  var stu = {
//   greet : function(message){
//     this.greet = message
//   }
//  }

//  var d = stu;
// //  stu.greet('hello')
//  stu.greet('bye')
//  console.log(d);
 
// var ar = [2,4,6,7]
// ar.push()

// function calculation(price){
//   let arr = []
//   console.log(arr);
  
//   for (let i = 0; i < price.length; i++) {
//     let relief = 0;
//     for (let j = i + 1; j < price.length; j++) {
//       if(price[j] <= price[i]){
//         relief = price[j];
//         break
//       }
      
//     }
// arr.push(   price[i] - relief)
    
//   }
//   return arr
// }
// const price = [8,4,6,2,3]
// calculation(price)
  return (
    <div>
   
      <div classNameName="grid lg:grid-cols-6  md:grid-cols-4 gap-5  ">
        <div classNameName="bg-red-400 text-center text-5xl    md:row-span-4 p-5">item 1</div>

        <div classNameName="lg:col-span-4 md:col-span-2 grid  grid-cols-2 md:grid-cols-2 gap-4">
          <div classNameName="bg-green-400 text-center text-5xl ">item 2</div>
        <div classNameName="bg-blue-400 text-center text-5xl ">item 3 </div>
        <div classNameName="bg-black text-center text-5xl  ">item 4</div>
        <div classNameName="bg-pink-400 text-center text-5xl ">item 5</div>
        <div classNameName="bg-yellow-400 text-center text-5xl ">item 6</div>
        <div classNameName="bg-gray-600 text-center text-5xl  ">item 7</div>
        </div>
        
        <div classNameName="bg-indigo-600 text-center text-5xl lg:row-span-4 ">item 8</div>
      </div>
     
    </div>
  )
}
