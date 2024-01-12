"use strict";
function dominantIndex(nums) {
    const copyNums = nums.slice();
    const sortedNums = copyNums.sort((a, b) => b - a);
    const largestIntegerArr = sortedNums.slice(0, 1);
    const largestInteger = +largestIntegerArr;
    const arr = sortedNums.slice(1);
    const result = arr.every(a => a * 2 <= largestInteger);
    return result ? nums.indexOf(largestInteger) : -1;
}
console.log(dominantIndex([3, 6, 1, 0]));
