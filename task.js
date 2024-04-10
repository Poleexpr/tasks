function majorityElement(nums) {
    var _a;
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        var g = ((_a = map.get(num)) !== null && _a !== void 0 ? _a : 0) + 1;
        map.set(num, g);
        if (g > nums.length / 2)
            return num;
    }
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
