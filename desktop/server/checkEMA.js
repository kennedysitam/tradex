const db = require("./database/database");

db.get(
`
SELECT
    ema20,
    ema50,
    ema200
FROM market_features
WHERE ema20 IS NOT NULL
LIMIT 1
`,
(err,row)=>{

    if(err){
        console.error(err);
    }else{
        console.log(row);
    }

    db.close();

});