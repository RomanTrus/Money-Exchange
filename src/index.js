// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let answ={}
  if (currency>=10000){
    return  {error: "You are rich, my friend! We don't have so much coins for exchange"}
   }
   if(currency/50>=1){
     answ.H=Math.floor(currency/50)
     currency=currency%50;
   }
   if(currency/25>=1){
     answ.Q=Math.floor(currency/25)
     currency=currency%25;
   }
   if(currency/10>=1){
     answ.D=Math.floor(currency/10)
     currency=currency%10;
   }
   if(currency/5>=1){
     answ.N=Math.floor(currency/5)
     currency=currency%5;
   }
   if(currency>0){answ.P=currency}
   return answ;
}
