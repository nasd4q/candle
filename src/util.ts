export function nearlyEquals(n1: number, n2: number): boolean {
    let maxAbs = Math.max(Math.abs(n1), Math.abs(n2));
    if (maxAbs < 1e-14) {
        return true
    }
    let error = Math.abs(n1-n2) / maxAbs;
    return error < 1e-15;
}

/*
let n = 0.0000000000000001;
let m = 0.000;
let p = -0.000000000000001;

console.log(nearlyEquals(n,m));
console.log(nearlyEquals(m,p));
console.log(nearlyEquals(n,p));
 */
