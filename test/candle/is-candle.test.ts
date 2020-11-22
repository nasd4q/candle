import { expect } from "chai";
import { Candle } from '../../src/candle';
import { Duration } from "../../src/duration";

describe('Candle.isCandle', function() {
    it('returns true for an object with all the fields', ()=>{
        let candidate = {
            open: 12.34,
            high: 13.78,
            low:10,
            close:13.20,
            begin: new Date().getTime(),
            duration: 1000 * 60 * 60 * 24,
            volume : 100347
        }
        expect(Candle.isCandle(candidate)).to.equal(true);
    });
        

    it('returns false for an object with all the fields but not all the right field types', ()=>{
        let candidate = {
            open: 12.34,
            high: 13.78,
            low:10,
            close:13.20,
            begin: new Date().getTime(),
            duration: Duration.D1,
            volume : 100347
        }
        expect(Candle.isCandle(candidate)).to.equal(false);
    });
})