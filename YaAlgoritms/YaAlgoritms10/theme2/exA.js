const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line)=>{
    arr = line.split(" ");
    let flag = true;
    let prevElem = null;
    arr.forEach((elem)=>{
        if(prevElem){
            if(elem<=prevElem){
                flag = false;
            }
            prevElem = Number.parseInt(elem);
        }
        else{
            prevElem = Number.parseInt(elem);
        }
    })
    if(flag){
        console.log("YES");
    } else {
        console.log("NO");
    }
}).on("close",()=>{

})