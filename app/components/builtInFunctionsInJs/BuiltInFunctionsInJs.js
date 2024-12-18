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

    const twoSums = (a , b ,)=>{
for (let index = 0; index < a.length; index++) {
    const element = b - a[index];
    for (let j = index + 1 ; j < a.length; j++) {
        if(a[j] === element ){
        console.log(`'indices',${index} , ${j}`);
       
        
        return}
    }
    
   
} 
console.log("No two sums found");
}
// const twoSums = (a, b) => {
//     for (let index = 0; index < a.length; index++) {
//         const element = b - a[index]; // Find the target complement
//         for (let j = index + 1; j < a.length; j++) { // Start from index + 1 to avoid duplicates
//             if (a[j] === element) { // Check if the complement exists in the remaining array
//                 console.log(`Indices: ${index}, ${j}`);
//                 return; // Exit after finding the first match
//             }
//         }
//     }
//     console.log("No two sums found");
// };

    var a = [2,3,4,5]
    var b = 7;
    twoSums(a,b)

  return (
    <div>
      Built In Functions in Js
     
    </div>
  )
}
