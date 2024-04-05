function removeDuplicates(nums) {
    var obj = {};
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = nums[i];
            nums[k] = nums[i];
            k++;
        }
    }
    return [obj, k];
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
