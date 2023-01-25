

// Please use text wrap option in VS Code to easily read comments.
// The code between lines 5-46 establish variables to be reused throughout the javascript section and also establishes boolean values that communicate whteher that variable is being utilized in relation to the password.
const range = document.getElementById
('CARange')
var CharacterAmount= document.getElementById('CANumber').value
console.log(CharacterAmount);
var UpperCase2Element; 
if (document.getElementById('Uppercase').checked="true") 
{UpperCase2Element=true} 
else {
  document.getElementById('Uppercase').checked="false";
  UpperCase2Element=false
}
console.log(UpperCase2Element)
var Numbers;
if (document.getElementById('Numbers').checked="true") 
{Numbers=true} 
else {
  document.getElementById('Numbers').checked="false";
  Numbers=false
}
console.log(Numbers)
var Symbols;
if (document.getElementById('Symbols').checked="true") 
{Symbols=true} 
else {
  document.getElementById('Symbols').checked="false";
  Symbols=false
}
console.log(Symbols)
var Lowercase2Element;
if (document.getElementById('Lowercase').checked="true") 
{Lowercase2Element=true} 
else {
  document.getElementById('Lowercase').checked="false";
  Lowercase2Element=false
}
console.log(Lowercase2Element)
const Form = document.getElementById ('PGF')
const Password = document.getElementById
('password')
const Generate = document.getElementById
('generate')
const CharacterAmount2 = document.getElementById("CANumber")

// The below code, lines 49-72 establsihes the generate password function which is operational as evidenced by the console.log on the line immediately following. It establishes the values within character sets that can be selected when generating a password.
function generatePassword(CharacterAmount, UpperCase2Element, Lowercase2Element,
  Symbols, Numbers) {
  var charset = "";
  if (UpperCase2Element) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (Lowercase2Element) {
    charset += "abcdefghijklmnopqrstuvwzyx";
  }
  if (Symbols) {
    charset += "!@#$%^&*()_+-={}[]:;<>/?";
  }
  if (Numbers) {
    charset += "0123456789";
  }
  var password = "";
  console.log(CharacterAmount)
  for (var i = 0; i < CharacterAmount; i++) {
    var random = Math.floor(Math.random() * charset.length);
    password += charset.charAt(random);
  }
  console.log(password)
  return password;
}
console.log(generatePassword(12,true,true,true,true))

// The below code, lines 76-89, is not funcitonal and must be amended but it aima to serve as a guide for the user if they do not enter in the required criteria for a password to be generated.
function passwordCheck() {
var passwordlength = range.value  
if (isNaN(passwordlength)) {
  alert('Please Enter Valid Number')
}
if (passwordlength < 8){
  alert('Password must be at least 8 characters')
}
if (passwordlength > 128) {
  alert('Password cannot exceed 128 characters')
}
if (UpperCase2Element === false && Numbers === false && Symbols === false && Lowercase2Element === false) {
  alert('You must check at least one box')
}}
console.log(passwordCheck)



// The below code, lines 95-103 help give interactivity to the number line and corresponding value in the charcter input box displayed on the webpage.
range.addEventListener ('input', syncCharacterAmount2);
CharacterAmount2.addEventListener ('input', syncCharacterAmount2);
Form.addEventListener('submit', e => {
  e.preventDefault()
  CharacterAmount2.value
  const Password = generatePassword(CharacterAmount2, UpperCase2Element, 
   Numbers,Symbols, Lowercase2Element) 
Password.innerText = Password
})

// Without this code, lines 106-110, the number of charcaters line is not interactive because it establishes the function that aligns the inputed value and the number line.
function syncCharacterAmount2 (e) {
  const value = e.target.value
  CharacterAmount2.value = value
  range.value = value
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// This code, lines 116-123, aims to initialize the writePassword function in the same order of intial passing relative to the listed variables. 
function writePassword() {
  var password = generatePassword(CharacterAmount2, UpperCase2Element, Numbers,
    Symbols, Lowercase2Element );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
