const EMA = require("./ema");

class MACD {

    static calculate(prices) {

        const ema12 = EMA.calculate(prices, 12);
        const ema26 = EMA.calculate(prices, 26);

        const macd = [];

        for (let i = 0; i < prices.length; i++) {
            macd.push(ema12[i] - ema26[i]);
        }

        const signal = EMA.calculate(macd, 9);

        const histogram = [];

        for (let i = 0; i < prices.length; i++) {
            histogram.push(macd[i] - signal[i]);
        }

        return {
            macd,
            signal,
            histogram
        };

    }

}

module.exports = MACD;