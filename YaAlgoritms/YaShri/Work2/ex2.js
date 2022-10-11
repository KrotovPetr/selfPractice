const fs = require("fs");
let blocks = fs.readFileSync("./input.txt", "utf8").split("\n");
// console.log(blocks)
fs.writeFileSync("./output.txt",ex2(blocks[1],blocks[0]).toString())


function ex2(arr,buff){
    let buffZone = Number.parseInt(buff.split(" ")[1]);
    let arr2 = arr.split(" ");
    let set1 = new Set();
    for(let i=0; i<arr2.length;i++){
        if(set1.has(arr2[i])){
            return "YES"
        }
        set1.add(arr2[i]);
        if(i>=buffZone){
            set1.delete(set1.values().next().value)
        }
    }
    return "NO";
}


