module.exports = function findMiddleValue(numArray) {
  let arr = numArray.slice();
  let sortedArray = numArray.sort(function(a, b){return a-b});
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sortedArray[1]){
      return arr.indexOf(arr[i]);
    }
    
  }
}
