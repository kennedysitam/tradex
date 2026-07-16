const RiskManager = require("./risk/RiskManager");

const risk = new RiskManager();

console.log("Balance:", risk.accountBalance);

console.log("Risk %:", risk.riskPercent);

console.log("Risk Amount:", risk.riskAmount());

risk.updateBalance(250);

console.log("New Balance:", risk.accountBalance);