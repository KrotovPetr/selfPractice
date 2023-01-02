//исправить перед отправкой

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let checker = new Set();
let count =0;
let arr = [];
let a =0;
let b =0;
let c =0;
let x =0;
let y =0;
let z =0;


rl.on('line', function(line) {
    arr.push(line)
    if(arr.length>1) rl.close();

}).on('close', function(){
    let values = arr[0].split(" ");
    let amount = arr[1].split(" ");
    a = Number.parseInt(values[0]);
    b = Number.parseInt(values[1]);
    c = Number.parseInt(values[2]);
    x = Number.parseInt(amount[0]);
    y = Number.parseInt(amount[1]);
    z = Number.parseInt(amount[2]);

    makeTree(a,b,c,x,y,z)

    process.stdout.write(count.toString())
    process.exit(0);
});


function makeTree(a,b,c,x,y,z){
    if (x - a >= 0) {
        checkerFun(a, b, c, x-a, y+b, z);
        checkerFun(a, b, c, x-a, y, z+c);
    }
    if (y - b >= 0){
        checkerFun(a, b, c, x+a, y-b, z);
        checkerFun(a, b, c, x, y-b, z+c);
    }
    if (z - c >= 0){
        checkerFun(a, b, c, x+a, y, z-c);
        checkerFun(a, b, c, x, y+b, z-c);
    }
}

function checkerFun( a, b, c, first, second, third) {
    if (!checker.has(`${first},${second},${third}`)) {
        checker.add(`${first},${second},${third}`);
        count++;
        makeTree(a,b,c,first, second, third);
    }
}
