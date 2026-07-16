class ATR {

    static calculate(highs, lows, closes, period = 14) {

        const atr = new Array(highs.length).fill(null);

        const tr = [];

        tr.push(highs[0] - lows[0]);

        for(let i = 1; i < highs.length; i++){

            const highLow = highs[i] - lows[i];

            const highClose = Math.abs(highs[i] - closes[i-1]);

            const lowClose = Math.abs(lows[i] - closes[i-1]);

            tr.push(
                Math.max(
                    highLow,
                    highClose,
                    lowClose
                )
            );

        }

        let sum = 0;

        for(let i=0;i<period;i++){

            sum += tr[i];

        }

        atr[period-1] = sum / period;

        for(let i=period;i<tr.length;i++){

            atr[i] =
                ((atr[i-1] * (period-1))
                + tr[i])
                / period;

        }

        return atr;

    }

}

module.exports = ATR;