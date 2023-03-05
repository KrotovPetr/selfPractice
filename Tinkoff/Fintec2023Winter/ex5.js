const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let amount = null;
let clicker = 0;
let arr = [];
let sym = null;
let total = 0;

function countTotal() {
    let l = 0;
    let set = [];
    for (l = 0; l <= arr.length - sym; l++) {
        let r = l + sym - 1;
        let flag = true;
        set = [];
        for (let i = 0; i <= r - l; i++) {
            if (set.indexOf(arr[l + i]) < 0) {
                set.push(arr[l + i]);
            }
        }
        while (flag) {
            if (set.length >= sym) {
                total += arr.length - r;
                flag = false;
            } else {
                r++;
                if (set.indexOf(arr[r]) < 0) {
                    set.push(arr[r]);
                } else {
                    console.log(1);
                }
            }
        }
    }
    console.log(total);
}

rl.on('line', (line) => {
    if (clicker === 0) {
        amount = Number.parseInt(line);
    }
    if (clicker === 1) {
        arr = line.split(' ');
    }
    if (clicker === 2) {
        sym = Number.parseInt(line);
        countTotal(line);
        rl.close();
    }
    clicker++;
}).on('close', () => {});
