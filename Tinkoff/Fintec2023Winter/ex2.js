const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let amount = null;
rl.on('line', (line)=>{
    if(!amount){
        amount = Number.parseInt(line);
    } else {
        if(line.length%2!==0){
            console.log("NO");
            rl.close();
        } else {
            let map = new Map();
            for(let i=0;i<line.length;i++){
                if(!map.has(line[i])){
                    map.set(line[i],1);
                } else {
                    map.set(line[i], map.get(line[i])+1)
                }
            }
            for(let value of map.values()){
                if(value%2!==0){
                    console.log("NO");
                    rl.close();
                }
            }
            let errors = 0;
            for(let i=0;i<Math.floor(line.length/2);i++){
                if(line[i]!==line[line.length-1-i]){
                    errors++;
                }
            }
            if(errors>2){
                console.log("NO");
            } else {
                console.log("YES");
            }
            rl.close();

        }

    }
}).on('close',()=>{

})