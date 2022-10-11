const fs = require("fs");
let blocks = fs.readFileSync("./input.txt", "utf8").split("\n")[1];
blocks = blocks.split(" ");
// console.log(blocks)
let arr = blocks.map((elem)=>{
    elem = elem.replace("\r","");
    let object = elem.split(":");
    return Number.parseInt(object[0])*60 + Number.parseInt(object[1]);
})
arr.sort((a,b)=>{
    if(a>b) return 1;
    if(a===b) return 0;
    return -1;
})

fs.writeFileSync("./output.txt",ex4(arr).toString())
function ex4(trainArr){
    console.log(trainArr)
    let minDist = trainArr[0] +1440 - trainArr[trainArr.length - 1];
    for(let i = 0; i<trainArr.length;i++){
        if(trainArr[i] - trainArr[i-1] < minDist){
            minDist = trainArr[i] - trainArr[i-1];
        }
    }
    return minDist;
}

// console.log(ex4(2,"23:59 00:00 23:55"))