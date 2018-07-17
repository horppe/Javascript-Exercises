 // JavaScript source code
var arr1 = [1, 2, 3];
var arr2 = [5, 5, 5];
var arr3 = [6, 6, 6];
var mainArr = [];
mainArr.push(arr1);
mainArr.push(arr2);
mainArr.push(arr3);

var array = mainArr.reduce(function (a, b) {
    if (typeof(a) != "object") {
        a = [];
    }
    return a.concat(b);
}, 0);
console.log(array);