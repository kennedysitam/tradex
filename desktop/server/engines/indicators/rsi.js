class RSI {

    static calculate(prices, period = 14) {

        const rsi = new Array(prices.length).fill(null);

        if (prices.length <= period) {
            return rsi;
        }

        let gain = 0;
        let loss = 0;

        // Initial average gain/loss
        for (let i = 1; i <= period; i++) {

            const change = prices[i] - prices[i - 1];

            if (change > 0)
                gain += change;
            else
                loss -= change;

        }

        let avgGain = gain / period;
        let avgLoss = loss / period;

        if (avgLoss === 0) {
            rsi[period] = 100;
        } else {
            const rs = avgGain / avgLoss;
            rsi[period] = 100 - (100 / (1 + rs));
        }

        for (let i = period + 1; i < prices.length; i++) {

            const change = prices[i] - prices[i - 1];

            let currentGain = 0;
            let currentLoss = 0;

            if (change > 0)
                currentGain = change;
            else
                currentLoss = -change;

            avgGain =
                ((avgGain * (period - 1)) + currentGain) / period;

            avgLoss =
                ((avgLoss * (period - 1)) + currentLoss) / period;

            if (avgLoss === 0) {
                rsi[i] = 100;
            } else {

                const rs = avgGain / avgLoss;

                rsi[i] = 100 - (100 / (1 + rs));

            }

        }

        return rsi;

    }

}

module.exports = RSI;