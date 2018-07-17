// JavaScript source code
function deepEqual(valueOne, valueTwo) {
    if (valueOne == null || valueTwo == null) {
        return;
    }
    if (!(typeof(valueOne) == "object")) {
        return valueOne == valueTwo;
    }
    else {
        var properties = {};
        for (var i in valueOne) {
            if (i in valueTwo)
                if (!(valueOne[i] == valueTwo[i]))
                    return false;
            else
                return false;
        }
    }
}