const db = require("../database/database");

class TradeJournal {

    static save(strategy, trade, balance) {

        db.run(
            `
            INSERT INTO trade_journal
            (

                strategy,

                symbol,

                timeframe,

                direction,

                entry_time,

                exit_time,

                entry_price,

                exit_price,

                stop_loss,

                take_profit,

                profit,

                balance_after_trade,

                exit_reason

            )
            VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)
            `,
            [

                strategy,

                "XAUUSD",

                "M1",

                trade.type,

                trade.entryTime,

                trade.exitTime,

                trade.entryPrice,

                trade.exitPrice,

                trade.stopLoss,

                trade.takeProfit,

                trade.profit,

                balance,

                trade.closedBy

            ]
        );

    }

}

module.exports = TradeJournal;