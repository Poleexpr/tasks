function cancellable(fn, args, t) {
    fn.apply(void 0, args);
    var interval = setInterval(function () {
        fn.apply(void 0, args);
    }, t);
    var cancelFn = function () {
        clearInterval(interval);
    };
    return cancelFn;
}
