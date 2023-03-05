const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let arr = [];
let amount = null;
let arrLen = 0;
let clicker = 0;
rl.on('line', (line) => {
    if (!amount) {
        amount = Number.parseInt(line);
    } else {
        if (clicker % 2 !== 0) {
            arrLen = Number.parseInt(line);
        } else {
            let lastElem = null;
            let set = new Set();
            let arr2 = line.split(' ');
            let flag = true;
            for (let i = 0; i < arrLen; i++) {
                if (set.has(Number.parseInt(arr2[i]))) {
                    if (lastElem !== arr2[i]) flag = false;
                } else {
                    set.add(Number.parseInt(arr2[i]));
                }
                lastElem = arr2[i];
            }
            if (flag) {
                arr.push('Yes');
            } else {
                arr.push('No');
            }
        }
        if (arr.length === amount) {
            rl.close();
        }
    }
    clicker++;
}).on('close', () => {
    arr.forEach((elem) => {
        console.log(elem);
    });
});
