//+------------------------------------------------------------------+
//| TradeX Experiment Runner                                         |
//| Build 008.1                                                      |
//+------------------------------------------------------------------+
#ifndef __EXPERIMENTRUNNER_MQH__
#define __EXPERIMENTRUNNER_MQH__

#include "ResearchLab.mqh"

ExperimentResult RunExperiment(string name)
{
   ExperimentResult result;

   result.Name = name;
   result.Samples = 0;
   result.WinRate = 0.0;
   result.AverageWin = 0.0;
   result.AverageLoss = 0.0;
   result.Expectancy = 0.0;
   result.ProfitFactor = 0.0;

   return result;
}

#endif