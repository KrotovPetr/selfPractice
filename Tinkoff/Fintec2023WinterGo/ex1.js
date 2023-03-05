const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//vars

//code
function getResult(line) {
    line = line.split(' ');
    let humCount = Number.parseInt(line[0]);
    let seatCount = Number.parseInt(line[1]);
    let middle = Math.floor(seatCount / 2);
    let arr = [];
    for (let i = 0; i < seatCount; i++) {
        arr[i] = 0;
    }
    let l = null;
    let r = null;
    if (seatCount % 2 === 1) {
        l = middle;
        r = middle;
    } else {
        l = middle - 1;
        r = middle;
    }
    let counter = 1;
    let passClicker = 0;
    while (counter <= humCount) {
        let iter = Math.ceil(counter / seatCount);
        if (passClicker >= seatCount) {
            if (seatCount % 2 === 1) {
                l = middle;
                r = middle;
            } else {
                l = middle - 1;
                r = middle;
            }
            passClicker = 1;
        } else {
            passClicker++;
        }
        if (arr[l] === iter && arr[r] === iter) {
            l--;
            r++;
        }
        if (arr[l] < iter) {
            arr[l]++;
            console.log(l + 1);
        } else if (arr[r] < iter) {
            arr[r]++;
            console.log(r + 1);
        }

        counter++;
    }
}

rl.on('line', (line) => {
    getResult(line);
    rl.close();
}).on('close', () => {});
