function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i > -1; --i) {
    reversed = reversed + str[i];
  }

  return reversed;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'ydwoh'")
  console.log("=>", reverseString("howdy"))
}

module.exports = reverseString;

// Please add your pseudocode to this file
  //initialize reversed variable, iterate through every letter in the string backwards, add each letter to the initialized reversed variable
// And a written explanation of your solution
