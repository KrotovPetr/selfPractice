module.exports = function(numbers) {
    let dict = {
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        10: 65,
        11: 66,
        12: 67,
        13: 68,
        14: 69,
        15: 70,
        16: 71,
        17: 72,
        18: 73,
        19: 74,
        20: 75,
        21: 76,
        22: 77,
        23: 78,
        24: 79,
        25: 80,
        26: 81,
        27: 82,
        28: 83,
        29: 84,
        30: 85,
        31: 86,
        32: 87,
        33: 88,
        34: 89,
        35: 90,
        36: 97,
        37: 98,
        38: 99,
        39: 100,
        40: 101,
        41: 102,
        42: 103,
        43: 104,
        44: 105,
        45: 106,
        46: 107,
        47: 108,
        48: 109,
        49: 110,
        50: 111,
        51: 112,
        52: 113,
        53: 114,
        54: 115,
        55: 116,
        56: 117,
        57: 118,
        58: 119,
        59: 120,
        60: 121,
        61: 122,
        62: 32,
        63: 95

    }
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>= 0 && numbers[i]<=62){
            numbers[i] = dict[numbers[i]];
        } else {
            numbers[i] = dict[63];
        }

    }
    return + toString()
}

// module.exports = decode;
console.log(decode([14,12,22,10,28,38,53,44,51,55,62,2,0,1,5]))
console.log(decode([17,40,47,47,50,62,18,49,55,40,53,49,62,22,40,40,55,56,51,62,2,0,2,3]))
console.log(decode([17,40,47,47,50,62,32,50,53,47,39,-1]))