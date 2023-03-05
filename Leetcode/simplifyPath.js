/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (str) {
    // console.log(str);
    let arr = str.split('/');
    // console.log(arr);
    let str2 = '/';
    let arr2 = [];
    arr.forEach((elem) => {
        if (elem !== '') {
            if (elem === '.') {
            }
            if (elem === '..') {
                arr2.pop();
            }
            if (elem !== '..' && elem !== '.') {
                arr2.push(elem);
            }
        }
    });

    return str2 + arr2.join('/');
};
