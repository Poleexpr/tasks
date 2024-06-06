function singleNumber(nums) {
    var result = nums[0];
    for (var i = 1; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
}
console.log(singleNumber([1, 2, 3, 1]));
