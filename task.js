function findOutlier(integers){
    let odd = integers.filter(item => item % 2 == 0);
    let even = integers.filter(item => item % 2 != 0);

    if(odd.length == 1){
        return odd[0]
    } else {
        return even[0]
    }   
}

 console.log(findOutlier([0, 1, 2]));