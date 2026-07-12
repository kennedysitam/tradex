const db = require("./database/database");

db.all(
    "SELECT name FROM sqlite_master WHERE type='table'",
    (err, rows) => {

        console.table(rows);

        db.close();

    }
);