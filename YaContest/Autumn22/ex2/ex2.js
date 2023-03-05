function sumExcept(arr, index, countDigit) {
    let ind = index;
    if (ind < 0) ind = 0;
    let count = countDigit;
    if (count < 0) count = 0;

    const result = arr.slice(0, ind).concat(arr.slice(ind + count));
    result.push(0);
    return result.reduce((a, b) => {
        if (Number.isInteger(a)) {
            return a + b;
        } else {
            return b;
        }
    }, 0);
}

module.exports = sumExcept;

console.log(sumExcept([1.2, 3.1, 4.2, 5.3, 8.1, 2.13, 0.2], 0, 0));
// module.exports = sumExcept;
