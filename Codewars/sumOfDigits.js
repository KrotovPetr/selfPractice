function digitalRoot(n) {
    while (n > 9) {
        let copyD = n;
        let sum = 0;
        while (copyD > 0) {
            sum += copyD % 10;
            copyD = Math.floor(copyD / 10);
        }
        n = sum;
    }
    return n;
}
