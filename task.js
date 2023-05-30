
const runningSum = function(nums) {
  const result = [];
  const a = 0;
  for (let i = 0; i < nums.length; i++){
      a += nums[i];
      result.push(a);
  }
  return result;   
};

console.log(runningSum([1,2,3,4]));

