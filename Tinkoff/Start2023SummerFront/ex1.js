const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let humanHeightArr = '';

function isIncrementOrDecrement2([p1, p2, p3, p4]) {
    // corner case
    if ([p1, p2, p3, p4].some((n) => n == null)) {
        return 'NO';
    }

    const isIncrement = (p1 <= p2) && (p2 <= p3) && (p3 <= p4);
    if (isIncrement) {
        return 'YES';
    }
    const isDecrement = (p1 >= p2) && (p2 >= p3) && (p3 >= p4);
    if (isDecrement) {
        return 'YES';
    }

    return 'NO';
}

rl.on('line', (line) => {
    humanHeightArr = line
        .split(' ')
        .map((humanHeight) => Number.parseInt(humanHeight));

    rl.close();
}).on('close', () => {
    console.log(isIncrementOrDecrement2(humanHeightArr));
});
