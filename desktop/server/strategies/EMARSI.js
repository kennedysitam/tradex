const BaseStrategy = require("./BaseStrategy");

class EMARSI extends BaseStrategy {

    constructor() {
        super("EMA + RSI");
    }

    generateSignal(candle) {

        if (
            candle.ema20 > candle.ema50 &&
            candle.rsi < 30
        ) {
            return "BUY";
        }

        if (
            candle.ema20 < candle.ema50 &&
            candle.rsi > 70
        ) {
            return "SELL";
        }

        return "HOLD";
    }

}

module.exports = EMARSI;