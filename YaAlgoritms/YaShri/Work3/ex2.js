const fs = require("fs");
let blocks = fs.readFileSync("./input.txt", "utf8").split("\n");
// console.log(blocks)
fs.writeFileSync("./output.txt",ex2(blocks[1]).toString())

function ex2(str){
    let arr = str.split(" ");
    let inv = 0;
    arr = arr.map((elem)=>{
        if(elem!==""){
            return Number.parseInt(elem);
        }
    }).sort((a, b)=>{
        if(a>b) return 1;
        if(a===b) return 0;
        return -1;
    })
    let l = 0;
    let r = 0;
    for(let i=0;i<arr.length;i++){
        while((l<arr.length) && arr[l]<=0.5*arr[i]+7 ){
            l+=1;
        }
        while((r<arr.length) && arr[r]<=arr[i]){
            r+=1;
        }
        if(r>l+1){
            inv+=r-l-1;
        }
    }

    return inv;
}