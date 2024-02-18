function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}
function filter(arr, fn) {
    var result = [];
    var curriedFn = curry(fn);
    console.log(curriedFn);
    for (var i = 0; i < arr.length; i++) {
        if (curriedFn(arr[i])) {
            result.push(arr[i]);
        }
        if (curriedFn(i)) {
            result.push(i);
        }
    }
    return result;
}
var arr = [0, 10, 20, 30];
function greaterThan10(n) {
    return n > 10;
}
console.log(filter(arr, greaterThan10));
