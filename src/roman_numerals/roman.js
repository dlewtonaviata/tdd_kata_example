// ********************************************************************************* //
// *** Each step below marks the transformations applied for the tests in order. *** //
// ********************************************************************************* //

/*
const convertToRoman = (number) => {
  // Step 1: Only return what is necessary.
  // return "I";

  // Step 2: Change to a variable and add an if
  // const numeral = (number === 1) ? "I" : "V";
  // return numeral;

  // Step 3: Change to an array and an access function
  // const numeralMap = { '1': "I", '5': "V", '10': "X" };
  // return numeralMap[number];

  // Step 4: Increasing the complexity of the container constant
  // const numeralMap = { '1': "I", '5': "V", '10': "X", '50': "L" };
  // return numeralMap[number];

  // Step 5: Increasing the complexity of the container constant
  // const numeralMap = { '1': "I", '5': "V", '10': "X", '50': "L", '100': "C" };
  // return numeralMap[number];
}
*/

/*
// Step 6: Add a branch
const convertToRoman = (number) => {
  // ********************************************************************************** //
  // *** We'll pretend that we are given the map by a library and cannot change it. *** //
  // ********************************************************************************** //
  const numeralMap = { '1': "I", '5': "V", '10': "X", '50': "L", '100': "C" };

  // ********************************************************** //
  // *** The "real" start of our algorithm goes here, then. *** //
  // ********************************************************** //
  if (number === 2) {
    return numeralMap[1] + numeralMap[1];
  }

  return numeralMap[number];
}
*/

// ****************************************************************************** //
// Step 7: Converting an if into a while, which breaks tests, fixed with a branch
//
// Note that this step choose loop transformation over tail-recursion because the
// form of true tail recursion requires that ONLY the recursive call can be after
// the return keyword. Any operation before the return call breaks tail-recursion.
//
// True Tail-Recursion: return convertToRoman(someNumber);
// Not Tail-Recursion:  return "I" + convertToRoman(someNumber);
// ****************************************************************************** //
const convertToRoman = (number) => {
  // ********************************************************************************** //
  // *** We'll pretend that we are given the map by a library and cannot change it. *** //
  // ********************************************************************************** //
  const numeralMap = { '1': "I", '5': "V", '10': "X", '50': "L", '100': "C" };

  // ********************************************************** //
  // *** The "real" start of our algorithm goes here, then. *** //
  // ********************************************************** //
  if (Object.keys(numeralMap).includes('' + number)) {
    return numeralMap[number];
  }

  let remaining = number;
  let result = "";

  while (remaining > 0) {
    --remaining;
    result += numeralMap[1];
  }

  return result;
}

module.exports = {
  convertToRoman,
};
