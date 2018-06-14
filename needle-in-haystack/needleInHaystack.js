module.exports = function needleInHaystack(haystack) {
  if(haystack.indexOf("needle") > -1){
    return (haystack.indexOf('needle'));
  } else {
    return false;
  }
}