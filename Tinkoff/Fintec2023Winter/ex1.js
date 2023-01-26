const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.on('line',(line)=>{
    console.log(line.match(/\d+\w+/) || line.match(/\w+\d+/) ? "YES" : "NO")
    rl.close();
}).on('close',()=>{

})