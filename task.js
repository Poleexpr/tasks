function canJump(nums) {
    var result = nums.length - 1;
    for (var i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= result) {
            result = i;
        }
    }
    return result === 0;
}
console.log(canJump([2, 3, 1, 1, 4]));
