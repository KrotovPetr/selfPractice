/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let set = [];
    let maxStr = '';
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        if (set.includes(s[i])) {
            if (len > maxStr.length) {
                maxStr = set.join('');
            }
            while (set.includes(s[i])) {
                set.shift(s[i]);
                len--;
            }
        }
        set.push(s[i]);
        len++;
    }
    if (len > maxStr.length) {
        maxStr = set.join('');
    }
    return maxStr;
};
