function ex1(arr){
    const ansArr = [];
    const set = new Set();

    let dict = new Map();
    arr.forEach((elem)=>{
        dict.set(elem.from,elem.to);
        set.add(elem.to);
    })
    let startPoint = ""
    for(let key of dict.keys()){
        if(!set.has(key)){
            startPoint = key;
            break;
        }
    }
    let flag = true;
    while(flag){
        if(dict.has(startPoint)){
            ansArr.push({from: startPoint, to: dict.get(startPoint)});
            startPoint = dict.get(startPoint);
            // dict.delete(startPoint);
        } else {
            flag = false;
        }
    }

    return ansArr;
}

const arr = [
    {from: "London", to: "Kiyv"},
    {from: "Paris", to: "Mexico"},
    {from: "Mexico", to: "London"},
    {from: "Berlin", to: "Paris"},
    {from: "Moscow", to: "Berlin"},

]

console.log(ex1(arr))