const db = require("./database/database");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS candles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            symbol TEXT NOT NULL,
            timeframe TEXT NOT NULL,
            time TEXT NOT NULL,
            open REAL,
            high REAL,
            low REAL,
            close REAL,
            volume INTEGER
        )
    `, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Candles table created successfully.");
        }
    });

});

db.close();