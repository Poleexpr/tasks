function intersect(nums1, nums2) {
    var result = [];
    if (nums1.length < nums2.length) {
        return intersect(nums2, nums1);
    }
    var obj = nums1.reduce(function (acc, num) {
        acc[num] = acc[num] + 1 || 1;
        console.log(acc);
        return acc;
    }, {});
    for (var i = 0; i < nums2.length; i++) {
        if (obj[nums2[i]] !== undefined && obj[nums2[i]] > 0) {
            obj[nums2[i]] = obj[nums2[i]] - 1;
            solution.push(nums2[i]);
        }
    }
    return result;
}
console.log(intersect([1, 2, 2, 1], [2, 2]));
