const IndicatorEngine = require("./engines/indicatorEngine");

const prices = [

100,
101,
102,
103,
104,
105,
106,
107,
108,
109

];

const ema = IndicatorEngine.ema(prices,5);

console.log(ema);