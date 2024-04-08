function removeDuplicates(nums) {
    var k = 2;
    for (var i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k++] = nums[i];
        }
    }
    return k;
}
