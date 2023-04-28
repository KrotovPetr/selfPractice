function merge(nums1, m, nums2, n) {
    // let nums1Pointer = 0;
    // let nums2Pointer = 0;
    // let bufArr = [];
    // let tailArr = [nums1.slice(0,m), nums2
    // while(nums1Pointer<m || nums2Pointer<n){
    //     if(nums1Pointer === m){
    //         bufArr.push(nums2[nums2Pointer]);
    //         nums2Pointer++;
    //     }
    //     else if(nums2Pointer === n){
    //         bufArr.push(nums1[nums1Pointer]);
    //         nums1Pointer++;
    //     } else if(nums1[nums1Pointer]>nums2[nums2Pointer]){
    //        bufArr.push(nums2[nums2Pointer]);
    //        nums2Pointer++;
    //    } else {
    //        bufArr.push(nums1[nums1Pointer]);
    //        nums1Pointer++;
    //    }
    // }
    //
    // nums1 = bufArr;
    // console.log(nums1);
    const len = m + n
    nums1.splice(len-n)
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i])
    }

    for (let j = 1; j < len; j++) {
        if (nums1[j-1] || nums1[j-1] === 0) {
            if (nums1[j] < nums1[j-1]) {
                let tmp = nums1[j-1]
                nums1[j-1] = nums1[j]
                nums1[j] = tmp
                j = j-2
            }
        }
    }
    console.log(nums1)

}

merge([46,55,88,0,0,0,0], 3 ,[18,29,80,90], 4)