//+------------------------------------------------------------------+
//| TradeX Trade Engine                                              |
//| Build 004.1                                                      |
//+------------------------------------------------------------------+
#ifndef __TRADEENGINE_MQH__
#define __TRADEENGINE_MQH__

#include "../Trading/TradeValidator.mqh"
#include "../Trading/OrderManager.mqh"
#include "../Trading/RiskManager.mqh"
#include "../Core/Logger.mqh"
#include "SignalEngine.mqh"

//---------------------------------------------------------
// Main Trade Engine
//---------------------------------------------------------
void RunTradeEngine()
{
   if(!CanTrade())
      return;

   TradeSignal signal = GetSignal();

   switch(signal)
   {
      case SIGNAL_BUY:
         LogInfo("BUY Signal detected.");
         break;

      case SIGNAL_SELL:
         LogInfo("SELL Signal detected.");
         break;

      default:
         LogInfo("No trading signal.");
         break;
   }
}

#endif
