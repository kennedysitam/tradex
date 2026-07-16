class EMA {

    static calculate(prices, period) {

        if (!prices || prices.length === 0) {
            return [];
        }

        const multiplier = 2 / (period + 1);
        const output = [];

        let ema = prices[0];
        output.push(ema);

        for (let i = 1; i < prices.length; i++) {
            ema = ((prices[i] - ema) * multiplier) + ema;
            output.push(ema);
        }

        return output;
    }

}

module.exports = EMA;