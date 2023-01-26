const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let arr = [];
let set = new Set();
let len = null;
let count =0;
// rl.on('line', function(line) {
//     // console.log("Input: "+ line + "  "+arr+"   "+len);
//     if(len === null){
//         len = Number.parseInt(line);
//     } else {
//         arr.push(Number.parseInt(line));
//         set.add(Number.parseInt(line))
//     }
//     // console.log((arr.length === len && len!==null) + `  ` + "len: "+ len+ '  '+arr.length)
//     if(arr.length === len && len !== null){
//         rl.close();
//     }
//     // if(arr.length === 0){
//     //     len = Number.parseInt(line);
//     // }
//     // if(arr.length>0 && len!==null){
//     //     arr.push(Number.parseInt(line));
//     // }
//     // if(arr.length===len){
//     //     rl.close();
//     // }
//
// }).on('close', function(){
//     set.forEach((elem, current)=>{
//         let result = max_xor(set.slice(0,elem+1),current+1)
//         console.log(result.toString())
//     })
//     process.exit(0);
// })


rl.on('line', function(line) {
    // console.log("Input: "+ line + "  "+arr+"   "+len);
    if(len === null){
        len = Number.parseInt(line);
    } else {
        count++;
        if(!set.has(Number.parseInt(line))){
            arr.push(Number.parseInt(line));
            set.add(Number.parseInt(line))
        }
        console.log(max_xor(arr, arr.length))
    }
    // console.log((arr.length === len && len!==null) + `  ` + "len: "+ len+ '  '+arr.length)
    if(count === len && len !== null){
        rl.close();
    }

}).on('close', function(){
    // console.log(arr);
    process.exit(0);
})


function max_xor(arr, n)
{
    let maxx = 0, mask = 0;
    let se = new Set();
    for (let i = 30; i >= 0; i--)
    {
        mask |= (1 << i);
        for (let j = 0; j < n; ++j)
        {
            se.add(arr[j] & mask);
        }

        let newMaxx = maxx | (1 << i);
        for (let prefix of se.keys())
        {
            if (se.has(newMaxx ^ prefix))
            {
                maxx = newMaxx;
                break;
            }
        }
        se.clear();
    }
    return maxx;
}

