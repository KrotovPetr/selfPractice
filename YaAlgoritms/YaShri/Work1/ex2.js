const fs = require("fs");
let blocks = fs.readFileSync("./input.txt", "utf8").split("\n");
// console.log(blocks)
fs.writeFileSync("./output.txt",ex2(blocks[0]))
function ex2(str){

    // console.log(str);
    let arr = str.split("/");
    // console.log(arr);
    let str2 = "/"
    let arr2 = []
    arr.forEach((elem)=>{
        if(elem!==""){
            if(elem==='.'){

            }
            if(elem==='..'){
                arr2.pop();
            }
            if(elem!=='..' && elem!=='.'){
                arr2.push(elem);
            }

        }
    })


    return str2+arr2.join("/");
}

