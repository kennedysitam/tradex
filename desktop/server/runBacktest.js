const CandleLoader = require("./services/candleLoader");
const BacktestEngine = require("./backtest/BacktestEngine");
const { EMARSI } = require("./strategies");

const strategy = new EMARSI();

const engine = new BacktestEngine(strategy);

console.log("Loading historical candles...");

CandleLoader.load((err, candles) => {

    if (err) {
        console.error(err);
        return;
    }

    console.log("Historical Candles:", candles.length);

    console.log("Running Backtest...");

    engine.run(candles);

    engine.report();

});