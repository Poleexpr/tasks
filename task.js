function debounce(fn, t) {
    var timeOut;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeOut);
        timeOut = setTimeout(function () { return fn.apply(void 0, args); }, t);
    };
}
