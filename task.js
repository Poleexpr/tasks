function reduce(nums, fn, init) {
    for (var i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
        console.log(init);
    }
    return init;
}
var arr = [1, 2, 3, 4];
function sum(accum, curr) {
    return accum + curr * curr;
}
var init = 100;
console.log(reduce(arr, sum, init));
