var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    var result = [];
    var subFlat = function (array, depth) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var a = array_1[_i];
            Array.isArray(a) && depth < n ? subFlat(a, depth + 1) : result.push(a);
        }
        return result;
    };
    return subFlat(arr, 0);
};
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
