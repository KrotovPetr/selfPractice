const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let arr = [];
let amount = null;
rl.on('line', (line) => {
    if (amount === null) {
        amount = Number.parseInt(line);
    } else {
        line = line.split(' ');
        let total = Number.parseInt(line[0]) + Number.parseInt(line[1]);
        arr.push(total);
        if (arr.length === amount) {
            rl.close();
        }
    }
}).on('close', () => {
    arr.forEach((elem) => {
        console.log(elem);
    });
});
