const db = require("./database/database");
const feature = require("./engines/featureEngine");

db.serialize(() => {

    console.log("Reading candles...");

    db.all("SELECT * FROM candles", [], (err, candles) => {

        if (err) {
            console.error(err);
            return;
        }

        console.log("Candles loaded:", candles.length);

        db.run("DELETE FROM market_features");

        db.run("BEGIN TRANSACTION");

        const stmt = db.prepare(`
            INSERT INTO market_features
            (
                candle_id,
                body,
                upper_wick,
                lower_wick,
                range,
                bullish,
                hour,
                day_of_week,
                session
            )
            VALUES (?,?,?,?,?,?,?,?,?)
        `);

        let inserted = 0;

        candles.forEach(candle => {

            const open = Number(candle.open);
            const high = Number(candle.high);
            const low = Number(candle.low);
            const close = Number(candle.close);

            const parts = candle.time.split(" ");
            const date = parts[0];
            const time = parts[1];

            const hour = Number(time.split(":")[0]);

            const jsDate = new Date(date.replace(/\./g, "-"));
            const day = jsDate.getDay();

            stmt.run(
    candle.id,
    feature.candleBody(open, close),
    feature.upperWick(high, open, close),
    feature.lowerWick(low, open, close),
    feature.candleRange(high, low),
    feature.bullish(open, close),
    hour,
    day,
    feature.session(hour),
    function (err) {
        if (err) {
            console.error("Insert error:", err.message);
        } else {
            inserted++;
        }
    }
);

        });

        stmt.finalize((err) => {

    if (err) {
        console.error(err);
        return;
    }

    db.run("COMMIT", (err) => {

        if (err) {
            console.error(err);
            return;
        }

        console.log("--------------------------------");
        console.log("Feature generation completed.");
        console.log("Inserted:", inserted);
        console.log("--------------------------------");

        db.close();

    });

});

    });

});