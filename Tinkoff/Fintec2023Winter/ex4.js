const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let arr = [];
let clicker = 0;
let amountDict = null;
let amountCom = null;

function checkElem(elem) {
    return arr.indexOf(elem) > -1 ? 'Yes' : 'No';
}

function addElem(elem) {
    arr.push(elem);
}

function sumElem(elem) {
    arr = arr.map((arrEl) => {
        return (arrEl += elem);
    });
}

function deleteFromSet(elem) {
    let index = arr.indexOf(elem);
    let len = arr.length;
    arr = [...arr.slice(0, index), ...arr.slice(index + 1, len)];
}

function getIntArr(line) {
    let arrBuff = line.split(' ');
    arrBuff = arrBuff.map((elem) => {
        return Number.parseInt(elem);
    });
    return arrBuff;
}

function modifyArr(line) {
    line = line.split(' ');
    switch (Number.parseInt(line[0])) {
        case 0:
            let flag = checkElem(Number.parseInt(line[1]));
            console.log(flag);
            break;
        case 1:
            sumElem(Number.parseInt(line[1]));
            break;
        case 2:
            addElem(Number.parseInt(line[1]));
            break;
        case 3:
            deleteFromSet(Number.parseInt(line[1]));
            break;
    }
}

rl.on('line', (line) => {
    switch (clicker) {
        case 0:
            amountDict = Number.parseInt(line);
            break;
        case 1:
            arr = getIntArr(line);
            break;
        case 2:
            amountCom = Number.parseInt(line);
            break;
        default:
            modifyArr(line);
            break;
    }
    if (amountCom === clicker - 2) {
        rl.close();
    }
    clicker++;
}).on('close', () => {});
