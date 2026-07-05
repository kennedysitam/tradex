#ifndef LOGGER_MQH
#define LOGGER_MQH

//==================================================
// TradeX Logger Module
// Build 001.3
//==================================================

#include "Config.mqh"

//--------------------------------------------------
// Log Information
//--------------------------------------------------
void LogInfo(string message)
{
   if(DEBUG_MODE)
      Print("[INFO] ", EA_NAME, ": ", message);
}

//--------------------------------------------------
// Log Warning
//--------------------------------------------------
void LogWarning(string message)
{
   if(DEBUG_MODE)
      Print("[WARNING] ", EA_NAME, ": ", message);
}

//--------------------------------------------------
// Log Error
//--------------------------------------------------
void LogError(string message)
{
   Print("[ERROR] ", EA_NAME, ": ", message);
}

#endif // LOGGER_MQH