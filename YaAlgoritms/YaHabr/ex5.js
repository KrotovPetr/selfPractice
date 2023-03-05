function maxVisits(arr) {
    let visitArr = [];
    arr.forEach((elem) => {
        for (let i = elem[0]; i < elem[1]; i++) {
            if (typeof visitArr[i] !== 'number') {
                visitArr[i] = 1;
            } else {
                visitArr[i]++;
            }
        }
    });
    let max = -1;
    visitArr.forEach((elem, current) => {
        if (elem > max && typeof elem === 'number') {
            max = current;
        }
    });
    return max;
}

console.log(
    maxVisits([
        [1, 2],
        [1, 3],
        [2, 4],
        [2, 3],
    ])
);
