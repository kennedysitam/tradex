const Trade = require("./Trade");
const RiskManager = require("../risk/RiskManager");
const StatisticsEngine = require("../analytics/StatisticsEngine");
const TradeJournal = require("../journal/TradeJournal");

class BacktestEngine {

    constructor(strategy) {

        this.strategy = strategy;

        this.risk = new RiskManager();

        this.startingBalance = this.risk.accountBalance;

        this.openTrade = null;

        this.closedTrades = [];

    }

    run(candles) {

        candles.forEach(candle => {

            const signal = this.strategy.generateSignal(candle);

            // ===========================
            // OPEN BUY TRADE
            // ===========================
            if (!this.openTrade && signal === "BUY") {

                this.openTrade = new Trade(
                    "BUY",
                    candle.close,
                    candle.time,
                    candle.close - this.risk.stopLoss,
                    candle.close + this.risk.takeProfit
                );

                return;

            }

            // ===========================
            // CLOSE BUY TRADE
            // ===========================
            if (
                this.openTrade &&
                this.openTrade.type === "BUY" &&
                signal === "SELL"
            ) {

                this.openTrade.close(
                    candle.close,
                    candle.time,
                    "Signal"
                );

                // Update account balance
                this.risk.updateBalance(
                    this.openTrade.profit
                );

                // Save trade to database
                TradeJournal.save(
                    this.strategy.name,
                    this.openTrade,
                    this.risk.accountBalance
                );

                // Keep trade in memory
                this.closedTrades.push(
                    this.openTrade
                );

                this.openTrade = null;

            }

        });

    }

    report() {

        const stats = StatisticsEngine.calculate(
            this.closedTrades,
            this.startingBalance,
            this.risk.accountBalance
        );

        console.log("");
        console.log("==========================================");
        console.log("        TradeX Performance Report");
        console.log("==========================================");

        console.log("Strategy          :", this.strategy.name);

        console.log("");

        console.log("Starting Balance  :", stats.startingBalance.toFixed(2));
        console.log("Ending Balance    :", stats.endingBalance.toFixed(2));
        console.log("Return (%)        :", stats.returnPercent.toFixed(2));

        console.log("");

        console.log("Trades            :", stats.trades);
        console.log("Wins              :", stats.wins);
        console.log("Losses            :", stats.losses);
        console.log("Win Rate (%)      :", stats.winRate.toFixed(2));

        console.log("");

        console.log("Gross Profit      :", stats.grossProfit.toFixed(2));
        console.log("Gross Loss        :", stats.grossLoss.toFixed(2));
        console.log("Net Profit        :", stats.netProfit.toFixed(2));

        console.log("");

        console.log("Average Win       :", stats.averageWin.toFixed(2));
        console.log("Average Loss      :", stats.averageLoss.toFixed(2));

        console.log("");

        console.log("Largest Win       :", stats.largestWin.toFixed(2));
        console.log("Largest Loss      :", stats.largestLoss.toFixed(2));

        console.log("");

        console.log("Profit Factor     :", stats.profitFactor.toFixed(2));
        console.log("Expectancy        :", stats.expectancy.toFixed(2));

        console.log("==========================================");

    }

}

module.exports = BacktestEngine;