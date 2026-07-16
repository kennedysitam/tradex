const { EMARSI } = require("./strategies");

const strategy = new EMARSI();

console.log(
    strategy.generateSignal({
        ema20: 100,
        ema50: 90,
        rsi: 25
    })
);

console.log(
    strategy.generateSignal({
        ema20: 90,
        ema50: 100,
        rsi: 80
    })
);

console.log(
    strategy.generateSignal({
        ema20: 100,
        ema50: 100,
        rsi: 50
    })
);