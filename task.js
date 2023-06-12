let containsDuplicate = function(nums) {
    const arr = nums.sort()
    for (let i = 0; i < arr.length; i++){
      if(arr[i] == arr[i+1]){
        return true
      } else {
        return false
      }
    }
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

