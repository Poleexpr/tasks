function cancellable(fn, args, t) {
    var timeoutId = setTimeout(function () {
        fn.apply(void 0, args);
    }, t);
    var cancelFn = function () {
        clearTimeout(timeoutId);
    };
    return cancelFn;
}
