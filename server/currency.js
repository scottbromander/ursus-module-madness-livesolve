const randomNumber = require("./randomNumber");
const dollarConverter = require("./dollar-converter");

module.exports = function() {
  const randomlyGeneratedNumber = randomNumber(10, 10000);
  const formattedRandomNumber = dollarConverter(randomlyGeneratedNumber);

  return formattedRandomNumber;
};
