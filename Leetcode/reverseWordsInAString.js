/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s
        .trim()
        .replace(/\s{2,}/g, ' ')
        .split(' ');
    console.log(s);
    let ans = '';
    for (let i = s.length - 1; i > 0; i--) {
        ans += s[i] + ' ';
    }
    ans += s[0];
    return ans;
};
