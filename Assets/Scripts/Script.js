// Global Variables
var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialABC = ",!#$%&'()*+-./:;<=>?@[]^_`{|}~";
var numberABC = "1234567890";
var userInput = "";
var finalPassword = "";

// DOM Element References
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Function to Prompt User for Password Specifications
function generatePassword() {
  console.log("You clicked the button!");
      var keyLength = prompt("How many characters would you like your password to have?");
      if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
            alert("Invalid entry - Please enter a numerical value between 8 and 128.");
            return
      }
      if (keyLength === Number && keyLength >= 8 && keyLength <= 128) {
            alert("Your password will be " + passwordLength + " characters long.");
      }
      console.log(keyLength);
      var lowercase = confirm("Would you like your password to include lowercase letters?");
      console.log(lowercase);
      var uppercase = confirm("Would you like your password to include uppercase characters?");
      console.log(uppercase);
      var numbers = confirm("Would you like your password to include numeric characters?");
      console.log(numbers);
      var specials = confirm("Would you like your password to include special characters?");
      console.log(specials);

      // Validate User's Password Specifications
      if (lowercase === false && uppercase === false && numbers === false && specials === false) {
        alert("You must select at least one character type for your generated password.")
        return;
      }

      // Add User's Password Specifications to User Input String
      userInput = "";
      if (lowercase) userInput += lowercaseABC;
      if (uppercase) userInput += uppercaseABC;
      if (numbers) userInput += numberABC;
      if (specials) userInput += specialABC;
      
      // Generate Final Password Based on User's Password Specifications from the User Input String 
      finalPassword = ""
      for (var i=0; i < keyLength; i++) {
        var randomIndex = Math.floor(Math.random() * userInput.length);
        finalPassword += userInput[randomIndex];
      }

      return finalPassword;
}

// Function to Write the User's Password to the Password Text Area
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

// Function to Add Event Listener to the Generate Button
generateBtn.addEventListener("click", writePassword);