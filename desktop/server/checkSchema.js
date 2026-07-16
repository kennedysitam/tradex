const db = require("./database/database");

db.all("PRAGMA table_info(market_features)", (err, rows) => {

    console.table(rows);

    db.close();

});