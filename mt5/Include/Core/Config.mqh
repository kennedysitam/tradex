//+------------------------------------------------------------------+
//| TradeX Configuration Module                                      |
//| Build 001.10                                                     |
//+------------------------------------------------------------------+
#ifndef __CONFIG_MQH__
#define __CONFIG_MQH__

//---------------------------------------------------------
// General Settings
//---------------------------------------------------------

input bool EnableTrading       = true;
input bool EnableLogging       = true;
input bool EnableNotifications = true;

//---------------------------------------------------------
// Risk Management
//---------------------------------------------------------

input double RiskPercent       = 1.0;
input double MaxRiskPercent    = 5.0;

//---------------------------------------------------------
// Trade Settings
//---------------------------------------------------------

input int    MagicNumber       = 10001;
input int    MaxOpenTrades     = 1;
input double Slippage          = 5;

//---------------------------------------------------------
// Session Settings
//---------------------------------------------------------

input bool TradeLondonSession  = true;
input bool TradeNewYorkSession = true;
input bool TradeAsianSession   = false;

#endif