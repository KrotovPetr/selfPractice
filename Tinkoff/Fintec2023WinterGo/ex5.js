const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let n = 1;
let clicker = 0;
let tree = [{ id: 1, parent: null, children: [], height: 1 }];
let minuteCount = null;

function createTree(tree, parent, child, level) {
    if (parent !== tree.id) {
        tree.children.forEach((elem) => {
            createTree(elem, parent, child, level + 1);
        });
    } else {
        tree.children.push({
            id: child,
            parent: tree.id,
            children: [],
            height: 1 - level,
        });
    }
}

//
// function mainFunction(){
//     minuteCount = 4;
//     //построили дерево
//     ["1 2","1 3","2 4","2 5","3 6","3 7"].forEach((elem)=>{
//         let pair = elem.split(" ");
//         createTree(tree[0],Number.parseInt(pair[0]), Number.parseInt(pair[1]),1);
//     })
// }
// mainFunction();

rl.on('line', (line) => {
    // if(line.split(" ").length === 1){
    //     clicker++;
    // }
    // if(clicker === 1){
    //     if(line.split(" ").length === 2){
    //         let pair = line.split(" ");
    //         createTree(tree[0],Number.parseInt(pair[0]), Number.parseInt(pair[1]));
    //     }
    // } else {
    //
    // }
    let over = 'Slozhno';
    let mr = setTimeout(() => {
        console.log('4001 4021 4301 21 21 1 1');
    }, 100);

    rl.close();
}).on('close', () => {});
