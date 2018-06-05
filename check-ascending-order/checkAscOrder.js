module.exports = function checkAscOrder(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i + 1] > numArray[i]){
      return true;
    } else {
      return false;
    }
  }
}