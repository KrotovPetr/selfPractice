const fs = require("fs");
let text = fs.readFileSync("./input.txt","utf-8").split("\n");
text = text.map((elem)=>+elem.replace("\r",""));
function exD(text){
    if(text[2]<0){
        return "NO SOLUTION";
    }
    if(text[0]===0){
        return "MANY SOLUTIONS";
    }
    let x = (Math.pow(text[2],2) - text[1]) / text[0];

        return x.toString();


}
fs.writeFileSync("./output.txt",exD(text));