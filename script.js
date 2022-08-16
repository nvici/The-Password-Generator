// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)

}

function randomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
    
  var userInput = window.prompt("How many characters would you like your password to contain?")
   //prompt the user for the password criteria
   var passwordLength = parseInt(userInput);

   if (isNaN(passwordLength)) {
    window.alert("that is not a number!")
    return;
   }
// a. password length 8 < 28
   if(passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return;
   }
// b. lowercase,uppercase,numbers, special characters
   var userNumbers = window.confirm("Do you want to include Numbers in your password?");
   var userLowercase = window.confirm("Do you want to include Lowercase in your password?");
   var userUpperCase = window.confirm("Do you want to include Uppercase in your password?");
   var userSymbols = window.confirm("Do you want to include Symbols in your password?");

   var numberList = ["0","1","2","3","4","5","6","7","8","9"];
   var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var uppercaseList = [];
   var symbolList = ["!","@","#","$","%","^","&","*"];
//2 Validate the input
   var optionsCart = [];

   for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
   }

   if (userNumbers === true) {
    optionsCart.push(numberList);
   }
   if (userLowercase === true) {
    optionsCart.push(lowercaseList);
   }
   if (userSymbols === true) {
    optionsCart.push(symbolList);
   }
   if (userUpperCase === true) {
    optionsCart.push(uppercaseList);
   }
      
   if (optionsCart.length === 0){
    optionsCart.push(lowercaseList);
   }
//3. generate paswword on criteria
   var generatedPassword = ""

   for (var i = 0; i < passwordLength; i++) {
    var randomList = randomItem(optionsCart);
    var randomChar = randomItem(randomList);
    generatedPassword += randomChar;
   }

    //4. display pw to the page 
   return generatedPassword;
        
      
   
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);