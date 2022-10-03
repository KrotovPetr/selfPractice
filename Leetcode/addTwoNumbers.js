//
// var addTwoNumbers = function(l1, l2) {
//     l1 = l1.reverse();
//     l2 = l2.reverse();
//     let ansArr = [];
//     let point = 0;
//     if(l1.length>=l2.length){
//         l1.forEach((elem,current)=>{
//             if(typeof l2[current] === "number"){
//                 elem = elem+l2[current];
//                 if(point>0){
//                     elem++;
//                     point--;
//                 }
//                 if(elem>9){
//                     point++;
//                     elem = elem % 10;
//                 }
//             } else {
//                 if(point){
//                     elem++;
//                     point--;
//                 }
//                 if(elem>9){
//                     point++;
//                     elem = elem % 10;
//                 }
//
//             }
//             ansArr.push(elem);
//         })
//         if(point>0){
//             ansArr.push(1);
//         }
//
//     } else {
//         l2.forEach((elem,current)=>{
//             if(typeof l1[current] === "number"){
//                 elem = elem+l1[current];
//                 if(point>0){
//                     elem++;
//                     point--;
//                 }
//                 if(elem>9){
//                     point++;
//                     elem = elem % 10;
//                 }
//             } else {
//                 if(point){
//                     elem++;
//                     point--;
//                 }
//                 if(elem>9){
//                     point++;
//                     elem = elem % 10;
//                 }
//
//             }
//             ansArr.push(elem);
//         })
//         if(point>0){
//             ansArr.push(1);
//         }
//
//     }
//
//     return ansArr;
// };

function addTwoNumbers(l1,l2){
    let str1 = "";
    let str2 = "";
    l1 = +(l1.join(""));
    l2=  +(l2.join(""));
    return (l1+l2).toString().split("").reverse()
}
l1 = [9,9,9,9,9,9,9]; l2 = [9,9,9,9]
console.log(addTwoNumbers(l1,l2));