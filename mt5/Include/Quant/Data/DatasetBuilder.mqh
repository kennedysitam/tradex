//+------------------------------------------------------------------+
//| TradeX Dataset Builder                                           |
//| Build 007.2                                                      |
//+------------------------------------------------------------------+
#ifndef __DATASET_BUILDER_MQH__
#define __DATASET_BUILDER_MQH__

#include "HistoryLoader.mqh"
#include "FeatureExtractor.mqh"

//---------------------------------------------------------
// Build Dataset
//---------------------------------------------------------
int BuildDataset(ENUM_TIMEFRAMES timeframe,
                 int bars,
                 CandleFeatures &features[])
{
   MqlRates rates[];

   int copied = LoadHistory(rates, timeframe, bars);

   if(copied <= 0)
      return 0;

   ArrayResize(features, copied);

   for(int i = 0; i < copied; i++)
      features[i] = ExtractFeatures(rates[i]);

   return copied;
}

#endif