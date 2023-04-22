function numObj(s){
  let arr = [];
  for (let i = 0; i < s.length; i++){
    let obj = {
      [s[i]]: String.fromCharCode(s[i])
    };
    arr.push(obj);
  }
  return arr;
}

console.log(numObj([121,117,120]));