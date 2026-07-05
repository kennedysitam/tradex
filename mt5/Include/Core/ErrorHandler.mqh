//+------------------------------------------------------------------+
//| TradeX Error Handler Module                                      |
//| Build 001.12                                                     |
//+------------------------------------------------------------------+
#ifndef __ERRORHANDLER_MQH__
#define __ERRORHANDLER_MQH__

#include "Logger.mqh"

//---------------------------------------------------------
// Print the last MT5 error
//---------------------------------------------------------
void HandleLastError(string source)
{
   int error = GetLastError();

   if(error != ERR_NO_ERROR)
   {
      LogError(source + " | Error Code: " + IntegerToString(error));
      ResetLastError();
   }
}

//---------------------------------------------------------
// Print a custom error
//---------------------------------------------------------
void HandleError(string source, string message)
{
   LogError(source + " | " + message);
}

#endif