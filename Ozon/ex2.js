const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let clicker = 1;
let amount = null;
let arr = [];
rl.on('line', (line) => {
    if (!amount) {
        amount = Number.parseInt(line);
    } else {
        let map = new Map();
        line = line.split(' ');
        for (let i = 0; i < line.length; i++) {
            if (map.has(line[i])) {
                map.set(line[i], map.get(line[i]) + 1);
            } else {
                map.set(line[i], 1);
            }
        }
        let flag = true;
        // console.log(map);
        for (let values of map.entries()) {
            switch (values[0]) {
                case '1':
                    if (values[1] > 4) flag = false;
                    break;
                case '2':
                    if (values[1] > 3) flag = false;
                    break;
                case '3':
                    if (values[1] > 2) flag = false;
                    break;
                case '4':
                    if (values[1] > 1) flag = false;
                    break;
            }
        }
        if (!flag) {
            console.log('NO');
        } else {
            console.log('Yes');
        }

        clicker++;
        if (clicker === amount) {
            rl.close();
        }
    }
}).on('close', () => {});
