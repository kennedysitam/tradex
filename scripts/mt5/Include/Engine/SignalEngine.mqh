//+------------------------------------------------------------------+
//| TradeX Signal Engine                                             |
//| Build 004.1                                                      |
//+------------------------------------------------------------------+
#ifndef __SIGNALENGINE_MQH__
#define __SIGNALENGINE_MQH__

#include "../Core/Logger.mqh"

//---------------------------------------------------------
// Trading Signal Enumeration
//---------------------------------------------------------
enum TradeSignal
{
   SIGNAL_NONE = 0,
   SIGNAL_BUY,
   SIGNAL_SELL
};

//---------------------------------------------------------
// Determine Current Signal
//---------------------------------------------------------
TradeSignal GetSignal()
{
   double open1  = iOpen(_Symbol, PERIOD_CURRENT, 1);
   double close1 = iClose(_Symbol, PERIOD_CURRENT, 1);

   if(close1 > open1)
      return SIGNAL_BUY;

   if(close1 < open1)
      return SIGNAL_SELL;

   return SIGNAL_NONE;
}

#endif
