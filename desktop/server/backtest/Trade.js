class Trade {

    constructor(type, entryPrice, entryTime, stopLoss, takeProfit) {

        this.type = type;

        this.entryPrice = entryPrice;

        this.entryTime = entryTime;

        this.stopLoss = stopLoss;

        this.takeProfit = takeProfit;

        this.exitPrice = null;

        this.exitTime = null;

        this.profit = 0;

        this.closedBy = "";

    }

    close(price, time, reason) {

        this.exitPrice = price;

        this.exitTime = time;

        this.closedBy = reason;

        if (this.type === "BUY") {

            this.profit = price - this.entryPrice;

        } else {

            this.profit = this.entryPrice - price;

        }

    }

}

module.exports = Trade;