const express = require("express");
const cors = require("cors");

const importRoute = require("./routes/import");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/import", importRoute);

app.get("/", (req, res) => {
    res.json({
        application: "TradeX Research API",
        version: "1.0.0",
        status: "Running"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`TradeX Server running on port ${PORT}`);
});