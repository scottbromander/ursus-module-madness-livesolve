module.exports = function(number) {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const convertedNumber = formatter.format(number);

  return convertedNumber;
};
