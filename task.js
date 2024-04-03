function merge(nums1, m, nums2, n) {
    var arr1 = nums1.slice(0, m);
    var arr2 = nums2.slice(0, n);
    console.log(nums1.slice(0, m));
    nums1 = arr1.concat(arr2).sort(function (a, b) { return a - b; });
    return nums1;
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
