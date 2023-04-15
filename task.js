function isValidWalk(walk) {
    //walk.length == 10 
    //'n' == 's'
    //'w' == 'e' 
    let nCount = 0;
    let sCount = 0;
    let wCount = 0;
    let eCount = 0;
    for (i = 0; i < walk.length; i++){
        if (walk[i] === 'n'){
            nCount ++; 
        } else if (walk[i] === 's') {
            sCount ++;
        } else if (walk[i] === 'w') {
            wCount ++;
        } else {
            eCount ++;
        }
    }
    if(walk.length == 10 && nCount == sCount && wCount == eCount){
        return true;
    } else{
        return false
    }
}

    console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));