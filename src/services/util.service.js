export const createArray = (firstNumber, spread, lastNumber) => {
  const result = [];
  for (var i = firstNumber; i <= lastNumber; i += spread) {
    result.push({ value: i, label: i.toString() });
  }
  return result;
};

export const currencies = [
  { value: "ils", label: "coin.shekel" },
  { value: "usd", label: "coin.dollar" },
];

export const languages = [
  { value: "he", label: "language.he" },
  { value: "en", label: "language.en" },
];
