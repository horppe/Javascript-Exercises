// JavaScript source code
function getRange(start, end) {
    var range = [];

    if (start > end) {
        for (var i = start; i >= end; i += (arguments[2])) {
            range.push(i);
        }
        return range;
    }
    for (var i = start; i <= end; i += (arguments[2])) {
        range.push(i);
    }
    return range;
}
function getSum(range) {
    var total = 0;
    for (var i = 0; i < range.length; i++) {
        total += range[i];
    }
    return total;
}
console.log(getSum(getRange(1, 10)));