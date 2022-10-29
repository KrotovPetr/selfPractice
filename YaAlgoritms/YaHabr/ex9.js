function isPossible(str1, str2){
    if(Math.abs(str1.length-str2.length)>1){
        return false;
    }
    let common = 0;
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let copyArr = [];
    let maxLength = Math.max(arr1.length, arr2.length)
    for(let i=0;i<maxLength;i++){
        if(arr1[i]!==arr2[i]){
            if(arr2.length>arr1.length){
                arr2[i]=null;
                copyArr = [...arr1.slice(0,i+1), null, ...arr1.slice(i+1, arr1.length)]
                break;
            }
            if(arr2.length<arr1.length){
                arr1[i]=null;
                break;
            }

        }
    }
    console.log(arr1)
    console.log(arr2)
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