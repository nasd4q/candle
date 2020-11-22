const { Candle } = require("./candle");

let c = new Candle(12, 12.25, 11.003, 11.50, 1605483170038, Candle.durations.m1, 78078);

console.log(JSON.stringify(c));