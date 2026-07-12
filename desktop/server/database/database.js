const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/market.db", (err) => {
    if (err) {
        console.error("Database Error:", err.message);
    } else {
        console.log("Connected to TradeX Database");
    }
});

module.exports = db;