let drawPoint = (x, y) => {
    console.log(x, y);
};

let drawPoint2 = (point) => {
    console.log(point);
};

let drawPoint3 = (point: { x: number, y: number }) => {
    console.log(point);
};

interface Point {
    x: number,
    y: number
}

let drawPoint4 = (point: Point) => {
    console.log(point);
};

drawPoint(10, 15);

drawPoint2({x: 10, y: 15});

drawPoint3({x: 10, y: 15});

drawPoint4({x: 10, y: 15});