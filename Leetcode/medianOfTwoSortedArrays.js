/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let ansArr = [];
    nums1.forEach((elem) => {
        while (elem > nums2[0] && nums2.length > 0) {
            ansArr.push(nums2[0]);
            nums2.shift();
        }
        ansArr.push(elem);
    });
    if (nums2.length !== 0) {
        nums2.forEach((elem) => {
            ansArr.push(elem);
        });
    }
    if (ansArr.length % 2 === 1) {
        return ansArr[Math.ceil(ansArr.length / 2 - 1)];
    } else {
        return (
            (ansArr[Math.ceil(ansArr.length / 2)] +
                ansArr[Math.ceil(ansArr.length / 2) - 1]) /
            2
        );
    }
};
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));
