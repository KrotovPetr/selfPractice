const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let amount = -1;
let max = -1;
let arr = [];
let counter = 0;
let sum = 0;

function foo(pairs, maxSum) {

    pairs.sort((a, b) => {

        const byMin = a.min - b.min;
        if (byMin) {
            return byMin;
        }

        return a.max - b.max;
    });
    const mid = Math.floor(pairs.length / 2);


    const trySwapWithNext = (index) => {
        const current = pairs[index];
        const next = pairs[index + 1];

        if ((current.min > next.min) || (current.min === next.min && current.max > next.max)) {
            pairs[index] = next;
            pairs[index + 1] = current;
        }
    };

    while (sum < maxSum) {

        if (pairs[mid].min < pairs[mid].max) {
            pairs[mid].min++;
            trySwapWithNext(mid);
        } else {
            for (let i = mid - 1; i >= 0; i--) {
                if (pairs[i].min < pairs[i].max) {
                    pairs[i].min++;
                    trySwapWithNext(i);
                    break;
                }
            }
        }

        sum++;
    }

    return pairs[mid].min;
}


rl.on('line', (line) => {
    if (amount === -1) {
        [amount, max] = line.split(' ');
    } else {
        let [minValue, maxValue] = line.split(' ')
        arr.push({
            min: Number.parseInt(minValue),
            max: Number.parseInt(maxValue),
        });
        sum += Number.parseInt(minValue);
    }

    if (counter < amount) {
        counter++;
    } else {
        rl.close();
    }
}).on('close', () => {
    console.log(foo(arr, max))
});
