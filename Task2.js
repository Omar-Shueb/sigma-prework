function MinMax(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}

var userArr = prompt("Please input an array:");

var Arr = userArr.replace("[", "").replace("]", "").split(",");

console.log(MinMax(Arr));
