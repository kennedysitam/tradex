const db = require("./database/database");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS trade_journal (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            strategy TEXT,

            symbol TEXT,

            timeframe TEXT,

            direction TEXT,

            entry_time TEXT,

            exit_time TEXT,

            entry_price REAL,

            exit_price REAL,

            stop_loss REAL,

            take_profit REAL,

            profit REAL,

            balance_after_trade REAL,

            exit_reason TEXT

        )
    `, (err)=>{

        if(err)
            console.error(err.message);
        else
            console.log("Trade Journal Ready.");

    });

});

db.close();