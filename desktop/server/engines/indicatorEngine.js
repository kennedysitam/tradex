class IndicatorEngine {

    static ema(prices, period) {

        const multiplier = 2 / (period + 1);

        const ema = [];

        let previousEMA = prices[0];

        ema.push(previousEMA);

        for (let i = 1; i < prices.length; i++) {

            previousEMA =
                ((prices[i] - previousEMA) * multiplier)
                + previousEMA;

            ema.push(previousEMA);

        }

        return ema;

    }

}

module.exports = IndicatorEngine;