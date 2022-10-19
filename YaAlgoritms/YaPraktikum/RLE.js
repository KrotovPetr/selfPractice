function rle(str) {
    let current = 0;
    let prevSymb = "";
    let ans = "";
    for(let i=0;i<str.length;i++){
        if(prevSymb===str[i]){
            current++;
        } else {
            if(prevSymb!==""){
                if(current===1){
                    ans+=`${prevSymb}`;
                } else{
                    ans+=`${prevSymb}${current}`;
                }

            }
            prevSymb = str[i];
            current = 1;
        }
    }
    ans+=`${prevSymb}${current}`;
    console.log(ans)
    return ans
}

rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB")