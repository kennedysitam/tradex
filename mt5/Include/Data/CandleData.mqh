//+------------------------------------------------------------------+
//| TradeX Candle Data Module                                        |
//| Build 003.1                                                      |
//+------------------------------------------------------------------+
#ifndef __CANDLEDATA_MQH__
#define __CANDLEDATA_MQH__

//---------------------------------------------------------
// Candle Open
//---------------------------------------------------------
double GetOpen(int shift)
{
   return iOpen(_Symbol, PERIOD_CURRENT, shift);
}

//---------------------------------------------------------
// Candle Close
//---------------------------------------------------------
double GetClose(int shift)
{
   return iClose(_Symbol, PERIOD_CURRENT, shift);
}

//---------------------------------------------------------
// Candle High
//---------------------------------------------------------
double GetHigh(int shift)
{
   return iHigh(_Symbol, PERIOD_CURRENT, shift);
}

//---------------------------------------------------------
// Candle Low
//---------------------------------------------------------
double GetLow(int shift)
{
   return iLow(_Symbol, PERIOD_CURRENT, shift);
}

//---------------------------------------------------------
// Bullish Candle
//---------------------------------------------------------
bool IsBullishCandle(int shift)
{
   return GetClose(shift) > GetOpen(shift);
}

//---------------------------------------------------------
// Bearish Candle
//---------------------------------------------------------
bool IsBearishCandle(int shift)
{
   return GetClose(shift) < GetOpen(shift);
}

#endif