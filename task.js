function createCounter(n) {
    return function () {
        return ++n;
    };
}
var counter = createCounter(-2);
console.log(counter(), counter(), counter());
