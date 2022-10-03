/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let dict1 = new Map();
    s = s.split("");
    let max = 0;
    let current =0;
    for(let i=0;i<s.length;){
        if(!dict1.has(s[i])){
            dict1.set(s[i],i);
            current++;
        } else {
            if(current>max){
                max = current;
            }
            i = dict1.get(s[i]) + 1;
            dict1.clear();
            dict1.set(s[i],i);
            current = 1;
        }
        i++;
    }
    if(current>max){
        max = current
    }
    return max;
};


// s = "aab"
// s = "abcabcbb"
// s = "aab"
// s = "aab"
console.log(lengthOfLongestSubstring(s))