function ex1(N, staff, K) {
    if (K === 0) {
        return 0;
    }
    staff = staff.sort((a, b) => {
        if (a < b) return 1;
        if (a === b) return 0;
        if (a > b) return -1;
    });
    let sum = 0;
    for (let i = 0; i < K; i++) {
        sum += staff[i];
    }
    return sum;
}

console.log(ex1(12, [22, 7, 24, 24, 11, 22, 24, 3, 9, 16, 2, 19], 7));
