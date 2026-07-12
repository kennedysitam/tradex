const db = require("./database/database");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS market_features (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            candle_id INTEGER UNIQUE,

            body REAL,
            upper_wick REAL,
            lower_wick REAL,
            range REAL,

            bullish INTEGER,

            hour INTEGER,
            day_of_week INTEGER,
            session TEXT,

            ema20 REAL,
            ema50 REAL,

            rsi REAL,
            atr REAL,

            macd REAL,
            signal REAL,
            histogram REAL,

            FOREIGN KEY(candle_id)
            REFERENCES candles(id)

        );
    `);

    console.log("Market Features table ready.");

});

db.close();