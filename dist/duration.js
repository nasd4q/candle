"use strict";
exports.__esModule = true;
exports.Duration = void 0;
var Duration = /** @class */ (function () {
    function Duration(code, ms, desc) {
        this.code = code;
        this.ms = ms;
        this.desc = desc;
    }
    Duration.fromMs = function (ms) {
        var durations = Object.values(Duration).filter(function (v) { return v.code && v.ms && v.desc; });
        var candidates = durations.filter(function (c) { return c.ms === ms; });
        if (candidates.length === 1) {
            return candidates[0];
        }
        throw new Error("Couldn't find duration with number of ms : " + ms);
    };
    Duration.fromCode = function (code) {
        var durations = Object.values(Duration).filter(function (v) { return v.code && v.ms && v.desc; });
        var candidates = durations.filter(function (c) { return c.code === code; });
        if (candidates.length === 1) {
            return candidates[0];
        }
        throw new Error("Couldn't find duration with code : " + code);
    };
    Duration.prototype.getCode = function () {
        return this.code;
    };
    Duration.prototype.getMs = function () {
        return this.ms;
    };
    Duration.prototype.getDescription = function () {
        return this.desc;
    };
    Duration.Y1 = new Duration("Y1", 365 * 24 * 60 * 60 * 1000, "Annuel");
    Duration.M1 = new Duration("M1", 365 * 2 * 60 * 60 * 1000, "Mensuel");
    Duration.W1 = new Duration("W1", 7 * 24 * 60 * 60 * 1000, "Hebdomadaire");
    Duration.D1 = new Duration("D1", 24 * 60 * 60 * 1000, "Journalier");
    Duration.H4 = new Duration("H4", 4 * 60 * 60 * 1000, "4 Heures");
    Duration.H3 = new Duration("H3", 3 * 60 * 60 * 1000, "3 Heures");
    Duration.H2 = new Duration("H2", 2 * 60 * 60 * 1000, "2 Heures");
    Duration.H1 = new Duration("H1", 60 * 60 * 1000, "1 Heure");
    Duration.m30 = new Duration("m30", 30 * 60 * 1000, "30 Min");
    Duration.m15 = new Duration("m15", 15 * 60 * 1000, "15 Min");
    Duration.m10 = new Duration("m10", 10 * 60 * 1000, "10 Min");
    Duration.m5 = new Duration("m5", 5 * 60 * 1000, "5 Min");
    Duration.m3 = new Duration("m3", 3 * 60 * 1000, "3 Min");
    Duration.m2 = new Duration("m2", 2 * 60 * 1000, "2 Min");
    Duration.m1 = new Duration("m1", 60 * 1000, "1 Min");
    Duration.s10 = new Duration("s10", 10 * 1000, "10 Sec");
    Duration.s1 = new Duration("s1", 1 * 1000, "1 Sec");
    Duration.tick = new Duration("tick", 1, "Tick");
    return Duration;
}());
exports.Duration = Duration;
