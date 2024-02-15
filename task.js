function createCounter(init) {
    return {
        increment: function () {
            return init + 1;
        },
        reset: function () {
            return init;
        },
        decrement: function () {
            return init - 1;
        },
    };
}
var counter = createCounter(0);
console.log(counter.increment());
