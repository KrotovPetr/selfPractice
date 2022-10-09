const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
})

let lines = [];
let flag = false;
let count = 0;
let maxCount = 0;

rl.on('line', (line) => {
    if(flag){
        lines.push(parseInt(line));
    }
    flag = true;
    if(lines[lines.length-1] === 1){
        count++;
    }
    else{
        if(maxCount<count){
            maxCount = count;
        }
        count=0;

    }})
    .on('close',()=>{
        if(maxCount<count){
            maxCount = count;
        }
        process.stdout.write(maxCount.toString());
    })

