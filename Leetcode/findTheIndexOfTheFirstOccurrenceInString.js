/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let ex = [...needle];
    let counter = 0;
    haystack = haystack.split('');
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === ex[0]) {
            for (let j = 0; j < ex.length; j++) {
                if (ex[j] === haystack[i + j]) {
                    counter++;
                }
            }
            if (counter === ex.length) {
                return i;
            } else {
                counter = 0;
            }
        }
    }

    return -1;
};
