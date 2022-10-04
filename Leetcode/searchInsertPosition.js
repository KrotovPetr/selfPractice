/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let insPos = 0;
    nums.forEach((elem,current)=>{
        if(elem<target){
            insPos++;
        }
    })
    return insPos;
};