const fs = require('fs');
let blocks = fs.readFileSync('./input.txt', 'utf8').split('\n');
fs.writeFileSync('./output.txt', ex5(blocks[1], blocks[3]).toString());

function ex5(dict, values) {
    let str = '';
    dict = dict.split(' ');
    dict = dict.map((elem) => {
        return elem.replace('\r', '');
    });
    values = values.split(' ');
    let set1 = new Set(dict);
    let ans = [];
    let flag = false;
    values.forEach((elem) => {
        flag = false;
        for (let key of set1) {
            if (elem === key) {
                ans.push(`${key}`);
                flag = true;
                break;
            }
        }
        if (!flag) {
            for (let key of set1) {
                if (elem.toLowerCase() === key.toLowerCase()) {
                    ans.push(`${key}`);
                    flag = true;
                    break;
                }
            }
        }
        if (!flag) {
            for (let key of set1) {
                if (
                    elem.toLowerCase().replace(/[aeiuoy]/gi, '#') ===
                    key.toLowerCase().replace(/[aeiuoy]/gi, '#')
                ) {
                    ans.push(`${key}`);
                    break;
                }
            }
        }
    });
    return ans.join(' ');
}
