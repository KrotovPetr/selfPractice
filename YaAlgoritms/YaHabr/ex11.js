function getArr(arr){
    let ans = [];
    console.log(arr);
    arr.forEach((elem)=>{
        if(typeof elem === "number"){
            ans.push();
        } else {
            ans.push(...getArr(elem));
        }
    })
    
    return ans;
}
function getPlainArray(arr){
    let ans = [];
    let dict = new Map();
    ans.push(...getArr(arr));
    console.log(ans);
    return ans;
}
console.log(getPlainArray([1, 2, 3, [5, 5], 6, [7, 8, 9, [10, 11]]]));