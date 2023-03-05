var findMedianSortedArrays = function (nums1, nums2) {
    //vars
    let l1 = 0;
    let l2 = 0;
    let medArr = [];

    while (l1 !== nums1.length && l2 !== nums2.length) {
        if (nums1[l1] > nums2[l2]) {
            medArr.push(nums2[l2]);
            l2++;
        }
        if (nums1[l1] <= nums2[l2]) {
            medArr.push(nums1[l1]);
            l1++;
        }
    }
    if (l1 !== nums1.length) {
        medArr = medArr.concat(nums1.slice(l1, nums1.length));
    }
    if (l2 !== nums2.length) {
        medArr = medArr.concat(nums2.slice(l2, nums2.length));
    }
    console.log(medArr);

    let middle = Math.floor((medArr.length - 1) / 2);
    if (medArr.length % 2 === 0) {
        return (medArr[middle] + medArr[middle + 1]) / 2;
    } else {
        return medArr[middle];
    }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
