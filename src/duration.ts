export class Duration {
    static readonly Y1 = new Duration(
        "Y1", 365 * 24 * 60 * 60 * 1000, "Annuel");

    static readonly M1 = new Duration(
        "M1", 365 * 2 * 60 * 60 * 1000, "Mensuel");

    static readonly W1 = new Duration(
        "W1", 7 * 24 * 60 * 60 * 1000, "Hebdomadaire");

    static readonly D1 = new Duration(
        "D1", 24 * 60 * 60 * 1000, "Journalier");

    static readonly H4 = new Duration(
        "H4", 4 * 60 * 60 * 1000, "4 Heures");

    static readonly H3 = new Duration(
        "H3", 3 * 60 * 60 * 1000, "3 Heures");

    static readonly H2 = new Duration(
        "H2", 2 * 60 * 60 * 1000, "2 Heures");

    static readonly H1 = new Duration(
        "H1", 60 * 60 * 1000, "1 Heure");


    static readonly m30 = new Duration(
        "m30", 30 * 60 * 1000, "30 Min");

    static readonly m15 = new Duration(
        "m15", 15 * 60 * 1000, "15 Min");

    static readonly m10 = new Duration(
        "m10", 10 * 60 * 1000, "10 Min");

    static readonly m5 = new Duration(
        "m5", 5 * 60 * 1000, "5 Min");

    static readonly m3 = new Duration(
        "m3", 3 * 60 * 1000, "3 Min");

    static readonly m2 = new Duration(
        "m2", 2 * 60 * 1000, "2 Min");

    static readonly m1 = new Duration(
        "m1", 60 * 1000, "1 Min");

    static readonly s10 = new Duration(
        "s10", 10 * 1000, "10 Sec");

    static readonly s1 = new Duration(
        "s1", 1 * 1000, "1 Sec");

    static readonly tick = new Duration(
        "tick", 1, "Tick");



    private constructor(
        private readonly code: string,
        private readonly ms: number,
        private readonly desc: string
    ) { }

    public static fromMs(ms: number): Duration {
        let durations = Object.values(Duration).filter(v=>v.code && v.ms && v.desc);
        let candidates = durations.filter(c=>c.ms === ms);
        if (candidates.length === 1) {
            return candidates[0];
        } 
        throw new Error(`Couldn't find duration with number of ms : ${ms}`);
    }

    public static fromCode(code: string): Duration {
        let durations: Duration[] = Object.values(Duration).filter(v=>v.code && v.ms && v.desc);
        let candidates = durations.filter(c=>c.code === code);
        if (candidates.length === 1) {
            return candidates[0];
        } 
        throw new Error(`Couldn't find duration with code : ${code}`);
    }

    public getCode(): string {
        return this.code;
    }

    public getMs(): number {
        return this.ms;
    }

    public getDescription(): string {
        return this.desc;
    }
}







