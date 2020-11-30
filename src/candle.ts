import { Duration } from "./duration";

export class Candle {
    public constructor(
        public readonly open: number,
        public readonly high: number,
        public readonly low: number,
        public readonly close: number,
        public readonly begin: number,
        public readonly duration: number,
        public readonly volume: number,
    ) { }

    public toString() {
        return "open : " + this.open + '\n' +
            "high : " + this.high + '\n' +
            "low : " + this.low + '\n' +
            "close : " + this.close + '\n' +
            "begin : " + new Date(this.begin).toISOString() + '\n' +
            "duration : " + Duration.fromMs(this.duration).getDescription() + '\n' +
            "volume : " + this.volume + '\n';;
    }

    /**
     * @param {Candle} c 
     */
    public static fromCandle(c: Candle): Candle {
        return new Candle(
            c.open,
            c.high,
            c.low,
            c.close,
            c.begin,
            c.duration,
            c.volume);
    }

    /**
     * 
     * @param {Candle} candle1 
     * @param {Candle} candle2 
     */
    public static areSameDateAndDuration(candle1: Candle, candle2: Candle) {
        if (!candle1 || !candle2) {
            throw new Error("One of candles passed is null or undefined. (At least falsy)");
        }

        return candle1.begin === candle2.begin && candle1.duration === candle2.duration;
    }

    public static areSameValues(candle1: Candle, candle2: Candle) {
        if (!candle1 || !candle2) {
            throw new Error("One of candles passed is null or undefined. (At least falsy)");
        }

        return Object.keys(candle1).every(key => candle1[key] === candle2[key]);
    }

    /**
     * Intended for use as first argument to moogoose.Schema() invocation...
     */
    public static getSchema() {
        let c = this.getOneRandomCandle();
        return (Object as any).fromEntries(
            Object.keys(c).map(k => [k, Object.getPrototypeOf(c[k]).constructor]));

    }

    public static isCandle(candidate: any): boolean {
        let c = this.getOneRandomCandle();
        let keys = Object.keys(c);
        return keys.every(k => {
            return candidate[k] && (typeof c[k] === typeof candidate[k]);
        });
    }

    private static getOneRandomCandle(): Candle {
        let c = new Candle(32.30, 33.015, 30, 31.5, 1605466663732,
            Duration.D1.getMs(), 178087);
        return c;
    }
}