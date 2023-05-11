let salaries = {
  
};

function sumSalaries(salaries){
  let result = 0;
  for (let value of Object.values(salaries)) {
    result += value;
  }
  return result;
}

console.log(sumSalaries(salaries));