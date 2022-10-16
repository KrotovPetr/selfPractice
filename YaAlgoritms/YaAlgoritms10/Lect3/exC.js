function exB(arr1, arr2){
    let ans = [];
    let set = new Set();
    arr1.forEach((elem)=>{
        if(!set.has(elem)){
            set.add(elem);
        }
    })
    arr2.forEach((elem)=>{
        if(set.has(elem)){
            ans.push(elem);
        }
    })
    ans = ans.sort((a,b)=>{
        return a>b ? 1 : a===b ? 0 : -1;
    })
    return ans;
}

console.log(exB([1,2, 6, 4, 5, 7],[10, 2, 3, 4, 8]));
