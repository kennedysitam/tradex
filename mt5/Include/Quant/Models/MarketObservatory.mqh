//+------------------------------------------------------------------+
//| TradeX Market Observatory                                        |
//| Build 010.0                                                      |
//+------------------------------------------------------------------+
#ifndef __MARKET_OBSERVATORY_MQH__
#define __MARKET_OBSERVATORY_MQH__

struct MarketState
{
   bool Trending;
   bool Ranging;

   bool HighVolatility;
   bool LowVolatility;

   bool Bullish;
   bool Bearish;

   int Session;

   double ATR;
   double Range;

   double ProbabilityScore;
};

#endif