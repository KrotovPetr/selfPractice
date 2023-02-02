const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let total = null;
let count = null;

rl.on('line', (line)=>{
    if(!total){
        total = Number.parseInt(line);
    } else {
        count = Number.parseInt(line);
        let maxS = 0;
        let minS = 0;
        let copyTotal = total;
        for(let i=0;i<count;i++){
            if(i<count-1){
                copyTotal--;
                maxS+=1;
            } else {
                maxS+=(copyTotal*copyTotal);
            }
        }
        let countD = Math.ceil(total/count);
        let arr = [];
        let sum = 0;
        for(let i=0;i<count;i++){
            arr[i] = countD;
            sum+= countD;
        }
        for(let i=0;i<count;i++){
            if(sum>total){
                arr[i]--;
                sum--;

            }

            minS+= Math.pow(arr[i],2);
        }
        console.log(minS+" "+maxS);
        rl.close();
    }

}).on('close',()=>{

})