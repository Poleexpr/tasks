var Calculator = /** @class */ (function () {
    function Calculator(value) {
        this.result = value;
    }
    Calculator.prototype.add = function (value) {
        this.result += value;
        return this;
    };
    Calculator.prototype.subtract = function (value) {
        this.result -= value;
        return this;
    };
    Calculator.prototype.multiply = function (value) {
        this.result *= value;
        return this;
    };
    Calculator.prototype.divide = function (value) {
        if (value === 0) {
            throw 'Division by zero is not allowed';
        }
        this.result /= value;
        return this;
    };
    Calculator.prototype.power = function (value) {
        var _a;
        (_a = this).result = Math.pow(_a.result, value);
        return this;
    };
    Calculator.prototype.getResult = function () {
        return this.result;
    };
    return Calculator;
}());
