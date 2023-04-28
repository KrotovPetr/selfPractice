const map = (callback, arr) => {
    return arr.map((elem)=>{
        return callback(elem);
    })
};
//
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// });
//
// rl.on('line', (input) => {
//     const data = JSON.parse(input); // массив данных
//     const cb = (data) => data + '1'; // функция-обработчик
//     console.log(...map(cb, data));
// });
const cb = (data) => data + '1'; // функция-обработчик
console.log(...map(cb, ["aaa", "bbb", "ccc", "???"]))