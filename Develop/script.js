// Assignment code here

// Variables to store the different character sets
// the user picks from
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUBWXYZ";
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var special = " !\"]]#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Checks if number string is valid. Returns false if not.
function isNumber(n) {
  for (var i = 0; i < n.length; i++) {
    if (numeric.indexOf(n) != -1) {
      return false;
    }
  }
  return true;
}

function generatePassword() {
  // Initializing variables to be used in later for-loop
  var letter = "";
  var letterChoices = "";
  var password = "";

  // Prompt user for password length
  let passwordLength = prompt(
    "How long do you want your password to be?",
    "Between 8 - 128"
  );

  while (
    isNumber(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    passwordLength = prompt(
      "Please enter a valid password length",
      "Between 8 - 128"
    );
  }

  // Sends confirmation prompts to user about what parameters they want
  // for their password generation

  if (confirm("Do you want to include uppercase letters?") === true) {
    letterChoices += alphabetUpper;
  }

  if (confirm("Do you want to include lowercase letters?") === true) {
    letterChoices += alphabetLower;
  }

  if (confirm("Do you want to include numbers?") === true) {
    letterChoices += numeric;
  }

  if (confirm("Do you want to include special characters?") === true) {
    letterChoices += special;
  }

  // Picks random character from letterChoices for passwordLength times to
  // build the final password string
  for (var i = 0; i < passwordLength; i++) {
    letter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
    password += letter;
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
