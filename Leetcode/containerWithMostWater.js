var maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let width = right - left;
        maxArea = Math.max(
            maxArea,
            Math.min(height[left], height[right]) * width
        );
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

// console.log(maxArea([1,2,1]))
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
