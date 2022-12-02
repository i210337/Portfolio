function MakeMultiplier(multiplier){
  return(
      function multiplyBy(x){
        return (multiplier * x);
      }
    );
}

multiplierOf3 = MakeMultiplier(4);
console.log(multiplierOf3(5));