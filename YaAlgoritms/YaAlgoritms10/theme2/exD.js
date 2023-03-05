const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let arr = [];
let clicker = 0;

rl.on('line', (line) => {
    arr = line.split(' ');
    if (arr.length === 0) {
        //пропускаем всё
    } else {
        arr = arr.map((elem) => {
            return Number.parseInt(elem);
        });
        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i] > arr[i - 1] + arr[i + 1]) {
                clicker++;
            }
        }
    }
    rl.close();
}).on('close', () => {
    console.log(clicker);
});
