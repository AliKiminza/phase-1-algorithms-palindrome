function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.toLowerCase().split('').reverse().join('');
  return word === reverseWord;
}

/* 
  Add your pseudocode here
*/
 // Create a new word reversing variable (reverseWord)
  // Take the word and split it into its individual characters.
  // Use .split as this assigns each character a value.
  // use .reverse to reverse the order of the characters.
  // use.join to join the characters back together.
    // check whether the reversed word is the same as the original
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
}

module.exports = isPalindrome;
