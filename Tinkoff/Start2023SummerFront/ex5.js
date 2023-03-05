const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let numbersCount = -1;
let numbersArr = [];

function getSubArraysCount() {
    let l = 0;
    let r = 0;
    let subArraysCount = 0;
    let totalCount = 0;
    let totalSum = 0;

    while (l <= numbersArr.length - 1) {
        totalSum += numbersArr[r];
        if (totalSum === 0) {
            subArraysCount++;
        }

        totalCount += subArraysCount;
        if (r + 1 === numbersArr.length) {
            l++;
            r = l;
            totalSum = 0;
            subArraysCount = 0;
        } else {
            r++;
        }
    }
    console.log(totalCount);
}


rl.on('line', (line) => {
    if (numbersCount < 0) {
        numbersCount = Number.parseInt(line);
    } else {
        numbersArr = line.split(' ').map((elem) => Number.parseInt(elem));
        rl.close();
    }
}).on('close', () => {
   getSubArraysCount();
});

//p.s. стоит ли считать единичный отрезок?? нет ограничений на эти данные i=j???