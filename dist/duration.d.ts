export declare class Duration {
    private readonly code;
    private readonly ms;
    private readonly desc;
    static readonly Y1: Duration;
    static readonly M1: Duration;
    static readonly W1: Duration;
    static readonly D1: Duration;
    static readonly H4: Duration;
    static readonly H3: Duration;
    static readonly H2: Duration;
    static readonly H1: Duration;
    static readonly m30: Duration;
    static readonly m15: Duration;
    static readonly m10: Duration;
    static readonly m5: Duration;
    static readonly m3: Duration;
    static readonly m2: Duration;
    static readonly m1: Duration;
    static readonly s10: Duration;
    static readonly s1: Duration;
    static readonly tick: Duration;
    private constructor();
    static fromMs(ms: number): Duration;
    static fromCode(code: string): Duration;
    getCode(): string;
    getMs(): number;
    getDescription(): string;
}
