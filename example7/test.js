var Point = /** @class */ (function () {
    function Point(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    Point.prototype.print = function () {
        console.log(this._x, this._y, this._z);
    };
    ;
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point1 = new Point(10, 15);
point1.print();
var point2 = new Point(10, 15, 5);
point2.print();
