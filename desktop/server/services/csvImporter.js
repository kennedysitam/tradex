const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const db = require("../database/database");

const csvFile = path.join(
    process.env.APPDATA,
    "MetaQuotes",
    "Terminal",
    "D0E8209F77C8CF37AD8BF550E51FF075",
    "MQL5",
    "Files",
    "XAUUSD_History.csv"
);

function importCSV() {

    if (!fs.existsSync(csvFile)) {
        console.log("CSV file not found.");
        return;
    }

    console.log("Reading CSV...");

    let count = 0;

    fs.createReadStream(csvFile)
        .pipe(csv({ separator: "\t" }))
        .on("data", (row) => {
                console.log(row);
            db.run(
`
INSERT INTO candles
(
    symbol,
    timeframe,
    time,
    open,
    high,
    low,
    close,
    volume
)
VALUES (?,?,?,?,?,?,?,?)
`,
[
    "XAUUSD",
    "M1",
    row.Time,
    Number(row.Open),
    Number(row.High),
    Number(row.Low),
    Number(row.Close),
    Number(row.Volume)
]
);

            count++;

        })
        .on("end", () => {

            console.log("Import complete.");
            console.log("Rows imported:", count);

        });

}

module.exports = importCSV;