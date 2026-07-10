//+------------------------------------------------------------------+
//| TradeX Statistics Library                                        |
//| Build 006.1                                                      |
//+------------------------------------------------------------------+
#ifndef __STATISTICS_MQH__
#define __STATISTICS_MQH__

//---------------------------------------------------------
// Mean
//---------------------------------------------------------
double Mean(double &data[])
{
   int n = ArraySize(data);

   if(n == 0)
      return 0;

   double sum = 0;

   for(int i = 0; i < n; i++)
      sum += data[i];

   return sum / n;
}
//---------------------------------------------------------
// Variance
//---------------------------------------------------------
//---------------------------------------------------------
// Standard Deviation
//---------------------------------------------------------
double StandardDeviation(double &data[])
{
   return MathSqrt(Variance(data));
}
double Variance(double &data[])
{
   int n = ArraySize(data);

   if(n < 2)
      return 0;

   double mean = Mean(data);
   double sum = 0;

   for(int i = 0; i < n; i++)
   {
      double diff = data[i] - mean;
      sum += diff * diff;
   }

   return sum / (n - 1);
}//---------------------------------------------------------
// Variance
//---------------------------------------------------------
//---------------------------------------------------------
// Standard Deviation
//---------------------------------------------------------
double StandardDeviation(double &data[])
{
   return MathSqrt(Variance(data));
}
double Variance(double &data[])
{
   int n = ArraySize(data);

   if(n < 2)
      return 0;

   double mean = Mean(data);
   double sum = 0;

   for(int i = 0; i < n; i++)
   {
      double diff = data[i] - mean;
      sum += diff * diff;
   }

   return sum / (n - 1);
}
#endif