let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}; 

function cakes(recipe, available) {
    arr =[];
    let result = [];
    for (let i in recipe){
        for (let j in available){
            if(i == j){
                    result.push(available[j] / recipe[i]);
                }
            }
    }

    result.sort((a, b) => a - b)

    for (let i in recipe){
        arr.push(available.hasOwnProperty(i));
        if (arr.includes(false)){
            return 0
        } else{
            return Math.round(result[0])
        }
    }
}

        //arr.push(available.hasOwnProperty(i));
        //if (arr.includes(false)){
        //   return 0
        //} else{
        //    return result
        //}


console.log(cakes(recipe, available));