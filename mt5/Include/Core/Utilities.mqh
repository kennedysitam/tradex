#ifndef UTILITIES_MQH
#define UTILITIES_MQH

//==================================================
// TradeX Utilities Module
// Build 001.4
//==================================================

//--------------------------------------------------
// Round a number to the specified decimal places
//--------------------------------------------------
double RoundToDigits(double value, int digits)
{
   return NormalizeDouble(value, digits);
}

//--------------------------------------------------
// Check if a value is within a valid range
//--------------------------------------------------
bool IsValueInRange(double value, double min, double max)
{
   return (value >= min && value <= max);
}

#endif // UTILITIES_MQH