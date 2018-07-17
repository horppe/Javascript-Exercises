// JavaScript source code
function Vector(x, y) {
    this.x = x;
    this.y = y;
    this.length = function () {
        return String("( ", x, ", " + y + " )");
    }
    
}
Vector.prototype.plus = function plus(other) {
    return new Vector(this.x + other.x, this.y + other.y);
}

Vector.prototype.minus = function minus(other) {
    return new Vector(this.x - other.x, this.y - other.y);
}