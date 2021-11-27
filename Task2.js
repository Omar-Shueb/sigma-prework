function MinMax(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}

var userArr = prompt("Please input an array, for example 1,2,3,4,5 :");

var Arr = userArr.split(",");

console.log(MinMax(Arr));
