const MACD = require("./engines/indicators/macd");

const prices = [];

for (let i = 1; i <= 100; i++) {
    prices.push(i);
}

const result = MACD.calculate(prices);

console.log("MACD Length:", result.macd.length);
console.log("Signal Length:", result.signal.length);
console.log("Histogram Length:", result.histogram.length);

console.log(result.macd.slice(-5));
console.log(result.signal.slice(-5));
console.log(result.histogram.slice(-5));