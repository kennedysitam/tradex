//+------------------------------------------------------------------+
//| TradeX Utilities Module                                          |
//| Build 001.11                                                     |
//+------------------------------------------------------------------+
#ifndef __UTILITIES_MQH__
#define __UTILITIES_MQH__

//---------------------------------------------------------
// Normalize a price to the current symbol digits
//---------------------------------------------------------
double NormalizePrice(double price)
{
   return NormalizeDouble(price, _Digits);
}

//---------------------------------------------------------
// Normalize lot size
//---------------------------------------------------------
double NormalizeLot(double lots)
{
   return NormalizeDouble(lots, 2);
}

//---------------------------------------------------------
// Round to a specified number of digits
//---------------------------------------------------------
double RoundToDigits(double value, int digits)
{
   return NormalizeDouble(value, digits);
}

#endif