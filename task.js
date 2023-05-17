function findOdd(A) {
  if (A.length == 1){
    return A[0];
  } else{
    const countItems = {};
    for (const item of A) {
      countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }
    const result = Object.keys(countItems).filter((item) => countItems[item] % 2 != 0);
    return result.join();
  }
}

console.log(findOdd([1,1,2]));

