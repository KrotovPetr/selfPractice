const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let arr = [];
let clicker = 0;
let closestNum = null;
rl.on("line", (line)=>{
    if(clicker === 0){

    }
    if(clicker === 1){
        arr = line.split(" ");
        arr = arr.map((elem)=>{
            return Number.parseInt(elem);
        })
    }

    if(clicker === 2){
        line = Number.parseInt(line);
        arr.forEach((elem)=>{
            if(closestNum!==null){
                if(Math.abs(line-elem)<(line - closestNum)){

                    closestNum = elem;
                }
            } else {
                closestNum = Math.abs(elem);
            }
        })
        console.log(closestNum);
        rl.close();
    }
    clicker++;
}).on("close", ()=>{

})