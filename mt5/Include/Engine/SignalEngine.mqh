//+------------------------------------------------------------------+
//| TradeX Signal Engine                                             |
//| Build 004.0                                                      |
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
// Get Current Trading Signal
//---------------------------------------------------------
TradeSignal GetSignal()
{
   return SIGNAL_NONE;
}

#endif
