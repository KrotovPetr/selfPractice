const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let arr = [];
rl.on('line', function (line) {
    arr.push(line);
    if (arr.length > 2) rl.close();
}).on('close', function () {
    let words = arr[1];
    let colours = arr[2];
    let badWords = 0;
    let lastSymbol = '';
    let flag = false;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === ' ') {
            if (flag) badWords++;
            flag = false;
            lastSymbol = '';
        } else {
            if (colours[i] === lastSymbol) {
                flag = true;
            }
            lastSymbol = colours[i];
        }
    }
    if (flag) badWords++;
    process.stdout.write(badWords.toString());
    process.exit(0);
});
