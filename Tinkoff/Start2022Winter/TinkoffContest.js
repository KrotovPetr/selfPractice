const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let arr = [];
rl.on('line', function (line) {
    arr.push(Number.parseInt(line));
    if (arr.length > 1) rl.close();
}).on('close', function () {
    process.stdout.write(
        (Number.parseInt(arr[0]) + Number.parseInt(arr[1])).toString()
    );
    process.exit(0);
});
