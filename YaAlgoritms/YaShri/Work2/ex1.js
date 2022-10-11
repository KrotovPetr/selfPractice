const fs = require("fs");
let blocks = fs.readFileSync("./input.txt", "utf8").split("\n");
// console.log(blocks)
fs.writeFileSync("./output.txt",ex1(blocks).toString())

function checkSet(set1, set2){
    // console.log(set2);
    let set12 = new Set();
    set1.forEach((elem)=>{
        if(set2.has(elem)){
            set12.add(elem);
        }
    })
    return set12;
}

function fullSet(set1, set2, set3){
    let setAll = new Set();
    set1.forEach((elem)=>{
        if(!setAll.has(elem)){
            setAll.add(elem);
        }
    })

    set2.forEach((elem)=>{
        if(!setAll.has(elem))
            setAll.add(elem);
    })
    set3.forEach((elem)=>{
        if(!setAll.has(elem))
            setAll.add(elem);
    })
        return Array.from(setAll).sort((a,b)=>{
            if(a>b) return 1;
            if(a===b) return 0;
            return -1;
            });
}

function ex1(arr){

    let subArr = [];
    arr.forEach((elem,current)=>{
        if(current % 2 !== 0 && elem !== ""){
            subArr.push(elem);
        }
    })

    let setArr = [];
    let set1 = new Set();
    let set2 = new Set();
    let set3 = new Set();
    setArr.push(set1);
    setArr.push(set2);
    setArr.push(set3);

    subArr.forEach((elem,current)=>{
        if(elem !==""){
            let arr= elem.split(" ");
            // console.log(arr)
            arr.forEach((el)=>{
                setArr[current].add(Number.parseInt(el));
            })

        }

    })
    // console.log(setArr)
    let set12 = checkSet(setArr[0],setArr[1]);
    // console.log(set12)
    let set23 = checkSet(setArr[1],setArr[2]);
    let set13 = checkSet(setArr[0],setArr[2]);
    // console.log(set23)
    let set123 = fullSet(set12, set23, set13);
    // console.log(set123)

    return set123.join(" ");
}


