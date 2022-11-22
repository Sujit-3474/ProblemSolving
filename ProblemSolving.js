1. Check whether the year is Leap year or not.

 
var Check_Leap = (year) => 
{
 
 if((year%4==0) && (year%400==0))
 {
   console.log("Leap Year")
 }
 
 else
 {
  console.log("Non Leap Year")
 }
 
 
};
 
2. Perfect Number Check.

 
var Perfect_Check = (N) => 
{
      let i;
      let sum=0;
      for(i=0;i<N;i++)
      {
        if(N%i==0)
        {
          sum=sum+i
        }
      }
      
      if(i==1 || sum==N)
      {
      
        return "YES"
      }
      else
      {
        return "NO"
      }
        
};
 
3. Reverse a Number.

 
var Reverse_Number = (N) => 
{
  let rem;
  let rev=0;
  
  while(N!=0)
  {
    rem=N%10;
    rev=rev*10+rem;
    N=parseInt(N/10)
  }
  return rev
  };
 


  4. 