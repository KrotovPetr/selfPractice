function isPossible(str1, str2){
    if(Math.abs(str1.length-str2.length)>1){
        return false;
    }
    let common = 0;
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let copyArr = [];
    let maxLength = Math.max(arr1.length, arr2.length)
    let flag = true;
    for(let i=0;i<maxLength;i++){
        if(arr1[i]!==arr2[i]){
            if(arr2.length>arr1.length){
                arr2[i] = null;
                arr1 = [...arr1.slice(0,i),null,...arr1.slice(i+1, arr1.length)]
                break;
            }
            if(arr2.length<arr1.length){
                arr1[i] = null;
                arr2 = [...arr2.slice(0,i),null,...arr2.slice(i, arr2.length)]
                break;
            }
            if(arr2.length===arr1.length){
                arr1[i] = null;
                arr2[i] = null;
                break;
            }
        }
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]===arr2[i]){
            common++;
        }
    }

    if(common === Math.max(arr2.length, arr1.length)){
        return true;
    }

    return false;

}
console.log(isPossible("str", "strr"))
console.log(isPossible("rstr", "str"))
console.log(isPossible("s2tr", "str"))
console.log(isPossible("s2tr", "s1tr"))
console.log(isPossible("s2tr", "s1tl"))