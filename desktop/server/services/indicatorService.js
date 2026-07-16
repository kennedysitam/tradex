const EMA = require("../engines/indicators/ema");
const RSI = require("../engines/indicators/rsi");
const ATR = require("../engines/indicators/atr");

class IndicatorService {

    static build(candles){

        const closes = candles.map(c=>Number(c.close));
        const highs = candles.map(c=>Number(c.high));
        const lows = candles.map(c=>Number(c.low));

        return{

            ema20: EMA.calculate(closes,20),

            ema50: EMA.calculate(closes,50),

            ema200: EMA.calculate(closes,200),

            rsi: RSI.calculate(closes,14),

            atr: ATR.calculate(highs,lows,closes,14)

        };

    }

}

module.exports = IndicatorService;