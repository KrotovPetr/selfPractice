function refactor(text, tokensMap, rules) {
    let mapTokens = new Map();
    let mapRules = new Map();

    for(let prop in tokensMap){
        mapTokens.set(prop, {pattern: tokensMap[prop], hasShown: false})
    }

    for(let prop in rules){
        mapRules.set(prop, rules[prop])
    }

    let textArr = text.split("");

    for(let [key, value] of mapTokens.entries()){
        while(text.indexOf(value.pattern)!==-1){
            let index = text.indexOf(value.pattern);
            if(!value.hasShown){
               textArr = [...textArr.slice(0, index), ...`let ${key}`.split(""), ...textArr.slice(index+key.length+1, text.length);
            } else {

            }
        }
    }



    console.log(text);
    // for(let prop of copyTokensMap){
    //     console.log(tokensMap)
    // }
}


const rules = {
    "l": "1",
    "v": "3",
    "_": "\n", // Перевод строки
    "=": " = ", // Символ присваивания
}

const tokensMap  = {
    "val": "lg",
}
refactor("lg=lv_11_lg=vl", tokensMap, rules)