const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let isDecr = false;
let isIncr = false;
let hasEqual = false;
let prevElem = null;
rl.on('line', (line) => {
    if (Number.parseInt(line) !== -2000000000) {
        line = Number.parseInt(line);
        if (prevElem) {
            if (prevElem < line) {
                isIncr = true;
            }
            if (prevElem === line) {
                hasEqual = true;
            }
            if (prevElem > line) {
                isDecr = true;
            }
        }
        prevElem = line;
    } else {
        if (isIncr && isDecr) {
            console.log('RANDOM');
        } else if (isIncr && hasEqual) {
            console.log('WEAKLY ASCENDING');
        } else if (isDecr && hasEqual) {
            console.log('WEAKLY DESCENDING');
        }
        if (hasEqual && !isDecr && !isIncr) {
            console.log('CONSTANT');
        } else if (isIncr && !hasEqual) {
            console.log('ASCENDING');
        } else if (isDecr && !hasEqual) {
            console.log('DESCENDING');
        }

        rl.close();
    }
}).on('close', () => {});
