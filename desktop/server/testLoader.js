const CandleLoader = require("./services/candleLoader");

CandleLoader.load((err, candles)=>{

    if(err){

        console.error(err);

        return;

    }

    console.log("Candles Loaded:", candles.length);

    console.log(candles[0]);

    console.log(candles[candles.length-1]);

});