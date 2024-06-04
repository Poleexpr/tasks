function rotate(nums, k) {
    while (k--) {
        nums.unshift(nums.pop());
    }
}
;
