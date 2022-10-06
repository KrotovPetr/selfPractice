/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = strs.map((elem)=>{
        return elem.split("");
    })
    let ans = "";
    for(let i=0;i<strs[0].length;i++){
        let flag = true;
        for(let j=1;j<strs.length;j++){
            if(strs[0][i]!==strs[j][i]){
                flag = false;
                break;
            }
        }
        if(flag){
            ans+=strs[0][i];
        } else {
            break;
        }
    }
    return ans;
};