// // let a = {age:18};
// // let b = {age: a};
// // let c = a;
// // a=null;
// // console.log(c);
//
//
// class Samurai{
//     constructor() {
//         this.name = 1;
//     }
// }
//
// let dimych = new Samurai();
// let a = [1,2]
// console.log(Object.is(NaN, NaN))

// создаем объект, привязанный к `anotherObject`

function A() {
    var subA = Object.create(A.prototype);

    return subA;
}

A.prototype.yes = function () {
    return true;
};

function B() {
    var subB = {};

    Object.setPrototypeOf(subB, B.prototype);

    return subB;
}

B.prototype.yes = function () {
    return true;
};

var runs = 25;
var iterations = [
    0, 1, 2, 5, 10e1, 10e2, 10e3, 10e4, 10e5, 10e6, 25e6, 50e6, 75e6, 10e7,
];
var results = {};

iterations.forEach(function (iterate) {
    var i;
    var start;

    if (!results[iterate]) {
        results[iterate] = { a: 0, b: 0 };
    }

    start = new Date();

    for (i = 0; i < iterate; i++) {
        var a = new A();
        if (a.yes() !== true) {
            throw new Error('incorrect output @ ' + i);
        }
    }

    results[iterate].a += new Date() - start;

    start = new Date();

    for (i = 0; i < iterate; i++) {
        var b = new B();
        if (b.yes() !== true) {
            throw new Error('incorrect output @ ' + i);
        }
    }

    results[iterate].b += new Date() - start;
});

iterations.forEach(function (iterate) {
    var a = results[iterate].a / runs;
    var b = results[iterate].b / runs;

    console.log('Iteration(s):           ', iterate);
    console.log('==================================');
    console.log('Object.create:          ', a);
    console.log('Object.setPrototypeOf:  ', b);
    console.log('');
});
