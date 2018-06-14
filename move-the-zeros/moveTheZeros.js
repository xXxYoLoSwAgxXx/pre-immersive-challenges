module.exports = function moveTheZeros (arr, isRight) {
  if (!!isRight){
  for(var i = arr.length; i--;) {
    if(arr[i] === 0) {
        arr.splice(i, 1);
        arr.push(0);
      }
    }
  }
  if(!isRight){
    for(var k = arr.length -1 ; k>=0;  k--) {
      if(arr[k] === 0) {
          arr.splice(k, 1);
          arr.unshift(0);
      }
    }
  }
  return arr;
}
