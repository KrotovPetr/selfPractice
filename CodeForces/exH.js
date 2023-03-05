const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let amount = null;
let height = null;
let sAmount = null;
let arr = [];
let ansArr = [];

function checkArr(arr) {
    let flag = true;
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== '.') {
                if (!map.has(arr[i][j])) {
                    map.set(arr[i][j], [{ posI: i, posJ: j }]);
                } else {
                    let values = map.get(arr[i][j]);
                    let flag2 = false;
                    values.forEach((elem) => {
                        if (
                            i - elem.posI <= 1 ||
                            j - elem.posJ <= 1 ||
                            (i - elem.posI <= 1 && j - elem.posJ <= 1)
                        ) {
                            let bufArr = [
                                ...map.get(arr[i][j]),
                                { posI: i, posJ: j },
                            ];
                            if (!flag2) map.set(arr[i][j], bufArr);
                            flag2 = true;
                        } else {
                            flag = false;
                        }
                    });
                }
            }
        }
    }
    if (!flag) {
        return 'NO';
    } else {
        return 'YES';
    }
}

// arr = ["Y.R.B.B.",
//     ".R.R.B.V",
//     "B.R.B.R.",
//     ".B.B.R.R"
// ]
// arr =["G.B.R.G",
//     ".G.G.G."];

rl.on('line', (line) => {
    if (line !== '') {
        if (!amount) {
            amount = Number.parseInt(line);
        } else {
            if (!line.match(/\d+/)) {
                arr.push(line);
                if (arr.length === height) {
                    ansArr.push(checkArr(arr));
                }
            } else {
                line = line.split(' ');
                height = Number.parseInt(line[0]);
                sAmount = Number.parseInt(line[1]);
                arr = [];
            }
        }
        if (ansArr.length === amount) {
            ansArr.push(checkArr(arr));
            rl.close();
        }
    }
}).on('close', () => {
    ansArr.forEach((elem) => {
        console.log(elem);
    });
});
