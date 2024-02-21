var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function memoize(fn) {
    var obj = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var json = JSON.stringify(__spreadArray([], args, true));
        if (obj.hasOwnProperty(json)) {
            return obj[json];
        }
        else {
            obj[json] = fn.apply(void 0, args);
            return obj[json];
        }
    };
}
var sum = function (a, b) {
    return a + b;
};
var memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2));
