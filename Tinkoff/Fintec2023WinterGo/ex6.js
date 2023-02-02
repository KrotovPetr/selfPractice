const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//vars
let clicker = 0;
let dayAmount = 0;
let awardArr = [];
//code
rl.on('line',(line)=>{
    if(clicker === 0){
        line = line.split(" ");
        dayAmount = {totalTarget: line[1], awardAmount: line[0]};
    } else {
        awardArr = line.split(" ");
        let flag = true;
        while(flag){

        }
    }
    clicker++;
}).on('close',()=>{

})