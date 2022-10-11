// function ex1(blocks){
//     let i = 0;
//     while((i*(i+1)/2)<=blocks){
//         i++;
//     }
//     return i-1;
// }
const fs = require("fs");
let blocks = Number.parseInt(fs.readFileSync("./input.txt", "utf8"));

    let i = 0;
    while((i*(i+1)/2)<=blocks){
        i++;
    }

    let wastedBlocks = 0;
    let steps = 0;
    while(blocks-wastedBlocks-steps-1>=0){

        steps++;
        wastedBlocks+=steps;
    }
    // console.log(steps)
function getAns(blocks){
    if(blocks === 0){
        return "0";
    }
    let wastedBlocks = 0;
    let steps = 0;
    while(blocks-wastedBlocks-steps-1>=0){
        steps++;
        wastedBlocks+=steps;
    }
    return steps.toString();
}

fs.writeFileSync("./output.txt", getAns(blocks));
