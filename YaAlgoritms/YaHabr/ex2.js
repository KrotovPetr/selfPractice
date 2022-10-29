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

// rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB")


// function getCopied(str){
//     let ans = "";
//     let count = 1;
//     let prevElem = str[0];
//     for(let i=1;str.length;i++){
//         if(prevElem!==str[i]){
//             if(count===1){
//                 ans+=str[i];
//             } else{
//                 ans+=`${str[i]}${count}`;
//             }
//             count = 1;
//             prevElem = str[i];
//         } else {
//             count++;
//         }
//     }
//     ans+=`${str[str.length-1]}${count}`;
//     console.log(ans)
//     return ans;
// }

console.log(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB") === "A4B3C2XYZD4E3F3A6B28")