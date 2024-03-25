function sortBy(arr, fn) {
    var result = arr.sort(function (a, b) { return fn(a) - fn(b); });
    return result;
}
;
