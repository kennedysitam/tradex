const db = require("./database/database");

db.get(
    "SELECT COUNT(*) AS total FROM trade_journal",
    [],
    (err, row) => {

        if (err) {
            console.error(err);
        } else {
            console.log("Total Journal Entries:", row.total);
        }

        db.close();

    }
);