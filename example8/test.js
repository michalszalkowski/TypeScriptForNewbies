var Point = /** @class */ (function () {
    function Point(_x, _y, _z) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
    }
    Point.prototype.print = function () {
        console.log(this._x, this._y, this._z);
    };
    ;
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            if (val < 0) {
                throw new Error("Value cannot be  less then 0");
            }
            this._x = val;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point2 = new Point(10, 15, 5);
point2.x = 100;
console.log(point2.x);
