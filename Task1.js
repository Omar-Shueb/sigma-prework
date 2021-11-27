function DateGiver(date) {
  const currentTime = new Date();
  const givenTime = new Date(Date.parse(date));
  const difference = currentTime.getFullYear() - givenTime.getFullYear();
  return difference;
}

console.log(DateGiver("1990-01-01"));
console.log(DateGiver("1972-12-04"));
