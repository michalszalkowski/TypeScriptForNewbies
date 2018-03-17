class Point {

    constructor(private _x: number,
                private _y: number,
                private _z?: number) {
    }

    public print() {
        console.log(this._x, this._y, this._z);
    };

    public get x(): number {
        return this._x;
    }

    public set x(val: number) {
        if (val < 0) {
            throw new Error("Value cannot be  less then 0");
        }
        this._x = val;
    }
}

let point2 = new Point(10, 15, 5);
point2.x = 100;
console.log(point2.x);