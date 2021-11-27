function MinMax(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return [arr[0], arr[arr.length - 1]];
}

console.log(MinMax([2, 4, 1, 0, 2, -1]));
console.log(MinMax([20, 50, 12, 6, 14, 8]));
