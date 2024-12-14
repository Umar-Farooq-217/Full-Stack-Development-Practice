var nums = [3,2,4];
var target = 6;

function twoSums (nums,target){
    // let numMap = new map()
    for (let index = 0; index < nums.length; index++) {
        const compliment = nums[index] - target
       console.log(compliment);
       if(compliment){
        const num2 = compliment === nums[index]
       }
       console.log(compliment,num2);
       
    }
}
twoSums(nums, target);