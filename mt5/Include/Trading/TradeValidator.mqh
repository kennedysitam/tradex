//+------------------------------------------------------------------+
//| TradeX Trade Validator                                           |
//| Build 003.1                                                      |
//+------------------------------------------------------------------+
#ifndef __TRADEVALIDATOR_MQH__
#define __TRADEVALIDATOR_MQH__

#include "../Core/Logger.mqh"
#include "../Core/Config.mqh"

//--------------------------------------------------
// Check whether trading is allowed
//--------------------------------------------------
bool CanTrade()
{
   // Terminal AutoTrading enabled
   if(!TerminalInfoInteger(TERMINAL_TRADE_ALLOWED))
   {
      LogError("AutoTrading is disabled.");
      return false;
   }

   // EA is allowed to trade
   if(!MQLInfoInteger(MQL_TRADE_ALLOWED))
   {
      LogError("EA trading is not allowed.");
      return false;
   }

   return true;
}

#endif