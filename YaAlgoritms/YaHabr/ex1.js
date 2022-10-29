// function getCommon(arr1, arr2){
//     let map = new Map();
//     let com = [];
//     arr1.forEach((elem)=>{
//         if(map.has(elem)){
//             map.set(elem, map.get(elem) + 1);
//         } else {
//             map.set(elem,1);
//         }
//     })
//     arr2.forEach((elem)=>{
//         if(map.has(elem)){
//             if(map.get(elem) > 0){
//                 com.push(elem);
//                 map.set(elem, map.get(elem) - 1);
//             }
//         }
//     })
//     return com;
// }
//
// console.log(getCommon([1, 2, 3, 2, 0],[5, 1, 2, 7, 3, 2]))
function getCopied(arr1, arr2){
    let ans = [];
    let map = new Map();
    arr1.forEach((elem)=>{
        if(map.has(elem)){
            map.set(elem, map.get(elem)+1);
        } else {
            map.set(elem, 1);
        }
    })

    arr2.forEach((elem)=>{
        if(map.has(elem)){
            if(map.get(elem)>0){
                map.set(elem, map.get(elem) - 1);
                ans.push(elem);
            }

        }
    })
    return ans
}
console.log(getCopied([1, 2, 3, 2, 0], [5, 1, 2, 7, 3, 2]))
