const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let arr = [];
rl.on('line', function (line) {
    arr.push(line);
    if (arr.length > 0) rl.close();
}).on('close', function () {
    let x = Number.parseInt(arr[0]);
    let y = 1;
    let minX = x;
    let minY = 1;
    let minNOK = arr[0];
    if (x % 2 === 0) {
        process.stdout.write(`${x / 2} ${x / 2}`);
        process.exit(0);
    } else {
        while (x > y) {
            let NOK = 1;
            let copyX = x;
            let copyY = y;
            let i = 2;
            // console.log("NOK "+NOK)
            while (i <= x) {
                while (copyX % i === 0 || copyY % i === 0) {
                    // console.log(copyX+`  `+copyY+" "+i)
                    if (copyX % i === 0) {
                        copyX = copyX / i;
                    }
                    if (copyY % i === 0) {
                        copyY = copyY / i;
                    }
                    NOK *= i;
                }

                i++;
            }
            // console.log(NOK)
            if (NOK < minNOK) {
                minNOK = NOK;
                minX = x;
                minY = y;
            }
            x--;
            y = arr[0] - x;
        }
    }
    // console.log("x: "+minX+" y:"+minY+" NOK:"+ minNOK)
    process.stdout.write(`${minX} ${minY}`);
    process.exit(0);
});
