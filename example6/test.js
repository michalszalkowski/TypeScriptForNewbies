var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Point.prototype.print = function () {
        console.log(this._x, this._y);
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
{
    var point_1 = new Point(10, 15);
    point_1.print();
}
