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
        if (clicker % 2 === 0) {
            arrLen = Number.parseInt(line);
        } else {
            let map = new Map();
            let arr2 = line.split(' ');
            for (let i = 0; i < arrLen; i++) {
                arr2[i] = Number.parseInt(arr2[i]);
                if (map.has(arr2[i])) {
                    map.set(arr2[i], map.get(arr2[i]) + 1);
                } else {
                    map.set(arr2[i], 1);
                }
            }
            let totalSum = 0;
            for (let value of map.entries()) {
                let kolvo = (value[1] - Math.floor(value[1] / 3)) * value[0];
                totalSum += kolvo;
            }
            arr.push(totalSum);
        }
        clicker++;
        if (arr.length === amount) {
            rl.close();
        }
    }
}).on('close', () => {
    arr.forEach((elem) => {
        console.log(elem);
    });
});
