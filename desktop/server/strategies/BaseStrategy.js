class BaseStrategy {

    constructor(name) {
        this.name = name;
    }

    generateSignal(candle) {
        throw new Error("generateSignal() must be implemented.");
    }

}

module.exports = BaseStrategy;