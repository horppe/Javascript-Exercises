// JavaScript source c
(function monthName(exports) {
    var monthnames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    exports.getMonthName = function(number) {
        return monthnames[number];
    }

    exports.getMonthNumber = function (name) {
        return monthnames.indexOf(name);
    }
})(this.month = {});

console.log(month.getMonthName(3));
console.log(month.getMonthNumber("June"));