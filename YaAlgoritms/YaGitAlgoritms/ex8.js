/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let newLine = '';

    s = s.split(' ');

    for (let i = 0; i < s.length; i++) {
        newLine += s[i].split('').reverse().join('') + ' ';
    }

    return newLine.trim();
};
