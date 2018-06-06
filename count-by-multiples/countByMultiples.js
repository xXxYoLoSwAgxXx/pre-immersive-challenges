module.exports = function countByMultiples(length, x) {
  var array = [x];
  var multiplier = x;
  for (let i = 0; i < length - 1; i++) {
    multiplier += x;
    array.push(multiplier);
  }
  return array;
}