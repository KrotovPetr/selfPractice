function arrayDiffVeryFast(a, b) {
    let set = new Set();
    b.forEach((elem)=>{
        set.add(elem);
    })
    let ans = [];
    a.forEach((elem)=>{
        if(!set.has(elem)){
            ans.push(elem);
        }
    })
    return ans
}

console.log(arrayDiffVeryFast([1,2,2,2,3], [2]))
console.log(arrayDiffVeryFast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]))

