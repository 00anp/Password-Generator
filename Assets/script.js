// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Declare variable for input and arrays
var passLength;
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "(", ")","%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Declare var to store character options
var charOptions; 

function generatePassword(){

// Asks for user input (number)
  passLength = parseInt(prompt("Please select a number between 8 and 128 for your password length."));
 
  
// Validate number is between paramaters, if it's NaN or blank // when tried with letters it only returns one time
  while (isNaN(passLength) || passLength <= 7 || passLength >= 129) {
    passLength = (prompt("Please select a number between 8 and 128 for your password length. Try again."));
  }
// Log user input
  console.log(passLength);
// Prompt continues once passLength is validated, log true/false with confirm function for charOptions seleceted
  confirmNumbers = confirm("Will your password contain numbers?");
  console.log(confirmNumbers);
  confirmSymbols = confirm("Will your password contain symbols?");
  console.log(confirmSymbols);
  confirmUppercase = confirm("Will your password contain Uppercase letters?");
  console.log(confirmUppercase);
  confirmLowercase = confirm("Will your password contain Lowercase letters?");
  console.log(confirmLowercase);

// if user selects 4 false options, alert and tell to try again. // it doesn't return to original prompt
  if (!confirmNumbers && !confirmSymbols && !confirmUppercase && !confirmLowercase) {
    charOptions = alert("Please select at least one criteria to build your password. Try again.");
  }
//else if for 4 true options
  else if (confirmNumbers && confirmSymbols && confirmUppercase && confirmLowercase) {
    charOptions = number.concat(symbol, lowerCase, upperCase);
  }
// Else if for 3 true options
  else if (confirmNumbers && confirmSymbols && confirmUppercase) {
    charOptions = number.concat(symbol, upperCase);
  }
  else if (confirmNumbers && confirmSymbols && confirmLowercase) {
    charOptions = number.concat(symbol, lowerCase);
  }
  else if (confirmNumbers && confirmUppercase && confirmLowercase) {
    charOptions = number.concat(upperCase, lowerCase);
  }
  else if (confirmSymbols && confirmUppercase && confirmLowercase) {
    charOptions = symbol.concat(upperCase, lowerCase);
  }
// Else if for 2 true options 
  else if (confirmNumbers && confirmSymbols) {
    charOptions = number.concat(symbol);

  } else if (confirmNumbers && confirmUppercase) {
    charOptions = number.concat(upperCase);

  } else if (confirmNumbers && confirmLowercase) {
    charOptions = number.concat(lowerCase);
  }
  else if (confirmSymbols && confirmUppercase) {
    charOptions = symbol.concat(upperCase);

  } else if (confirmSymbols && confirmLowercase) {
    charOptions = symbol.concat(lowerCase);

  } else if (confirmUppercase && confirmLowercase) {
    charOptions = upperCase.concat(lowerCase);
  }
// Else if for 1 true option
  else if (confirmNumbers) {
    charOptions = number;
  }
  else if (confirmSymbols) {
    charOptions = symbol;
  }
  else if (confirmUppercase) {
    charOptions = upperCase;
  }
  else if (confirmLowercase) {
    charOptions = lowerCase;
  }
// Log test to see if arrays are concatenating for the charOptions selected
  console.log(charOptions); 
// declare variable for characters to be stored as an array
  var passwordArray =[];
// for loop that creates array of selected passLength with selected charOptions, array is stored in var
  for(var i=0; i < passLength; i++){
    var randomCharacters = charOptions[Math.floor(Math.random() * charOptions.length)];
    passwordArray.push(randomCharacters);
  }
// log the array of characters
  console.log(passwordArray);
// transform array to string
  var passwordString = passwordArray.join("");
// log and return to site the created password string
  console.log(passwordString);

  return passwordString;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
