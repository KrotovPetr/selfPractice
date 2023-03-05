/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    tokens.forEach((elem) => {
        if (!isNaN(Number.parseInt(elem))) {
            elem = Number.parseInt(elem);
            stack.unshift(elem);
        } else {
            let res = null;
            switch (elem) {
                case '+':
                    res = stack[0] + stack[1];
                    stack.shift();
                    stack.shift();
                    stack.unshift(res);
                    break;
                case '-':
                    res = stack[0] - stack[1];
                    stack.shift();
                    stack.shift();
                    stack.unshift(res);
                    break;
                case '*':
                    res = stack[0] * stack[1];
                    stack.shift();
                    stack.shift();
                    stack.unshift(res);
                    break;
                case '/':
                    res =
                        stack[1] / stack[0] > 0
                            ? Math.floor(stack[1] / stack[0])
                            : Math.ceil(stack[1] / stack[0]);
                    stack.shift();
                    stack.shift();
                    stack.unshift(res);
                    break;
                default:
                    throw new Error('Incorrect symbol!');
            }
        }
    });
    return stack[0];
};

console.log(
    evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+',
    ])
);
