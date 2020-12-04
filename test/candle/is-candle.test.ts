import { expect } from "chai";
import { Candle, Duration } from '../..';

describe('Candle.isCandle', function() {
    it('returns true for an object with all the fields', ()=>{
        let candidate = {
            open: 12.34,
            high: 13.78,
            low:10,
            close:13.20,
            begin: new Date().getTime(),
            duration: 1000 * 60 * 60 * 24,
            volume : 0
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

    it('returns false for an object missing one field', ()=>{
        let candidate = {
            open: 12.34,
            high: 13.78,
            close:13.20,
            begin: new Date().getTime(),
            duration: 1000 * 60 * 60 * 24,
            volume : 100347
        }
        expect(Candle.isCandle(candidate)).to.equal(false);
    });
})