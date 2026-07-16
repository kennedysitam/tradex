class RiskManager {

    constructor() {

        this.accountBalance = 10000;

        this.riskPercent = 1;

        this.stopLoss = 10;

        this.takeProfit = 20;

    }

    riskAmount() {

        return this.accountBalance * (this.riskPercent / 100);

    }

    updateBalance(profit) {

        this.accountBalance += profit;

    }

}

module.exports = RiskManager;