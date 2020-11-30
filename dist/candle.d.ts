export declare class Candle {
    readonly open: number;
    readonly high: number;
    readonly low: number;
    readonly close: number;
    readonly begin: number;
    readonly duration: number;
    readonly volume: number;
    constructor(open: number, high: number, low: number, close: number, begin: number, duration: number, volume: number);
    toString(): string;
    /**
     * @param {Candle} c
     */
    static fromCandle(c: Candle): Candle;
    /**
     *
     * @param {Candle} candle1
     * @param {Candle} candle2
     */
    static areSameDateAndDuration(candle1: Candle, candle2: Candle): boolean;
    static areSameValues(candle1: Candle, candle2: Candle): boolean;
    /**
     * Intended for use as first argument to moogoose.Schema() invocation...
     */
    static getSchema(): any;
    static isCandle(candidate: any): boolean;
    private static getOneRandomCandle;
}
