const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let amount = null;
let clicker = 0;
let arr = [];
let sym = null;
let total = 0;
rl.on('line', (line)=>{
    if(clicker===0){
        amount = Number.parseInt(line)
    }
    if(clicker === 1){
        arr = line.split(" ");
    }
    if(clicker === 2){
        sym = Number.parseInt(line);
        let l = 0;
        let r = l + sym;
        let set = new Set();
        for(let i = 0; i<r-l;i++){
            set.add(arr[l+i]);
        }
        for(l=0;l<arr.length - sym;l++){
            while (r!== arr.length-1){
                if(set.length >= sym){
                    total+=(arr.length-1 - r);
                    break;
                } else {
                    r++;
                }
            }
        }
        console.log(total)
        rl.close();
    }
    clicker++
}).on('close', ()=>{

})