const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "ready",
        service: "TradeX CSV Import API",
        version: "1.0.0"
    });
});

module.exports = router;