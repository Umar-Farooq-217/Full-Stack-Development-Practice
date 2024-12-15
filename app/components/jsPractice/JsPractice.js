import React from 'react'

export default function JsPractice() {
    
var nums = [3,2,4];
var target = 6;

function twoSums (nums,target){
    for (let index = 0; index < nums.length; index++) {
        const compliment = nums[index] - target
       console.log(compliment);
      
       for (let j = 0; j < array.length; j++) {
        const element = array[j];
        if(element===compliment){
            return [index, j]
        }
       }
       
    }
    return []
}
console.log(twoSums(nums, target));
;
  return (
    <div>
      
    </div>
  )
}

