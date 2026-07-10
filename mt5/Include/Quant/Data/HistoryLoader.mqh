//+------------------------------------------------------------------+
//| TradeX History Loader                                            |
//| Build 006.4                                                      |
//+------------------------------------------------------------------+
#ifndef __HISTORYLOADER_MQH__
#define __HISTORYLOADER_MQH__

//---------------------------------------------------------
// Load Historical Candles
//---------------------------------------------------------
int LoadHistory(MqlRates &rates[],
                ENUM_TIMEFRAMES timeframe,
                int bars)
{
   ArraySetAsSeries(rates,true);

   return CopyRates(_Symbol,timeframe,0,bars,rates);
}

#endif