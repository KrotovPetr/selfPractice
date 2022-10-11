function decode(message, replaces) {
    let ans = [];
    let dict = new Map();
    message = message.split("");
    replaces.forEach((elem)=>{
        dict.set(elem.from, elem.to);
    })
    let str = "";
    let dictArr = [];
    let countSyn = 0;

    for(let i = 0;i<message.length;i++){
        str+=message[i];
        let flag = false;
        for(let entry of dict.entries()){
            if(entry[0].match(str)!==null){
                flag = true;
                if(entry[0].localeCompare(str)===0){
                    dictArr.push(entry[0]);
                }

            }
        }
        if(flag){
            message[i]=null;
        } else {
            if(dictArr.length > 0){
                str=message[i];
                message[i-1] = dict.get(dictArr[dictArr.length-1]);
                dictArr = [];
                for(let entry of dict.entries()){
                    if(entry[0].match(str)!==null){
                        flag = true;
                        if(entry[0].localeCompare(str)===0){
                            dictArr.push(entry[0]);
                        }
                    }
                }
                if(flag){
                    message[i]=null;
                } else {
                    str="";
                }
            } else {
                str="";
            }
        }


    }
    // console.log(dictArr)
    if(dictArr.length){
        message[message.length-1] = dict.get(dictArr[dictArr.length-1]);
    }
    dictArr=[];
    for(let i=0;i<message.length;i++){
        if(message[i]!==null){
            dictArr.push(message[i]);
        }
    }
    dictArr = dictArr.join("");

    return dictArr;
}

// module.exports = { decode };




// console.log(decode('Aa', [{ from: 'a', to: 'b' }])) //да
// console.log(decode('ab', [{ from: 'a', to: 'b' }])) // нет
console.log(decode('ababBA', [{ from: 'ab', to: 'b' }])) // нет
// console.log(decode('ab', [])) // нет
// console.log(decode('ab', [{ from: 'a', to: '' }])) // нет
// console.log(decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }]))
// console.log(decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }]))
// console.log(decode('ab', [{ from: 'a', to: 'bar' }, { from: 'ab', to: 'foo' }]))
