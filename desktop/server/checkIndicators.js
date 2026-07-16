const db = require("./database/database");

db.get(
`
SELECT
COUNT(*) AS total,
COUNT(rsi) AS rsiFilled,
COUNT(atr) AS atrFilled,
COUNT(ema20) AS emaFilled
FROM market_features
`,
(err,row)=>{

    console.log(row);

    db.close();

});