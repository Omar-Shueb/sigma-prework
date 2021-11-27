function DateGiver(date) {
  const currentTime = new Date();
  const givenTime = new Date(Date.parse(date));
  const difference = currentTime.getFullYear() - givenTime.getFullYear();
  return difference;
}

var userDate = prompt("Please enter a date:");

console.log(DateGiver(userDate));
