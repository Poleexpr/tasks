function compactObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        var resultArr = [];
        for (var i = 0; i < obj.length; i++) {
            var val = compactObject(obj[i]);
            val && resultArr.push(val);
        }
        return resultArr;
    }
    var compactObj = {};
    for (var key in obj) {
        var val = compactObject(obj[key]);
        if (val) {
            compactObj[key] = val;
        }
    }
    return compactObj;
}
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
