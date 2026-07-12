const db = require("./database/database");

db.get(
  "SELECT COUNT(*) AS total FROM candles",
  (err, row) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Total candles:", row.total);
    }

    db.close();
  }
);