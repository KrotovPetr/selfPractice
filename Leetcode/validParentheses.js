/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ansArr = [];
    s = s.split("");
    s.forEach((elem)=>{
        if(elem === ")"){
            if(ansArr[ansArr.length-1]==="("){
                ansArr.pop();
            } else {
                ansArr.push(elem);
            }
        }
        if(elem === "}"){
            if(ansArr[ansArr.length-1]==="{"){
                ansArr.pop();
            } else {
                ansArr.push(elem);
            }
        }
        if(elem === "]"){
            if(ansArr[ansArr.length-1]==="["){
                ansArr.pop();
            } else {
                ansArr.push(elem);
            }
        }
        if(elem === "(" || elem === "{" || elem === "["){
            ansArr.push(elem);
        }
    })
    if(ansArr.length!==0){
        return false;
    }
    return true;
}

let s = "()[]{}"

console.log(isValid(s))