const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let strSize = -1;
let str = "";

function findMinSubstring() {
    let l = 0;
    let r = 0;
    let minSize = str.length + 10;
    let set = new Set();

    while (l !== str.length) {

        set.add(str[r]);

        if (set.size === 4) {
            if (minSize > r - l) {
                minSize = r - l;
            }
            set.clear();
            l++;
            r = l;
            continue;
        } else {
            r++;
        }
        if (minSize < r - l) {
            set.clear();
            l++;
            r = l;
        }
        if (r === str.length) {
            if (set.size < 4) {
                break;
            } else {
                if (minSize > r - l) {
                    minSize = r - l;
                    l++;
                    r = l;
                    set.clear();
                }
            }
        }
    }

    if (minSize > str.length) {
        console.log(-1);
    } else {
        console.log(minSize + 1);
    }
}

rl.on('line', (line) => {
    if (strSize === -1) {
        strSize = Number.parseInt(line);
    } else {
        str = line.split('');
        rl.close();
    }
}).on('close', () => {
   findMinSubstring();
});


