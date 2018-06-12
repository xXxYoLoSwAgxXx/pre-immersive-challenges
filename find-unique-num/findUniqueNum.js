module.exports = function findUniqueNum(strOfNums) {
var arr = strOfNums.split(" ");
let even = [];
let odd = [];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
  if(arr[i] % 2 === 0){
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }

}
if (even.length === 1){
  return arr.indexOf(even[0]);
} else{
  return arr.indexOf(odd[0]);
}
}