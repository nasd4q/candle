import { expect } from "chai";
import { Duration } from "../../src/duration";

describe('Duration.fromMs', function() {
    it('returns Duration.H1 for value 3600*1000', ()=>{
        let ms = 3600*1000;
        let candidate = Duration.fromMs(ms);
        expect(candidate === Duration.H1).to.equal(true);
    })

    it('returns Duration.W1 for value 7*24*60*60*1000', ()=>{
        let ms = 7*24*60*60*1000;
        let candidate = Duration.fromMs(ms);
        expect(candidate === Duration.W1).to.equal(true);
    })

    it('throws for number of ms 1234', ()=>{
        let ms = 1234;
        expect(()=>Duration.fromMs(ms)).to.throw();
    })
})