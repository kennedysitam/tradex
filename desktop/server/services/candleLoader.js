const db = require("../database/database");

class CandleLoader {

    static load(callback) {

        db.all(
            `
            SELECT
                candles.id,
                candles.time,
                candles.close,

                market_features.ema20,
                market_features.ema50,
                market_features.ema200,
                market_features.rsi,
                market_features.atr

            FROM candles

            JOIN market_features

            ON candles.id = market_features.candle_id

            ORDER BY candles.time ASC
            `,
            [],
            (err, rows) => {

                if (err) {

                    callback(err);

                    return;

                }

                callback(null, rows);

            }

        );

    }

}

module.exports = CandleLoader;