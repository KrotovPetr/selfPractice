function checkAmount(arr){
    let set = new Set();
    arr.forEach((elem)=>{
        if(!set.has(elem)){
            set.add(elem);
        }
    })
    return set.size;
}

console.log(checkAmount([1,2, 3, 4, 5, 6, 7, 8, 9, 10]))