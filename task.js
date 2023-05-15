function sumTo(n){
let result = 0;
for( let i = 0; i <= n; i++){
  result += i;
}
return result;
}

console.log (sumTo(5));

function sumToR(n){
  if(n == 0){
    return 0
  } else if (n == 1){
    return 1
  } else{
    return n + sumToR(n - 1);
  }
  }
  
  console.log (sumToR(5));


  function sumToS(n){
    return (1 + n) / 2 * n;
    }
    
    console.log (sumToS(5));

