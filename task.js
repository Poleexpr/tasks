var TimeLimitedCache = /** @class */ (function () {
    function TimeLimitedCache() {
        this.cache = new Map();
    }
    TimeLimitedCache.prototype.set = function (key, value, duration) {
        var _this = this;
        var existed = this.cache.has(key);
        if (existed) {
            clearTimeout(this.cache.get(key).ref);
        }
        this.cache.set(key, {
            value: value,
            ref: setTimeout(function () {
                _this.cache.delete(key);
            }, duration),
        });
        return existed;
    };
    TimeLimitedCache.prototype.get = function (key) {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    };
    TimeLimitedCache.prototype.count = function () {
        return this.cache.size;
    };
    return TimeLimitedCache;
}());
