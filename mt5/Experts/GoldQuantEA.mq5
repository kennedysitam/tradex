//+------------------------------------------------------------------+
//| TradeX - GoldQuantEA                                             |
//| Build 002.5                                                      |
//+------------------------------------------------------------------+
#property copyright "TradeX"
#property version   "1.00"
#property strict

#include "../Include/Core/Config.mqh"
#include "../Include/Core/Constants.mqh"
#include "../Include/Core/Logger.mqh"
#include "../Include/Core/Utilities.mqh"
#include "../Include/Core/ErrorHandler.mqh"

#include "../Include/Trading/OrderManager.mqh"
#include "../Include/Trading/PositionManager.mqh"
#include "../Include/Trading/RiskManager.mqh"
#include "../Include/Trading/TradeValidator.mqh"

//+------------------------------------------------------------------+
//| Expert initialization                                            |
//+------------------------------------------------------------------+
int OnInit()
{
   LogInfo("====================================");
   LogInfo(EA_NAME + " v" + EA_VERSION);
   LogInfo("Initialization Started");

   LogInfo("Risk: " + DoubleToString(GetRiskPercent(),2) + "%");
   LogInfo("Maximum Open Trades: " + IntegerToString(MaxOpenTrades));
   LogInfo("Current Open Positions: " + IntegerToString(GetOpenPositionCount()));
   LogInfo("Initialization Complete");
   LogInfo("====================================");

   return(INIT_SUCCEEDED);
}

//+------------------------------------------------------------------+
//| Expert deinitialization                                          |
//+------------------------------------------------------------------+
void OnDeinit(const int reason)
{
   LogInfo("TradeX stopped.");
}

//+------------------------------------------------------------------+
//| Expert tick                                                      |
//+-------------------void OnTick()
void OnTick()
{
   if(!CanTrade())
      return;

   // Strategy logic will be added here in Milestone 3
}
