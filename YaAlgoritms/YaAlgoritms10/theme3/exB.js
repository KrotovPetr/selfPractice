const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//vars
let clicker = 0;
let firstArr = [];
let secondArr = [];
let resultArr = [];
let set1 = new Set();

//code
rl.on('line', (line) => {
    if (clicker === 0) {
        firstArr = line.split(' ');
        firstArr.forEach((elem) => {
            set1.add(elem);
        });
    } else {
        secondArr = line.split(' ');
        secondArr.forEach((elem) => {
            if (set1.has(elem)) {
                resultArr.push(elem);
            }
        });
        resultArr = resultArr.sort((a, b) => {
            return a > b ? 1 : a === b ? 0 : -1;
        });
        console.log(resultArr.join(' '));
        rl.close();
    }
    clicker++;
}).on('close', () => {});
