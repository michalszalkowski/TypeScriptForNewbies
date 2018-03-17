class Point {

    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public print() {
        console.log(this._x, this._y);
    };

    public get x(): number {
        return this._x;
    }


}

{

    let point = new Point(10, 15);
    point.print();
}