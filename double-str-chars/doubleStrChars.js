module.exports = function doubleStrChars(str) {
  if (typeof(str) === 'string'){
    var arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i] + str[i].toString());
    }
    return arr.join('');
  } else {
    return 'not a string!';
  }
}