

// Assignment code here
// Validation is down, create remaining arrays. If multiple boxes are checked created joining arrays
// This is an array, you will need this for each option in the checkboxes


// -My Code
const range = document.getElementById
('CARange')
const number = document.getElementById
('CANumber') 
const UpperCase2Element = document.getElementById 
('Uppercase')
const Form = document.getElementById
('PGF')
const Numbers = document.getElementById
('Numbers2')
const Symbols = document.getElementById
('Symbols')
const Lowercase2Element = document.getElementById
('Lowercase')
const Password = document.getElementById
('password')

const UpperCase_Char_Codes = arrayFromLowToHigh(65, 90) 
const LowerCase_Char_Codes = arrayFromLowToHigh(97, 122)
const Number_Char_Codes = arrayFromLowToHigh(48, 57)
const Symbol_Char_Codes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126))

function arrayFromLowToHigh(Low, High) {
  const array = []
  for (let i = Low; i <= High; i++) {
array.push(i) 
  }
  return array
}
function generatePassword (characterAmount, includeUpperCase2, includeNumbers, 
  includeSymbols) { 
  let charCodes = LowerCase_Char_Codes 
  if (includeNumbers) charCodes = charCodes.concat
  (Number_Char_Codes)
  if (includeSymbols) charCodes = charCodes.concat
  (Symbol_Char_Codes)
  if (includeUpperCase2) charCodes = charCodes.concat
  (UpperCase_Char_Codes)
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) { 
    const charactercode = charCodes[Math.floor(Math.random()*
      characterAmount)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  } 
return passwordCharacters.join('')
}




range.addEventListener ('input', syncCharacterAmount)
number.addEventListener ('input', syncCharacterAmount)
Form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const Uppercase2 = UpperCase2Element.checked
  const Numbers = Numbers.checked
  const Symbols = Symbols.checked
  const password = generatePassword(CharacterAmount, Uppercase2, 
    Numbers,Symbols) 
Password.innerText = Password
})

// This gives appropriate interactiveness between the bar of number of characters and it's display
function syncCharacterAmount (e) {
  const value = e.target.value
  number.value = value
  range.value = value
}
// My Code

// Starter Code
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
// Starter Code