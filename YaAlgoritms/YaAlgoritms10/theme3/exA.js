const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//vars

rl.on('line', (line)=>{
    let set1 = new Set();
    if(line.length === 0){
        throw new Error("Line is Empty!");
    } else {
        line = line.split(" ");
        line.forEach((elem)=>{
            set1.add(elem);
        })
    }

    console.log(set1.size);
    rl.close();
}).on('close', ()=>{

})