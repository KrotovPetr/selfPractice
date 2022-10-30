function getIntervals(arr){
    if(!arr.length){
        return [];
    }

    let ans = [];


    arr = arr.sort((a,b)=>{
        return a[0]>b[0] ? 1 : a[0]<b[0] ? -1 : 0;
    })

    let prevElem = arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i][0]<=prevElem[1]){
            prevElem[1] = Math.max(arr[i][1], prevElem[1]);
        } else {
            ans.push(prevElem);
            prevElem = arr[i];
        }
    }

    ans.push(prevElem);
    console.log(ans)
    return ans;

}

getIntervals([[1, 3], [100, 200], [5,6], [2, 4]])