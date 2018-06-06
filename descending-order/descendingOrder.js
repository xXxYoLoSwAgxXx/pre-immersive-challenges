module.exports = function descendingOrder(number) {
    if (typeof(number) === 'number'){
        var arr = Array.from(number.toString()).map(Number);
        //console.log(arr);
        return arr.sort().reverse().join('');
    } else {
        return 'not a number!';
    }
  }