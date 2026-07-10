//+------------------------------------------------------------------+
//| TradeX Candle Collector                                          |
//| Build 006.3                                                      |
//+------------------------------------------------------------------+
#ifndef __CANDLECOLLECTOR_MQH__
#define __CANDLECOLLECTOR_MQH__

//---------------------------------------------------------
// Candle Structure
//---------------------------------------------------------
struct Candle
{
   datetime time;

   double open;
   double high;
   double low;
   double close;

   long volume;
};

#endif