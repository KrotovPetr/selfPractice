const fs = require("fs");
let text = fs.readFileSync("./input.txt", "utf8").split("\r");
text = text.map((elem)=>{
    return elem.replace("\n","");
})
function ex1(temps, mode){
    temps = temps.split(" ").map((elem)=>+elem);
    switch(mode){
        case "heat": return temps[1].toString();
        case "freeze":
        case "fan": return temps[0].toString();
        case "auto": return temps[0] > temps[1] ? temps[1].toString() : temps[0].toString();
    }
    return "";
}
fs.writeFileSync("./output.txt", ex1(text[0],text[1]));
