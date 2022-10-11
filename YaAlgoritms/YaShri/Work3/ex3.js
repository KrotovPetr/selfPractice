const fs = require("fs");
let blocks = fs.readFileSync("./input.txt", "utf8").split("\n");
// console.log(blocks)
let borders = blocks.slice(3,blocks.length)
fs.writeFileSync("./output.txt",ex3(blocks[1], borders).toString())

function ex3(str, borders){
    let countArr = [0];
    let ans = [];
    borders = borders.map((elem)=>{
        return elem.replace("\r","");
    })

    str = str.split(" ").map((elem)=>{
        return Number.parseInt(elem.replace("\r",""));
    })
    let count =0;
    for(let i=0;i<str.length;i++){
        if(str[i]>0){
            countArr.push(count+1)
            count++
        } else {
            countArr.push(count)
        }
    }
    borders.forEach((elem)=>{
        let bordArr = elem.split(" ");
        ans.push(countArr[Number.parseInt(bordArr[1])]-countArr[Number.parseInt(bordArr[0])-1])
    })
    console.log(ans)
    return ans.join("\n");
}
//     [ '1', '1' ]
//     [ '1', '3' ]
//     [ '2', '4' ]
//     [ '1', '5' ]
