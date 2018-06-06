module.exports = function cookieProblem(array) {
  sortedArray = array.sort();
  var count = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] < sortedArray[3]){
      howMuchNeed = sortedArray[3] - sortedArray[i];
      count += howMuchNeed;
    }
  }
  return count;
}