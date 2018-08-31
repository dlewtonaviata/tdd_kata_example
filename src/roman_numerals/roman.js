const convertToRoman = (number) => {
  // Step 1: Only return what is necessary.
  return "I";

  // Step 2: Change to a variable and add an if
  // const numeral = (number === 1) ? "I" : "V";
  // return numeral;

  // Step 3: Change to an array and an access function
  // const numeralMap = { '1': "I", '5': "V", '10': "X" };
  // return numeralMap[number];

  // Step 4a-b: Increasing the complexity of the container constant
  // const numeralMap = { '1': "I", '5': "V", '10': "X", '50': "L", '100': "C" };
  // return numeralMap[number];
}

module.exports = {
  convertToRoman,
};
