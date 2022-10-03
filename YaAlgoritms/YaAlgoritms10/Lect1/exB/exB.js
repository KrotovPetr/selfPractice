const fs = require("fs");
let text = fs.readFileSync("./input.txt", "utf8").split("\n");
text = text.map((elem)=>+elem.replace("\r",""));
function exB(text){
    if((text[1]+text[2]) > text[0] && (text[0]+text[2]) > text[1] && (text[1]+text[0]) > text[2]  ){
        return "YES"
    }
    return "NO"
}
fs.writeFileSync("./output.txt", exB(text));

