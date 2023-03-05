/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    console.log(+num1);
    console.log(+num2);
    let num3 = +num1 * +num2;
    console.log(num3);
    return (+num1 * +num2).toString();
};

console.log(multiply('123456789', '987654321'));
