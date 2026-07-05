//+------------------------------------------------------------------+
//| TradeX Order Manager                                              |
//| Build 002.1                                                       |
//+------------------------------------------------------------------+
#ifndef __ORDERMANAGER_MQH__
#define __ORDERMANAGER_MQH__

#include <Trade/Trade.mqh>
#include "../Core/Logger.mqh"
#include "../Core/ErrorHandler.mqh"

CTrade trade;

//---------------------------------------------------------
// Buy
//---------------------------------------------------------
bool OpenBuy(double lotSize)
{
   LogInfo("Opening BUY order...");

   if(trade.Buy(lotSize))
   {
      LogInfo("BUY order opened successfully.");
      return true;
   }

   HandleLastError("OpenBuy");
   return false;
}

//---------------------------------------------------------
// Sell
//---------------------------------------------------------
bool OpenSell(double lotSize)
{
   LogInfo("Opening SELL order...");

   if(trade.Sell(lotSize))
   {
      LogInfo("SELL order opened successfully.");
      return true;
   }

   HandleLastError("OpenSell");
   return false;
}

#endif