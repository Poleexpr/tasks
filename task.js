var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function join(arr1, arr2) {
    var joinedArray = {};
    var arrayConcat = arr1.concat(arr2);
    for (var _i = 0, arrayConcat_1 = arrayConcat; _i < arrayConcat_1.length; _i++) {
        var i = arrayConcat_1[_i];
        var id = i.id;
        joinedArray[id] ? joinedArray[id] = __assign(__assign({}, joinedArray[id]), i) : joinedArray[id] = i;
    }
    return Object.values(joinedArray);
}
;
