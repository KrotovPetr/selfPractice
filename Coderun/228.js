function numsFinder(nums, k) {
    nums =nums.sort((a,b)=>{
        return a===b ? 0 : a<b ? -1 :1;
    })
    // if(nums.length === 0){
    //     return false;
    // }

    let leftPointer = nums.length-1
    for(let i =0;i<nums.length;i++){
        while(nums[i]+nums[leftPointer]>=k){
            if(nums[i]+nums[leftPointer] === k){
                return true;
            }
            leftPointer--;
        }
        leftPointer = nums.length-1;
    }

    return false;
}

// function numsFinder(nums, k) {
//     let temp = [];
//     let len = nums.length;
//     for(let i = 0; i < len; i++){
//         console.log(temp)
//         if(temp[nums[i]] === k - nums[i]){
//             return true;
//         }
//         else{
//             temp[k - nums[i]] = nums[i];
//         }
//     }
//     return false;
// }

let nums = [10, 15, 3, 7];
let k = 17
console.log(numsFinder(nums, k));