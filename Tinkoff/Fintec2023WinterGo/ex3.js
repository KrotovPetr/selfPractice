const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//vars
let values = [];
let count = [];
let clicker = 0;
let strArr = [];

//code
rl.on('line',(line)=>{
    switch(clicker%3){
        case 0: break;
        case 1: values.push(line); break;
        case 2: count.push(line); break;
    }
    if(clicker === 5){
        for(let i=0;i<values.length;i++){
            values[i] = values[i].split(" ");
            count[i] = count[i].split(" ");
            let str = "";
            values[i].forEach((elem,cur)=>{
               for(let j=0; j<count[i][cur];j++){
                   str+=elem;
               }
            })
            strArr.push(str);
        }
        let sum = 0;
        for(let i=0;i<strArr[0].length;i++){
            if(strArr[0][i]!==strArr[1][i]){
                sum+=i+1;
            }
        }
        console.log(sum)
        rl.close();
    }
    clicker++;

}).on('close',()=>{

})