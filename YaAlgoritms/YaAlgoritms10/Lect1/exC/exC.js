const fs = require(`fs`);

let text = fs.readFileSync('./input.txt','utf-8').split("\n")
text = text.map((elem)=>elem.replace("\r",""));
function exC(text){
    text = text.map((elem)=>{
        return elem.replace(/[()\-+]/gi,"")
    })
    text = text.map((elem)=>{
        if(elem.length === 11){
            return elem.replace(/\d\d\d\d/i,"")
        } else return elem;
        }
    )
    text = text.map((elem)=>{
        return elem.split("").sort().join("");
    })
    for(let i=1;i<text.length;i++){
        if(text[0].localeCompare(text[i]) === 0){
            text[i]= "YES";
        } else {
            text[i] = "NO";
        }
    }
    text = text.slice(1, text.length);
    // console.log(text);
    return text;
}
fs.writeFileSync("./output.txt",exC(text));
