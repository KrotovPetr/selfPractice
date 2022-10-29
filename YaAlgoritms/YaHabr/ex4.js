// function getTotal(arr){
//     if(arr.length<2){
//         return 0;
//     }
//     let buffArr = [];
//     let counter = 1;
//     for(let i=1;i<arr.length;i++){
//
//         if(arr[i]===arr[i-1]){
//             counter++;
//         } else {
//             buffArr.push({count:counter,value:arr[i-1]});
//             counter=1;
//         }
//     }
//     if(arr[arr.length-1]===arr[arr.length-2]){
//         counter++;
//         buffArr.push({count:counter,value:arr[arr.length-1]});
//     } else {
//         buffArr.push({count:counter,value:arr[arr.length-2]});
//         buffArr.push({count:1,value:arr[arr.length-1]});
//     }
//
//
//     buffArr.forEach((elem)=>{
//
//     })
//     return max;
// }
function getTotal(arr){
    let buffArr = [];
    for (let i=0;i<arr.length;i++){
        buffArr.push([...arr.slice(0,i),...arr.slice(i+1,arr.length)]);
    }
    let maxDist = 0;
    for(let i=0;i<buffArr.length;i++){
        let currentDist = 0;
        for(let j=0;j<buffArr[i].length;j++){
            if(buffArr[i][j]===1){
                currentDist++;

            } else {
                if(currentDist>maxDist){
                    maxDist = currentDist;

                }
                currentDist = 0;
            }
        }
        if(currentDist>maxDist){
            maxDist = currentDist;

        }
    }
    return maxDist;
}

console.log(getTotal([1,1,0,0,1,1]))
