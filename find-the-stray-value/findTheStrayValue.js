module.exports = function findTheStrayValue(array) {
let sortedArr = array.sort();
if (sortedArr[sortedArr.length -1] === sortedArr[sortedArr.length -2] && 
  sortedArr[0] !== sortedArr[1]){
    return sortedArr[0];
}else {
  return sortedArr[sortedArr.length - 1];
}
}
