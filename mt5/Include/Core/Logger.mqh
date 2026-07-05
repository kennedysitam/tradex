//+------------------------------------------------------------------+
//| TradeX Logger Module                                             |
//| Build 001.9                                                      |
//+------------------------------------------------------------------+
#ifndef __LOGGER_MQH__
#define __LOGGER_MQH__

#include "Constants.mqh"

//---------------------------------------------------------
// Information
//---------------------------------------------------------
void LogInfo(string message)
{
   Print(LOG_PREFIX + "[INFO] " + message);
}

//---------------------------------------------------------
// Warning
//---------------------------------------------------------
void LogWarning(string message)
{
   Print(LOG_PREFIX + "[WARNING] " + message);
}

//---------------------------------------------------------
// Error
//---------------------------------------------------------
void LogError(string message)
{
   Print(LOG_PREFIX + "[ERROR] " + message);
}

//---------------------------------------------------------
// Debug
//---------------------------------------------------------
void LogDebug(string message)
{
   Print(LOG_PREFIX + "[DEBUG] " + message);
}

#endif