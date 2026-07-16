const db = require("./database/database");

const EMA = require("./engines/indicators/ema");
const RSI = require("./engines/indicators/rsi");
const ATR = require("./engines/indicators/atr");
const MACD = require("./engines/indicators/macd");

db.serialize(() => {

    console.log("Loading candles...");

    db.all(
        `
        SELECT
            id,
            high,
            low,
            close
        FROM candles
        ORDER BY time ASC
        `,
        [],
        (err, candles) => {

            if (err) {
                console.error(err);
                db.close();
                return;
            }

            console.log("Candles Loaded:", candles.length);

            const closes = candles.map(c => Number(c.close));
            const highs = candles.map(c => Number(c.high));
            const lows = candles.map(c => Number(c.low));

            console.log("Calculating EMA...");
            const ema20 = EMA.calculate(closes, 20);
            const ema50 = EMA.calculate(closes, 50);
            const ema200 = EMA.calculate(closes, 200);

            console.log("Calculating RSI...");
            const rsi = RSI.calculate(closes, 14);

            console.log("Calculating ATR...");
            const atr = ATR.calculate(
                highs,
                lows,
                closes,
                14
            );

            console.log("Calculating MACD...");
            const macd = MACD.calculate(closes);

            console.log("Updating Database...");

            db.run("BEGIN TRANSACTION");

            const stmt = db.prepare(`
                UPDATE market_features
                SET
                    ema20 = ?,
                    ema50 = ?,
                    ema200 = ?,
                    rsi = ?,
                    atr = ?,
                    macd = ?,
                    signal = ?,
                    histogram = ?
                WHERE candle_id = ?
            `);

            let updated = 0;

            candles.forEach((candle, index) => {

                stmt.run(

                    ema20[index],

                    ema50[index],

                    ema200[index],

                    rsi[index],

                    atr[index],

                    macd.macd[index],

                    macd.signal[index],

                    macd.histogram[index],

                    candle.id,

                    function (err) {

                        if (err) {
                            console.error(err.message);
                        } else {
                            updated++;
                        }

                    }

                );

            });

            stmt.finalize((err) => {

                if (err) {
                    console.error(err);
                    db.close();
                    return;
                }

                db.run("COMMIT", () => {

                    console.log("--------------------------------");
                    console.log("Indicator Update Complete");
                    console.log("Rows Updated:", updated);
                    console.log("--------------------------------");

                    db.close();

                });

            });

        }

    );

});