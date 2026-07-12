function candleBody(open, close) {
    return Math.abs(close - open);
}

function upperWick(high, open, close) {
    return high - Math.max(open, close);
}

function lowerWick(low, open, close) {
    return Math.min(open, close) - low;
}

function candleRange(high, low) {
    return high - low;
}

function bullish(open, close) {
    return close > open ? 1 : 0;
}

function session(hour) {

    if (hour >= 0 && hour < 8)
        return "Asia";

    if (hour >= 8 && hour < 16)
        return "London";

    return "NewYork";
}

module.exports = {

    candleBody,
    upperWick,
    lowerWick,
    candleRange,
    bullish,
    session

};