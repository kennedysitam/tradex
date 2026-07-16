const db = require("../database/database");

class IndicatorWriter {

    static saveEMA(candles, indicators, callback){

        db.serialize(()=>{

            db.run("BEGIN TRANSACTION");

            const stmt = db.prepare(`
                UPDATE market_features
                SET
                    ema20=?,
                    ema50=?,
                    ema200=?
                WHERE candle_id=?
            `);

            candles.forEach((candle,index)=>{

                stmt.run(

                    indicators.ema20[index],

                    indicators.ema50[index],

                    indicators.ema200[index],

                    candle.id

                );

            });

            stmt.finalize(()=>{

                db.run("COMMIT",()=>{

                    callback();

                });

            });

        });

    }

}

module.exports = IndicatorWriter;