//+------------------------------------------------------------------+
//| TradeX - GoldQuantEA                                             |
//| Build 001.7                                                      |
//+------------------------------------------------------------------+
#property copyright "TradeX"
#property version   "1.00"
#property strict

#include "../Include/Core/Config.mqh"
#include "../Include/Core/Logger.mqh"
#include "../Include/Core/Utilities.mqh"
#include "../Include/Core/ErrorHandler.mqh"

//+------------------------------------------------------------------+
//| Expert initialization                                            |
//+------------------------------------------------------------------+
int OnInit()
{
   LogInfo("=====================================");
   LogInfo("TradeX Initializing...");
   LogInfo("Version: " + (string)EA_VERSION);
   LogInfo("Initialization Complete.");
   LogInfo("=====================================");

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
//+------------------------------------------------------------------+
void OnTick()
{
   // Trading engine will be implemented in Milestone 2.
}