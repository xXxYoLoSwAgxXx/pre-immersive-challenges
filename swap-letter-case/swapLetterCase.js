module.exports = function swapLetterCase(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()){
      str[i] = str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()){
      str[i] = str[i].toLowerCase();
    } else {
      str[i] = str[i]
    }
  }
  console.log(str.join(''));
  return str.join('');
}