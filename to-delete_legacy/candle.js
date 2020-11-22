class Candle {
    /**
     * 
     * @param {number} open 
     * @param {number} high 
     * @param {number} low 
     * @param {number} close 
     * @param {number} begin timestamp in ms
     * @param {number} duration in ms
     * @param {number} volume
     */
    constructor(open, high, low, close, begin, duration, volume) {
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.begin = begin;
        this.duration = duration;
        this.volume = volume;
    }

    /**
     * @param {Candle} c 
     */
    static fromCandle(c) {
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
    static areSameDateAndDuration(candle1, candle2) {
        if (!candle1 || !candle2) {
            throw new Error("One of candles passed is null or undefined. (At least falsy)");
        }

        return candle1.begin === candle2.begin && candle1.duration === candle2.duration;
    }

    static areSameValues(candle1, candle2) {
        if (!candle1 || !candle2) {
            throw new Error("One of candles passed is null or undefined. (At least falsy)");
        }

        return Object.keys(candle1).every(key => candle1[key] === candle2[key]);
    }

    /**
     * Returns a description string for a given duration (`null` if given duration
     * could not be matched)
     * 
     * @param {number} duration in ms
     * @returns {string}
     */
    static describeDuration(duration) {
        let matches = Object.values(Candle.resolutions).filter(v => v.ms === duration);
        if (matches.length === 1) {
            return matches[0].desc;
        }
        throw new Error("Duration not found among Candle.durations values :", duration);
    }

    static durationAsMs(duration) {
        return duration;
    }

    /**
     * Intended for use as first argument to moogoose.Schema() invocation...
     */
    static getSchema() {
        let c = new Candle(32.30, 33.015, 30, 31.5, 1605466663732,
            Candle.durations.D1, 178087);
        return Object.fromEntries(
            Object.keys(c).map(k => [k, Object.getPrototypeOf(c[k]).constructor]));

    }

    toString() {
        return "open :" + this.open + '\n' +
            "high :" + this.high + '\n' +
            "low :" + this.low + '\n' +
            "close :" + this.close + '\n' +
            "begin :" + new Date(this.begin).toISOString() + '\n' +
            "duration :" + Candle.describeDuration(this.duration) + '\n' +
            "volume :" + this.volume + '\n';;
    }
}

/** Dictionnary for potential durations parameter of a candle */
Candle.durations = {
    /** Annuel */
    Y1: 365 * 24 * 60 * 60 * 1000,
    /** Mensuel */
    M1: 365 * 24 * 60 * 60 * 1000 / 12,
    /** Hebdomadaire */
    W1: 7 * 24 * 60 * 60 * 1000,
    /** Journalier */
    D1: 24 * 60 * 60 * 1000,
    /** 4 Heures */
    H4: 4 * 60 * 60 * 1000,
    /** 3 Heures */
    H3: 3 * 60 * 60 * 1000,
    /** 2 Heures */
    H2: 2 * 60 * 60 * 1000,
    /** 1 Heure */
    H1: 60 * 60 * 1000,
    /** 30 Min */
    m30: 30 * 60 * 1000,
    /** 15 Min */
    m15: 15 * 60 * 1000,
    /** 10 Min */
    m10: 10 * 60 * 1000,
    /** 5 Min */
    m5: 5 * 60 * 1000,
    /** 3 Min */
    m3: 3 * 60 * 1000,
    /** 2 Min */
    m2: 2 * 60 * 1000,
    /** 1 Min */
    m1: 60 * 1000,
    /** 10 Sec */
    s10: 10 * 1000,
    /** 1 Sec */
    s1: 1000,
    /** Tick */
    Tick: 1,
}

/** Has been replaced with Candle.durations... but still useful for method
 * Candle.describe
 */
Candle.resolutions = {
    /** Annuel */
    Y1: { desc: "Annuel", ms: 31536000000 },
    /** Mensuel */
    M1: { desc: "Mensuel", ms: 2628000000 },
    /** Hebdomadaire */
    W1: { desc: "Hebdomadaire", ms: 604800000 },
    /** Journalier */
    D1: { desc: "Journalier", ms: 86400000 },
    /** 4 Heures */
    H4: { desc: "4 Heures", ms: 14400000 },
    /** 3 Heures */
    H3: { desc: "3 Heures", ms: 10800000 },
    /** 2 Heures */
    H2: { desc: "2 Heures", ms: 7200000 },
    /** 1 Heure */
    H1: { desc: "1 Heure", ms: 3600000 },
    /** 30 Min */
    m30: { desc: "30 Min", ms: 1800000 },
    /** 15 Min */
    m15: { desc: "15 Min", ms: 900000 },
    /** 10 Min */
    m10: { desc: "10 Min", ms: 600000 },
    /** 5 Min */
    m5: { desc: "5 Min", ms: 300000 },
    /** 3 Min */
    m3: { desc: "3 Min", ms: 180000 },
    /** 2 Min */
    m2: { desc: "2 Min", ms: 120000 },
    /** 1 Min */
    m1: { desc: "1 Min", ms: 60000 },
    /** 10 Sec */
    s10: { desc: "10 Sec", ms: 10000 },
    /** 1 Sec */
    s1: { desc: "1 Sec", ms: 1000 },
    /** Tick */
    Tick: { desc: "Tick", ms: 1 },
}

module.exports = { Candle };