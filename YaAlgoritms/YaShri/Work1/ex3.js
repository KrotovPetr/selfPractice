const fs = require('fs');
let blocks = fs.readFileSync('./input.txt', 'utf8').split('\n')[1];
blocks = blocks.split(' ');
let arr = blocks.map((elem) => {
    return Number.parseInt(elem);
});
fs.writeFileSync('./output.txt', ex3(arr).toString());
// function ex3(priceArr){
//     let ans = [0,0];
//
//     let minIndex  = 0;
//     let maxGas = 1000/priceArr[0];
//     let maxRevenue = 0;
//     priceArr.forEach((elem,current)=>{
//        if(maxGas*elem - 1000> maxRevenue) {
//            maxRevenue = maxGas*elem - 1000;
//            ans=[minIndex+1,current+1];
//        }
//        if(1000/elem>maxGas){
//            minIndex = current;
//            maxGas = 1000 /elem;
//        }
//     })
//     return `${ans[0]} ${ans[1]}`
// }
