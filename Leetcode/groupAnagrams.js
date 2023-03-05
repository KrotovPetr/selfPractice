/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let copyArr = strs;
    let dict = new Map();
    copyArr = copyArr.map((elem) => {
        return elem.split('').sort().join('');
    });
    copyArr.forEach((elem, current) => {
        if (!dict.has(elem)) {
            let arr = [];
            arr.push(strs[current]);

            dict.set(elem, arr);
        } else {
            let value = dict.get(elem);
            value.push(strs[current]);
            dict.set(elem, value);
        }
    });
    copyArr = [];
    for (let value of dict.values()) {
        copyArr.push(value);
    }
    return copyArr;
};
let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
