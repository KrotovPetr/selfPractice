// var isPalindrome = function(x) {
//     x = x.toString().split("");
//     let middle = Math.ceil((x.length)/2)-1;
//     let copyX = x.slice(0,middle+1).reverse().join("");
//     console.log(x.slice(middle, x.length).join(""))
//     return copyX === x.slice(middle, x.length).join("");
// };

var isPalindrome = function (x) {
    x = x.toString();
    console.log(x);
    return x.split('').reverse().join('').localeCompare(x) === 0 ? true : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(11));
