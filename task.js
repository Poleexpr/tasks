var number = function (array) {
    let arr = []
    for (i = 0; i < array.length; i++) {
        arr.push(`${i + 1}` + ': ' + `${array[i]}`);
    }
    return arr;
}

console.log(number([]));