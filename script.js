// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = promptMe();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// constant arrays of acceptable characters
function promptMe() {
  const lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

  var concatArrays = []

  var passwordArray = []

  function randomChar(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
// Prompt list
  // first prompt
  var passwordLength = prompt("Choose Password Length: 8 - 128 Characters");

  // valid input
  if (passwordLength >= 8 && passwordLength <=128) {
  // invalid input
  } else {
    alert ("invalid length of " + passwordLength + ". Please select 8 - 128 characters.");
    return promptMe();
  }

  // second prompt
  var useUpper = confirm("Include UPPERCASE Characters?");

  // third prompt 
  var useLower = confirm("Include lowercase Characters?");

  // fourth prompt
  var useNumber = confirm("Include Numerical Characters? (Ex: 1,2,3)");

  // fifth prompt
  var useSpecial = confirm("Include Special Characters? (Ex: !,@,#)");

//VALIDATION LIST 
  // if NONE are selected
  if (!useUpper && !useLower && !useNumber && !useSpecial) {
    alert ("Invalid Entry - Please select at least one character selector.");
    promptMe();
  }

  // all selected
  if (useUpper && useLower && useNumber && useSpecial) {
    concatArrays = lowerChars.concat(upperChars, numbers, specialChars);
  }

  // if 3 are selected
  if (!useUpper && useLower && useNumber && useSpecial) {
    concatArrays = lowerChars.concat(numbers, specialChars);
  }

  if (useUpper && !useLower && useNumber && useSpecial) {
    concatArrays = upperChars.concat(numbers, specialChars);
  }

  if (useUpper && useLower && !useNumber && useSpecial) {
    concatArrays = lowerChars.concat(upperChars, specialChars);
  }

  if (useUpper && useLower && useNumber && !useSpecial) {
    concatArrays = lowerChars.concat(upperChars, numbers);
  }

  // if 2 are selected
  if (!useUpper && !useLower && useNumber && useSpecial) {
    concatArrays = numbers.concat(specialChars);
  }

  if (!useUpper && useLower && !useNumber && useSpecial) {
    concatArrays = lowerChars.concat(specialChars);
  }

  if (!useUpper && useLower && useNumber && !useSpecial) {
    concatArrays = lowerChars.concat(numbers);
  }

  if (useUpper && !useLower && !useNumber && useSpecial) {
    concatArrays = upperChars.concat(specialChars);
  }

  if (useUpper && !useLower && useNumber && !useSpecial) {
    concatArrays = upperChars.concat(numbers);
  }

  if (useUpper && useLower && !useNumber && !useSpecial) {
    concatArrays = lowerChars.concat(upperChars);
  }

  // if 1 is selected
  if (useUpper && !useLower && !useNumber && !useSpecial) {
    concatArrays = upperChars;
  }

  if (!useUpper && useLower && !useNumber && !useSpecial) {
    concatArrays = lowerChars;
  }

  if (!useUpper && !useLower && useNumber && !useSpecial) {
    concatArrays = numbers;
  }

  if (!useUpper && !useLower && !useNumber && useSpecial) {
    concatArrays = specialChars;
  }

// creation of random number generator
  for (var i = 0; i < passwordLength; i++) {
    passwordArray.push(randomChar(concatArrays)); 
  }

  return passwordArray.join("");

}
