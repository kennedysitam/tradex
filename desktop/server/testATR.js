const ATR = require("./engines/indicators/atr");

const highs = [50,52,53,54,55,56,57,58,59,60,61,62,63,64,65];

const lows = [48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];

const closes = [49,51,52,53,54,55,56,57,58,59,60,61,62,63,64];

const result = ATR.calculate(highs,lows,closes);

console.log(result);