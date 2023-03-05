//можно лучше
var lengthOfLongestSubstring = function (s) {
    //vars
    let max = 0;
    let arr = [];

    //code
    if (s.length === 0) {
        return 0;
    }

    for (let i = 0; i < s.length; i++) {
        if (arr.length > max) {
            max = arr.length;
        }
        if (arr.indexOf(s[i]) !== -1) {
            let index = arr.indexOf(s[i]);
            while (index >= 0) {
                arr.shift();
                index--;
            }
        }
        arr.push(s[i]);
    }

    if (arr.length > max) {
        max = arr.length;
    }

    return max;
};
