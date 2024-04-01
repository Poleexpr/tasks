var ArrayWrapper = /** @class */ (function () {
    function ArrayWrapper(nums) {
        this.nums = nums;
    }
    ArrayWrapper.prototype.valueOf = function () {
        return this.nums.concat().reduce(function (a, b) { return a + b; }, 0);
    };
    ArrayWrapper.prototype.toString = function () {
        return JSON.stringify(this.nums);
    };
    return ArrayWrapper;
}());
;
