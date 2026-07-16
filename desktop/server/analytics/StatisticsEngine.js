class StatisticsEngine {

    static calculate(trades, startingBalance, endingBalance) {

        const stats = {

            trades: trades.length,

            wins: 0,

            losses: 0,

            grossProfit: 0,

            grossLoss: 0,

            largestWin: 0,

            largestLoss: 0,

            averageWin: 0,

            averageLoss: 0,

            netProfit: 0,

            winRate: 0,

            profitFactor: 0,

            expectancy: 0,

            returnPercent: 0,

            startingBalance,

            endingBalance

        };

        trades.forEach(trade => {

            stats.netProfit += trade.profit;

            if (trade.profit >= 0) {

                stats.wins++;

                stats.grossProfit += trade.profit;

                if (trade.profit > stats.largestWin)
                    stats.largestWin = trade.profit;

            }
            else {

                stats.losses++;

                stats.grossLoss += Math.abs(trade.profit);

                if (trade.profit < stats.largestLoss)
                    stats.largestLoss = trade.profit;

            }

        });

        if (stats.wins > 0)
            stats.averageWin = stats.grossProfit / stats.wins;

        if (stats.losses > 0)
            stats.averageLoss = stats.grossLoss / stats.losses;

        if (stats.trades > 0)
            stats.winRate = (stats.wins / stats.trades) * 100;

        if (stats.grossLoss > 0)
            stats.profitFactor = stats.grossProfit / stats.grossLoss;

        if (stats.trades > 0)
            stats.expectancy = stats.netProfit / stats.trades;

        stats.returnPercent =
            ((endingBalance - startingBalance) / startingBalance) * 100;

        return stats;

    }

}

module.exports = StatisticsEngine;