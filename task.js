function persistence(num) {
    num = String(num);
    let arr = num.split('');
    let arrResult = [];

    while (arr.length > 1){
        let result = arr.reduce((acc,item) => acc * item, 1);
        let string = result.toString();
        arr = string.split('')
        arrResult.push(result);
    } 

    return arrResult.length;
}

console.log(persistence(999));