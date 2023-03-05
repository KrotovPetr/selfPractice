const fs = require('fs');
let blocks = fs.readFileSync('./input.txt', 'utf8').split('\n');
fs.writeFileSync('./output.txt', ex3(blocks[1], blocks[0]).toString());

function ex3(text, words) {
    words = words.split(' ').sort();
    words = words.map((elem) => {
        return elem.replace('\r', '');
    });
    let map = new Set(words);
    text = text.split(' ');
    for (let i = 0; i < text.length; i++) {
        let str = '';
        let elem = text[i];
        for (let k = 0; k < Math.min(100, elem.length); k++) {
            str += elem[k];
            if (map.has(str)) {
                text[i] = str;
                break;
            }
        }
    }
    return text.join(' ');
}
