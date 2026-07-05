//+------------------------------------------------------------------+
//| TradeX Trade Validator                                           |
//| Build 002.4                                                      |
//+------------------------------------------------------------------+
#ifndef __TRADEVALIDATOR_MQH__
#define __TRADEVALIDATOR_MQH__

#include "../Core/Config.mqh"
#include "RiskManager.mqh"
#include "PositionManager.mqh"

//---------------------------------------------------------
// Validate whether trading is allowed
//---------------------------------------------------------
bool CanTrade()
{
   if(!EnableTrading)
      return false;

   if(!IsRiskValid())
      return false;

   if(GetOpenPositionCount() >= MaxOpenTrades)
      return false;

   return true;
}

#endif