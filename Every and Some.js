// JavaScript source code
function every(array, condition) {
    for (var i in array) {
        if (condition(i)) {
            return false;
        }
    }
    return true;
}

function some(array, condition) {
    for (var i in array) {
        if (condition(i)) {
            return true;
        }
    }
    return false;
}