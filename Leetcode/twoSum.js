/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let bestIndex = [left, right];
    while (left < right) {
        if (
            Math.abs(target - nums[left] - nums[right]) <
            Math.abs(target - bestIndex[0] - bestIndex[1])
        ) {
            bestIndex = [left, right];
        }
        if (nums[left] + nums[right] < target) {
            left++;
        }
        if (nums[left] + nums[right] > target) {
            right--;
        }
        if (nums[left] + nums[right] === target) {
            return [left, right];
        }
    }
    // if(Math.abs(target - nums[left] - nums[right])<Math.abs(target - bestIndex[0] - bestIndex[1])){
    //     bestIndex=[left,right]
    // }
    return bestIndex;
};

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
