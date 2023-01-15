// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var noOfChar = 0;
var isUpperAllowed = false;
var isLowerAllowed = false;
var isNumericAllowed = false;
var isSpecialAllowed = false;

// Function to prompt user for password options
function getPasswordOptions() {
  // Questions to ask users
  noOfChar = parseInt(
    prompt(
      "How many characters would you like in the password? \n--> At least 10 characters but no more than 64! <--"
    )
  );
  // If the first answer is a number between 10 and 64 ask next questions
  if (Number.isFinite(noOfChar)) {
    if (noOfChar >= 10 && noOfChar <= 64) {
      isUpperAllowed = confirm("Are Uppercase letters allowed?");
      isLowerAllowed = confirm("Are Lowercase letters allowed?");
      isNumericAllowed = confirm("Are Numeric characters allowed?");
      isSpecialAllowed = confirm("Are special characters allowed?");
      if (!(
        isUpperAllowed ||
        isLowerAllowed ||
        isNumericAllowed ||
        isSpecialAllowed)
      ) {
        alert("No characters allowed in the password!");
        return undefined;
      }
    } else {
      alert("Please enter a number between 10 and 64!");
      isUpperAllowed = false;
      isLowerAllowed = false;
      isNumericAllowed = false;
      isSpecialAllowed = false;
      return undefined;
    }
  } else {
    alert("Please enter a number!");
    isUpperAllowed = false;
    isLowerAllowed = false;
    isNumericAllowed = false;
    isSpecialAllowed = false;
    return undefined;
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  var posibilities = [];

  isUpperAllowed ? posibilities.push("upperCasedCharacters") : "";
  isLowerAllowed ? posibilities.push("lowerCasedCharacters") : "";
  isNumericAllowed ? posibilities.push("numericCharacters") : "";
  isSpecialAllowed ? posibilities.push("specialCharacters") : "";

  // console.log(posibilities);

  var generatedPass = [];

  for (let i = 0; i < noOfChar; i++) {
    var item = getRandom(posibilities);
    // console.log(item);

    switch (item) {
      case "upperCasedCharacters":
        generatedPass[i] = getRandom(upperCasedCharacters);
        break;

      case "lowerCasedCharacters":
        generatedPass[i] = getRandom(lowerCasedCharacters);
        break;

      case "numericCharacters":
        generatedPass[i] = getRandom(numericCharacters);
        break;

      case "specialCharacters":
        generatedPass[i] = getRandom(specialCharacters);
        break;
    }

    // console.log(generatedPass);
  }

  // console.log(generatedPass);
  return generatedPass.join("");
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
