const StatisticsEngine = require("./analytics/StatisticsEngine");

const trades = [

    { profit: 50 },

    { profit: 80 },

    { profit: -30 },

    { profit: -20 },

    { profit: 100 }

];

const stats = StatisticsEngine.calculate(

    trades,

    10000,

    10180

);

console.log(stats);