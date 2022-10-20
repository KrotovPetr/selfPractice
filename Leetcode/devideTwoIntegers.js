/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let cons = 0;
    let isGood = false
    if((divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0)){
        isGood = true;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while(dividend>=divisor){
        dividend-=divisor;
        cons++;

    }
    return isGood ? cons : (-1) * cons
};