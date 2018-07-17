// JavaScript source code
function reverse(array) {   //Creates and returns a new reversed array
    var arr = [];
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        arr.push(array[i]);
    }
    return arr;
}

function reverseInPlace(array) {    //Reverses the source array itself
    var arr = [];
    var length = array.length;
    for (var i = 0; i < length; i++) {
        arr.push(array.pop());
    }
    for (var i = 0; i < length; i++) {
        array[i] = arr[i];
    }
}