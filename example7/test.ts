class Point {

    private _x: number;
    private _y: number;
    private _z: number;

    constructor(x: number, y: number, z?: number) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    public print() {
        console.log(this._x, this._y, this._z);
    };

    public get x(): number {
        return this._x;
    }
}

let point1 = new Point(10, 15);
point1.print();

let point2 = new Point(10, 15, 5);
point2.print();