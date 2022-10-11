const fs = require("fs");
let blocks = fs.readFileSync("./input.txt", "utf8").split("\n");
// blocks = blocks.split(" ");
fs.writeFileSync("./output.txt",ex5(blocks[0]).toString())
function ex5(str){
    if(str.length===1){
        return "";
    }
    let flag = false;
    let str2 = "";
    for(let i = 0; i<Math.floor(str.length/2);i++){

        if(!flag && str[i]!=="a"){
            // console.log(1);
            str2 = str.slice(0,i) + "a" + str.slice(i+1,str.length);
            console.log(str2);
            flag = true;
            break;
        }
    }
    if(!flag){
        str2 = str.slice(0,str.length-1) + "b";
    }
    return str2;
}
// console.log(ex5("abba"))
// console.log(ex5("aba"))
// console.log(ex5("aaa"))
// console.log(ex5("aabaa"))
