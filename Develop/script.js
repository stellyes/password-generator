// Assignment code here
function generatePassword() {
  // Variables to store the different character sets
  // the user picks from
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUBWXYZ";
  var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  var numberic = "0123456789";
  var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Initialized boolean values to test against user input
  var includeUpper = false;
  var includeLower = false;
  var includeNumeric = false;
  var includeSpecial = false;

  // Prompt user for password length
  let passwordLength = prompt(
    "How long do you want your password to be?",
    "Between 8 - 128"
  );

  passwordLength = Number(passwordLength);

  // TODO - Add typecast check here

  // Sends confirmation prompts to user about what parameters they want
  // for their password generation

  if (confirm("Do you want to include uppercase letters?") == true) {
    includeUpper = true;
  }

  if (confirm("Do you want to include lowercase letters?") == true) {
    includeLower = true;
  }

  if (confirm("Do you want to include numbers?") == true) {
    includeNumeric = true;
  }

  if (confirm("Do you want to include special characters?") == true) {
    includeSpecial = true;
  }

  // Initializing variables to be used in later for-loop
  var letter = "";
  var password = "";
  var characterType = 0;

  for (var i = 0; i < passwordLength; i++) {
    // characterType is a random number between 0 and 3 that triggers
    // the uppercase, lowercase, numeric, or special character sequence
    // in their respective numberings
    characterType = Math.floor(Math.random() * 3);

    // Gets random character from randomly selected category
    // and appends it to the password string
    switch (characterType) {
      case 0:
        letter =
          alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
        password += letter;
        break;
      case 1:
        letter =
          alphabetLower[Math.floor(Math.random() * alphabetLower.length)];
        password += letter;
        break;
      case 2:
        letter = numberic[Math.floor(Math.random() * numberic.length)];
        password += letter;
        break;
      case 3:
        letter = special[Math.floor(Math.random() * special.length)];
        password += letter;
    }
  }

  console.log(password);
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
