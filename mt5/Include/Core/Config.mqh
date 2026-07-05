#ifndef CONFIG_MQH
#define CONFIG_MQH

//==================================================
// TradeX Configuration Module
// Build 001.2
//==================================================

//--------------------------------------------------
// Expert Advisor Information
//--------------------------------------------------
#define EA_NAME        "TradeX"
#define EA_VERSION     "0.1.0"

//--------------------------------------------------
// Default Trading Settings
//--------------------------------------------------
#define DEFAULT_SYMBOL      _Symbol
#define DEFAULT_TIMEFRAME   PERIOD_M15

//--------------------------------------------------
// Risk Management
//--------------------------------------------------
#define DEFAULT_RISK_PERCENT 1.0
#define MAX_OPEN_TRADES      5

//--------------------------------------------------
// Debug Settings
//--------------------------------------------------
#define DEBUG_MODE true

#endif // CONFIG_MQH