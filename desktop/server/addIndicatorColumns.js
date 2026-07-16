const db = require("./database/database");

const columns = [
    "ALTER TABLE market_features ADD COLUMN ema20 REAL",
    "ALTER TABLE market_features ADD COLUMN ema50 REAL",
    "ALTER TABLE market_features ADD COLUMN ema200 REAL"
];

db.serialize(() => {

    columns.forEach(sql => {

        db.run(sql, err => {

            if (err && !err.message.includes("duplicate column")) {
                console.error(err.message);
            }

        });

    });

});

db.close();