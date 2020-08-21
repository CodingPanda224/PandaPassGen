// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//promp user to select criteria and store as variables
var passLength = window.prompt("How long do you want your password to be? \n Please choose between 8 and 128.")
var hasLower = window.confirm("Include lowercase letters?");
var hasUpper = window.confirm("Include uppercase letters?");
var hasNum = window.confirm("Include numbers letters?");
var hasSym = window.confirm("Include symbols letters?");
var passwordPrint = [];

console.log(passLength);
console.log(hasLower);
console.log(hasUpper);
console.log(hasNum);
console.log(hasSym);

var options = [ ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],                                    //0
                ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],                                    //1
                [1,2,3,4,5,6,7,8,9,0],                                                                                                                       //2
                ['!','\"','#','$','%','&',"\'", "(",")",'*','+',',','-','.','/',':',';','<','=','>','?','@','['," \\ " ,']','^','_','`','{','|','}','~']];  //3

//if all true, then, random num for both options[x][y] (0 <= x < 4) and (0 <= y < options[x].length).
//create functions that call upon the array depending on the criteria chosen.

for( var i =0 ; i < passLength; i++){
  var x = Math.floor(Math.random()*4);

  console.log(options[x][Math.floor(Math.random()*options[x].length)]);
  passwordPrint[i] = options[x][Math.floor(Math.random()*options[x].length)];
  
}

//function 1 ---> Includes lower, upper, nums, and symbols
//function 2 ---> Includes only 1, x = 0 (lower) | x = 1 (upper) | x = 2 (num) | x = 3 (symbols) 
//function 3 ---> Includes only 2, options are 0-1, 0-2, 0-3, 1-2, 1-3, 2-3.
//function 4 ---> Includes only 3, options are 0-1-2, 0-1-3, 0-2-3, 1-2-3, 
