const db = require("./database/database");

db.get(
    "SELECT COUNT(*) AS total FROM market_features",
    (err, row) => {

        console.log(row);

        db.close();

    }
);