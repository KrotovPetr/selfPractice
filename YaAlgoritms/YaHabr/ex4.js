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

// function getMaxInterval(arr){
//     let copyArr = [];
//     let count = 0;
//     let prevElem = null;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===prevElem){
//             count++;
//         } else {
//             if(prevElem !== null){
//                 copyArr.push([prevElem, count]);
//             }
//             prevElem = arr[i];
//             count = 1;
//         }
//
//     }
//     copyArr.push([prevElem, count]);
//     let maxInterval = 0;
//     let currentInterval = 0;
//     let hasO = false;
//     let hasMinO = false;
//     for(let i=0;i<copyArr.length;i++){
//         if(copyArr[i][0] === 1){
//             currentInterval += copyArr[i][1];
//         } else {
//             hasO = true;
//             if(copyArr[i][1]===1){
//                 currentInterval += copyArr[i][1];
//                 hasMinO = true;
//             } else {
//                 if(currentInterval > maxInterval){
//                     maxInterval = currentInterval;
//                 }
//                 currentInterval = 0;
//             }
//
//         }
//
//     }
// }

function getTotal(arr) {
    let buffArr = [];
    for (let i = 0; i < arr.length; i++) {
        buffArr.push([...arr.slice(0, i), ...arr.slice(i + 1, arr.length)]);
    }
    let maxDist = 0;
    for (let i = 0; i < buffArr.length; i++) {
        let currentDist = 0;
        for (let j = 0; j < buffArr[i].length; j++) {
            if (buffArr[i][j] === 1) {
                currentDist++;
            } else {
                if (currentDist > maxDist) {
                    maxDist = currentDist;
                }
                currentDist = 0;
            }
        }
        if (currentDist > maxDist) {
            maxDist = currentDist;
        }
    }
    return maxDist;
}

console.log(getTotal([1, 1, 0, 0, 1, 1]));
