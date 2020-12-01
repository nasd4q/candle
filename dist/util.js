"use strict";
exports.__esModule = true;
exports.nearlyEquals = void 0;
function nearlyEquals(n1, n2) {
    var maxAbs = Math.max(Math.abs(n1), Math.abs(n2));
    if (maxAbs < 1e-14) {
        return true;
    }
    var error = Math.abs(n1 - n2) / maxAbs;
    return error < 1e-15;
}
exports.nearlyEquals = nearlyEquals;
/*
let n = 0.0000000000000001;
let m = 0.000;
let p = -0.000000000000001;

console.log(nearlyEquals(n,m));
console.log(nearlyEquals(m,p));
console.log(nearlyEquals(n,p));
 */
