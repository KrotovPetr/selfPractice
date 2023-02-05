const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let clicker = 1;
let amount = null;


function checkString(line){
    let i=1;
    let totalLength = line.length;
    let str = "";
    let flag = true;
    while(i<=totalLength){
        if(line.match(/[a-zA-Z]{1}\d{1,2}[a-zA-Z]{2}/)){
            if(line.match(/\w\d\d\w\w/)!==null && line.match(/\w\d\d\w\w/).index === 0 ){
                let res = line.match(/\w\d\d\w\w/);
                i+=5;
                str+=res+" ";
                line = line.replace(res,"");

            } else if(line.match(/\w\d\w\w/).index === 0){
                let res = line.match(/\w\d?\w\w/);
                i+=4;
                str+=res+" ";
                line = line.replace(res,"");
            }
        } else {
            flag = false;
            break;
        }

    }
    if(flag){
        return str.trim();
    } else {
        return '-'
    }
}

rl.on('line',(line)=>{
    if(amount === null){
        amount = Number.parseInt(line);
    } else {
       console.log(checkString(line));
       clicker++;
       // console.log(clicker);
       if(clicker <= amount){
           rl.close();
       }

    }

}).on('close',()=>{
    // console.log("End");
})

// console.log(checkString("R48FAO00OOO0OOA99OKA99OK"));
// console.log(checkString("R48FAO00OOO0OOA99OKA99O"));
// console.log(checkString("A9PQ"));
// console.log(checkString("A9PQA"));
// console.log(checkString("A99AAA99AAA99AAA99AA"));
