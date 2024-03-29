const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//vars
let clicker = 0;
let target = null;
let arr = [];

//code
function getResult() {
    let totalSum = 0;

    arr.forEach((elem) => {
        totalSum += elem;
    });
    // console.log(arr)
    if (totalSum < target) {
        console.log(-1);
    } else {
        let decrPoint = 0;
        let day = 1;
        let doneSum = 0;
        while (doneSum < target) {
            if (totalSum - decrPoint >= target) {
                if (arr[0] - decrPoint > 0) {
                    doneSum += arr[0] - decrPoint;
                    arr.shift();
                    totalSum -= decrPoint;
                    decrPoint++;
                } else {
                    let copy = arr[0];
                    arr.shift();
                    arr.push(copy);
                }
            } else {
                day++;
                decrPoint = 0;
            }
        }
        console.log(day);
    }
}

rl.on('line', (line) => {
    if (clicker === 0) {
        target = Number.parseInt(line.split(' ')[1]);
    } else {
        arr = line.split(' ');
        arr = arr.map((elem) => {
            return Number.parseInt(elem);
        });
        getResult();
        rl.close();
    }
    clicker++;
}).on('close', () => {});

// getResult()
