var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, '2', 'test', true];
var Colors;
(function (Colors) {
    Colors["RED"] = "RED";
    Colors["WHITE"] = "WHITE";
    Colors["BLACK"] = "BLACK";
})(Colors || (Colors = {}));
;
console.log(Colors.RED);
console.log(Colors.WHITE);
console.log(Colors.BLACK);
