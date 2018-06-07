module.exports = function evenLadderPattern(num) {
  if (num < 1){
    return "";
  } else {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      if (i % 2 === 0){
        var evenStr = i.toString().repeat(i);
        arr.push(evenStr.toString());
      } 
    }
    return arr.join("\n");
  }
}