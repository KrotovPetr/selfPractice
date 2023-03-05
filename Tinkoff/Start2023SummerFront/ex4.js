const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let numbersAmount = -1;
let numbersArr = [];

function findLongestPrefix() {
    let prefixIndex = numbersArr.length - 1;
    let map = new Map();
    numbersArr.forEach((elem) => {
        if (map.has(elem)) {
            let value = map.get(elem);
            map.set(elem, value + 1);
        } else {
            map.set(elem, 1);
        }
    });

    let maxDif = 0;
    let countPossibleDiffs = 0;
    let previousElement = null;

    while (prefixIndex >= 0) {
        maxDif = 0;
        countPossibleDiffs = 0;
        previousElement = null;
        for (let value of map.values()) {
            if (previousElement === null) {
                previousElement = value;
            } else {
                let currentDif = Math.abs(previousElement - value)
                if (maxDif < currentDif) {
                    maxDif = currentDif;
                }

                if (currentDif === 1) {
                    countPossibleDiffs++;
                }
            }
        }

        if (maxDif === 1 && countPossibleDiffs === 1) {
            console.log(prefixIndex + 1);
            break;
        } else if (
            maxDif === 0 &&
            previousElement === 1 &&
            previousElement !== null
        ) {
            console.log(prefixIndex + 1);
            break;
        } else {
            let currentValue = map.get(numbersArr[prefixIndex]);
            if (currentValue === 1) {
                map.delete(numbersArr[prefixIndex]);
            } else {
                map.set(numbersArr[prefixIndex], currentValue - 1);
            }

            prefixIndex--;
        }
    }
}

rl.on('line', (line) => {
    if (numbersAmount === -1) {
        numbersAmount = Number.parseInt(line);
    } else {
        numbersArr = line.split(' ').map((elem) => Number.parseInt(elem));
        rl.close();
    }
}).on('close', () => {
   findLongestPrefix();
});

