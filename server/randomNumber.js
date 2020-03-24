let numOfTimesRan = 0;

module.exports = function(min, max) {
  numOfTimesRan++;
  if (numOfTimesRan % 7 === 0) {
    return max;
  } else {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
};
