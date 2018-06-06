module.exports = function descendingOrder(number) {
  var str = number.toString();
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (typeof number === 'number' === false){
      console.log('not a number!');
    } else {
      console.log(str.split("").sort("").reverse("").join(""));
  }
}

