function containsDuplicate(nums) {
    var obj = {};
    var k = 0;
    for (var i = 0; i < nums.length; i++) {
        obj.hasOwnProperty(nums[i]) ? (obj[nums[i]] += 1) : (obj[nums[i]] = 0);
    }
    console.log(obj);
    var more = function (m) { return m >= 1; };
    return Object.values(obj).some(more);
}
console.log(containsDuplicate([1, 2, 3, 1]));
