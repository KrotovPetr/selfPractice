function getInterval(arr){
    let str = "";
    arr = arr.sort((a,b)=>{
        return a>b ? 1 : a===b ? 0 : -1;
    })
    let buffArr = [arr[0]];
    for(let i=1;i<arr.length;i++){
        if(Math.abs(arr[i]-arr[i-1])!==1){
            if(buffArr.length === 1){
                str+=buffArr[0]+",";
            } else {
                str+=`${buffArr[0]}-${buffArr[buffArr.length-1]},`
            }
            buffArr=[];
        }
        buffArr.push(arr[i]);
    }
    if(buffArr.length === 1){
        str+=buffArr[0]+"";
    } else {
        str+=`${buffArr[0]}-${buffArr[buffArr.length-1]}`
    }
    return str;
}

console.log(getInterval([1,4,5,2,3,9,8,11,0]))
console.log(getInterval([1,4,3,2]))
console.log(getInterval([4,2]))