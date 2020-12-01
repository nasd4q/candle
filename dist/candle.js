"use strict";
exports.__esModule = true;
exports.Candle = void 0;
var duration_1 = require("./duration");
var util_1 = require("./util");
var Candle = /** @class */ (function () {
    function Candle(open, high, low, close, begin, duration, volume) {
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.begin = begin;
        this.duration = duration;
        this.volume = volume;
    }
    Candle.prototype.toString = function () {
        return "open : " + this.open + '\n' +
            "high : " + this.high + '\n' +
            "low : " + this.low + '\n' +
            "close : " + this.close + '\n' +
            "begin : " + new Date(this.begin).toISOString() + '\n' +
            "duration : " + duration_1.Duration.fromMs(this.duration).getDescription() + '\n' +
            "volume : " + this.volume + '\n';
        ;
    };
    /**
     * @param {Candle} c
     */
    Candle.fromCandle = function (c) {
        return new Candle(c.open, c.high, c.low, c.close, c.begin, c.duration, c.volume);
    };
    /**
     *
     * @param {Candle} candle1
     * @param {Candle} candle2
     */
    Candle.areSameDateAndDuration = function (candle1, candle2) {
        if (!candle1 || !candle2) {
            throw new Error("One of candles passed is null or undefined. (At least falsy)");
        }
        return candle1.begin === candle2.begin && candle1.duration === candle2.duration;
    };
    Candle.areSameValues = function (candle1, candle2) {
        if (!candle1 || !candle2) {
            throw new Error("One of candles passed is null or undefined. (At least falsy)");
        }
        return Object.keys(candle1).every(function (key) {
            if (candle1[key] === candle2[key]) {
                return true;
            }
            if (typeof candle1[key] === 'number' && typeof candle2[key] === 'number') {
                return util_1.nearlyEquals(candle1[key], candle2[key]);
            }
            return candle1[key] === candle2[key];
        });
    };
    /**
     * Intended for use as first argument to moogoose.Schema() invocation...
     */
    Candle.getSchema = function () {
        var c = this.getOneRandomCandle();
        return Object.fromEntries(Object.keys(c).map(function (k) { return [k, Object.getPrototypeOf(c[k]).constructor]; }));
    };
    Candle.isCandle = function (candidate) {
        var c = this.getOneRandomCandle();
        var keys = Object.keys(c);
        return keys.every(function (k) {
            return candidate[k] && (typeof c[k] === typeof candidate[k]);
        });
    };
    Candle.getOneRandomCandle = function () {
        var c = new Candle(32.30, 33.015, 30, 31.5, 1605466663732, duration_1.Duration.D1.getMs(), 178087);
        return c;
    };
    return Candle;
}());
exports.Candle = Candle;
