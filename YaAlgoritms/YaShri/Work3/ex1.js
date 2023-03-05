const fs = require('fs');
let blocks = fs.readFileSync('./input.txt', 'utf8').split('\n');
// console.log(blocks)
fs.writeFileSync('./output.txt', ex1(blocks[0], blocks[1]).toString());

function ex1(str1, str2) {
    str1 = str1.replace('\r', '');
    str2 = str2.replace('\r', '');
    let map = new Map();
    for (let i = 0; i < str1.length; i++) {
        if (map.has(str1[i])) {
            map.set(str1[i], map.get(str1[i]) + 1);
        } else {
            map.set(str1[i], 1);
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (map.has(str2[i])) {
            map.set(str2[i], map.get(str2[i]) - 1);
        } else {
            return 'NO';
        }
    }
    for (let key of map) {
        if (key[1] !== 0) {
            return 'NO';
        }
    }
    return 'YES';
}
