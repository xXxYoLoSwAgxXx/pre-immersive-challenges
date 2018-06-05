module.exports = function acceptableSequence(str){
  for (let i = 0; i < str.length; i++) {
    if(str[i].match(/[a-zA-z]/)){
      if(
        (str[i+1] !== '+' && str[i-1] !== '+') ||
        str[i-1] === undefined || 
        str[i+1] === undefined


      ){
        return false;
      } else{
        return true;
      }
    }
  }
}



/* function goes through str via for loop then if str[i] which is the letters in str, is surrounded by +, */ 