function anagrams(str1, str2) {
    str1 = str1.split('').sort().join('');

    let ansArr = [];
    str2.forEach((elem) => {
        if (str1.localeCompare(elem.split('').sort().join('')) === 0) {
            ansArr.push(elem);
        }
    });
    return ansArr;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// const assert = require("chai").assert;
//
// describe("Anagrams", function() {
//     it("should return a list of all anagrams", function() {
//         assert.deepEqual(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa']);
//         assert.deepEqual(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']);
//     });
//
//     it("should return an empty array for no anagrams", function() {
//         assert.deepEqual(anagrams('laser', ['lazing', 'lazy',  'lacer']), []);
//     });
// });
