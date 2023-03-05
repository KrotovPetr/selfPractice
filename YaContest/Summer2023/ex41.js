module.exports = function ([loginStamp, logoutStamp], hourRate) {
    const setSalary = function (hour, amount, hourRate) {
        let res;
        const minuteRate = hourRate / 60;

        if (hour >= 18 && hour < 23) {
            res = 1.5 * minuteRate * amount;
        } else if (hour >= 8 && hour < 18) {
            res = minuteRate * amount;
        } else {
            res = 2 * minuteRate * amount;
        }
        return res;
    };
    const login = Math.round(loginStamp[1] / 1000);
    const logout = Math.round(logoutStamp[1] / 1000);

    const firstHourMinutes = 60 - ((login / 60) % 60);
    const lastHourMinutesCount = Math.ceil(60 - (logout % 3600) / 60);

    const startHour = login - firstHourMinutes;
    const endHour = logout - lastHourMinutesCount;
    const hoursCount = Math.round((endHour - startHour) / 3600);

    let result = 0;

    for (let i = 0; i < hoursCount; i++) {
        const currentHour = startHour + i * 60 * 60;
        const hour = new Date(currentHour * 1000).getHours();
        let minutes = 60;
        if (i === 0) {
            minutes = firstHourMinutes;
        }
        if (i === hoursCount - 1) {
            minutes = lastHourMinutesCount;
        }

        result += setSalary(hour, minutes, hourRate);
    }

    // console.log(result.toFixed(2))
    return result.toFixed(2);
};

// console.clear()
// getSalary(
//     [
//         ['login', 1675436400000],
//         ['logout', 1675441800000]
//     ],
//     1000
// );
