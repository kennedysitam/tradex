//+------------------------------------------------------------------+
//| TradeX Research Lab                                              |
//| Build 008.0                                                      |
//+------------------------------------------------------------------+
#ifndef __RESEARCHLAB_MQH__
#define __RESEARCHLAB_MQH__

struct ExperimentResult
{
   string Name;

   int Samples;

   double WinRate;

   double AverageWin;

   double AverageLoss;

   double Expectancy;

   double ProfitFactor;
};

#endif