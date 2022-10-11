function isGrowUp(arr){
    let flag = true;
    let cur = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=cur){
          cur = arr[0];
        } else {
            flag = false;
            break;
        }
    }

    return flag;
}