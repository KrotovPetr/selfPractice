const fs = require("fs");
let blocks = fs.readFileSync("./input.txt", "utf8").split("\n");
// console.log(blocks)
fs.writeFileSync("./output.txt",ex4(blocks[1]).toString())


function ex4(arr){
    let map = new Map();
    let arr2 = arr.split(" ");
    // console.log(arr2)
    arr2.forEach((elem)=>{
        if(!map.has(elem)){
            map.set(elem, 1);
        } else {
            map.set(elem, map.get(elem)+1)
        }
    })
    for(let key of map){
        // console.log(key[1])
        if(key[1]>=Math.ceil(arr2.length/2)){
            // console.log(1)

            return key[0]
        }
    }
    // return 1
}


