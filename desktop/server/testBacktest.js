const BacktestEngine = require("./backtest/BacktestEngine");
const { EMARSI } = require("./strategies");

const strategy = new EMARSI();

const engine = new BacktestEngine(strategy);

const candles = [

    {
        time: "09:00",
        close: 100,
        ema20: 100,
        ema50: 90,
        rsi: 25
    },

    {
        time: "09:01",
        close: 103,
        ema20: 105,
        ema50: 95,
        rsi: 40
    },

    {
        time: "09:02",
        close: 108,
        ema20: 110,
        ema50: 100,
        rsi: 50
    },

    {
        time: "09:03",
        close: 112,
        ema20: 90,
        ema50: 100,
        rsi: 80
    }

];

engine.run(candles);

engine.report();