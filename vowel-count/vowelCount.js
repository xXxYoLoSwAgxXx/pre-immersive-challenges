module.exports = function vowelCount(str) {
  let count = 0;
  str = str.split('');
  //console.log(str);
  for (let i = 0; i < str.length; i++) {
    if(str[i].match(/[aeiou]/)){
      count = count + 1;
    }
  }
  return count;
}