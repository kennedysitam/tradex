//+------------------------------------------------------------------+
//| TradeX Feature Extractor                                         |
//| Build 007.1                                                      |
//+------------------------------------------------------------------+
#ifndef __FEATURE_EXTRACTOR_MQH__
#define __FEATURE_EXTRACTOR_MQH__

struct CandleFeatures
{
   double Range;
   double Body;
   double UpperWick;
   double LowerWick;
   double BodyRatio;
};

//---------------------------------------------------------
// Extract Features
//---------------------------------------------------------
CandleFeatures ExtractFeatures(MqlRates candle)
{
   CandleFeatures f;

   f.Range = candle.high - candle.low;
   f.Body  = MathAbs(candle.close - candle.open);

   f.UpperWick = candle.high - MathMax(candle.open, candle.close);
   f.LowerWick = MathMin(candle.open, candle.close) - candle.low;

   if(f.Range > 0)
      f.BodyRatio = f.Body / f.Range;
   else
      f.BodyRatio = 0;

   return f;
}

#endif