//+------------------------------------------------------------------+
//| TradeX Risk Manager                                              |
//| Build 002.3                                                      |
//+------------------------------------------------------------------+
#ifndef __RISKMANAGER_MQH__
#define __RISKMANAGER_MQH__

#include "../Core/Config.mqh"

//---------------------------------------------------------
// Validate Risk
//---------------------------------------------------------
bool IsRiskValid()
{
   if(RiskPercent <= 0)
      return false;

   if(RiskPercent > MaxRiskPercent)
      return false;

   return true;
}

//---------------------------------------------------------
// Current Risk Percentage
//---------------------------------------------------------
double GetRiskPercent()
{
   return RiskPercent;
}

#endif
