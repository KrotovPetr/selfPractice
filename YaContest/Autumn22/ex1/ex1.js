function createCountdown(digit) {
    const n = Number.isInteger(digit) ? digit : 0;

    function* counter() {
        for (let i = n; i >= 0; i--) {
            yield i;
        }
    }
    let count = counter();
    return function () {
        let value = count?.next?.()?.value;
        if (value) {
            return value;
        } else {
            return 0;
        }
    };
}

module.exports = createCountdown;
