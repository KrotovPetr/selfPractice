function getList(arr) {
    let ans = [];
    let dict = new Map();
    arr.forEach((elem) => {
        dict.set(elem[elem.length - 1], elem);
    });
    return ans;
}

const cities = [
    'Геленджик',
    'Домодедово',
    'Казань',
    'Люберцы',
    'Нижний Новгород',
    'Орёл',
    'Санкт-Петербург',
];
