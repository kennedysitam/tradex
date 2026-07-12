const db = require("./database/database");

db.get(
`
SELECT COUNT(*) AS missing
FROM candles c
LEFT JOIN market_features f
ON c.id = f.candle_id
WHERE f.candle_id IS NULL
`,
(err,row)=>{
    if(err){
        console.error(err);
    }else{
        console.log(row);
    }
    db.close();
});