function groupAllWords(arr) {
    let ans = [];
    let dict = new Map();
    arr.forEach((elem) => {
        let copy = elem.split('').sort().join('');
        if (dict.has(copy)) {
            let current = dict.get(copy);
            current.push(elem);
            dict.set(copy, current);
        } else {
            dict.set(copy, [elem]);
        }
    });

    for (let value of dict.values()) {
        ans.push(value);
    }
    return ans;
}

console.log(groupAllWords(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
