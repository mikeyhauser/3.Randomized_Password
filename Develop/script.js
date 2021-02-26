// listing variable definitions
    //links to html/ definitions in java
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
    //variables to be used as function outputs
var pLength;
var pCasingL;
var pCasingU;
var pNumeric;
var pSpecialChar;   
    // all the arrays necessary to create a master array that includes selected outputs.
var combinedCharacters = [""];    
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&*";

    // blank variables for password and the random number for array selection randomization
var password;
var randomNumber;


        // this leading section defines all the functions for user inputs
    //establish length
var pLengthF = function() { 
   pLength = prompt("Please enter the number of characters you would like in your password. Password length must be between 8 and 128 characters:");
console.log(pLength);
//for loop only accepts numbers
if (pLength > 8) {
  console.log("greater than 8!!");
    if(pLength < 128){
      console.log("less than 128!!"); 
    
    }else{
      console.log("length is too long!!");
    }   
} else {
  console.log("length is too short!");
  pLengthF();
  return pLength;
}
}  
    // establish lowercase: 
var pCasingFL = function() {
pCasingL = prompt("Your password will be " + pLength + " characters long. \n\ \n\ Would you like lowercase characters featured in your password? respond with Y or N to indicate yes or no");
if (pCasingL === "Y" || "y"){
  pCasingL === "Y";
  console.log("uppercase char requested");
  }else{
  pCasingL === "N";
  console.log("no uppercase char requested");
  return pCasingL;
} }
    //establish uppercase:
var pCasingFU = function()
{
  pCasingU = prompt("Would you like uppercase characters in your password?  \n\ respond with a Y or N to indicate yes or no");
    if (pCasingU === "Y" || "y")
  {
    pCasingU === "Y";
    console.log("uppercase char requested");
    }else{
    pCasingU === "N";
    console.log("no uppercase char requested");
    return pCasingU;
  }
}
   //establish numbers
var pNumericF = function()
{
  pNumeric = prompt("Would you like numbers  in your password? \n\ respond with a Y or N to indicate yes or no");
    if (pNumeric === "Y" || "y")
    {
      pNumeric === "Y";
      console.log("numbers requested");
      }else{
      pNumeric === "N";
      console.log("no numbers  requested");
    return pNumeric;
    }
  }
    //establish special characters:
  var pSpecialCharF = function()
{
  pSpecialChar = prompt("Would you like special characters in your password? \n\ respond with a Y or N to indicate yes or no");
    if (pSpecialChar === "Y" || "y")
    {
      pSpecialChar === "Y";
      console.log("special characters requested");
      }else{
      pSpecialChar === "N";
      console.log("no numbers  requested");
    return pSpecialChar;
    }
  }




        //"writePassword" runs all the writen functions above and logs their resulting values in cosole log. The logs could be removed but I left them in for ease of understanding for whats going on.
function writePassword() {
        ///this first statement erases the previous entries so you dont have a previous password affect the new one.
  combinedCharacters = "";
  //functions
  pLengthF();
console.log(pLength + " was collected within write password//global value?");
  pCasingFL();
console.log("pCasingL value is " + pCasingL);
  pCasingFU();
console.log("pCasingU global is " + pCasingU);
  pNumericF();
console.log("pNumeric value is " + pNumeric);
  pSpecialCharF();
console.log(pSpecialChar);

// running the conditionals to assemble the master array used in password generation
 
  if (pCasingL == "y")
    {
  combinedCharacters = combinedCharacters + lowercaseCharacters; 
    }
  if (pCasingU == "y")
    {
  combinedCharacters = combinedCharacters + uppercaseCharacters;
    }
  if (pNumeric == "y")
    {
  combinedCharacters = combinedCharacters + numberCharacters;
    }
  if (pSpecialChar == "y")
    {
  combinedCharacters = combinedCharacters + specialCharacters;
    }

    //one last console log to verify inputs are correct in the master array
 console.log(combinedCharacters);  

// use this for loop to select from that master array
var generatedPassword = "";
              //inital value = 0, runs to lenth of pLength
          for (var i = 0; i < pLength; i++) 
          {
              // every loop adds one random selection from combinedCharacters. math generates a number between 0 and 1 and that number is multiplied by combined characters to pick a random selection from the array.
            var randomNumber = Math.floor(Math.random()*combinedCharacters.length);
              //+= adds each character from the loops to a string
            generatedPassword += combinedCharacters[randomNumber];
   

          }

          //here we change the element associated with passwordText to the generatedPassword.
passwordText.value = generatedPassword;
}
    // listens for the click on html, performs writePassword to btn
generateBtn.addEventListener("click", writePassword);
