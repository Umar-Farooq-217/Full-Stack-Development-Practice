import React from 'react'

export default function JsPractice() {
    


function twoSums (nums,target){
    for (let index = 0; index < nums.length; index++) {
        const compliment =target- nums[index] 
       console.log(`index ${index} , Number : ${nums[index]} and substraction : ${compliment}`);
      
       for (let j = 0; j < nums.length; j++) {
        const element = nums[j] ;
        console.log(`index ${j} , Number : ${nums[j]} and substraction : ${element}`); 
    }
   
}
var nums = [3, 2, 4];
var target = 6;
const result = twoSums(nums, target);

console.log(result);

  return (
    <div>
      
    </div>
  )
}

}