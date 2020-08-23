// Assignment Code
var generateBtn = document.querySelector("#generate");
const generateButton = document.getElementById('generateBtn');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var options = [ ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],                                    //0
                ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],                                    //1
                [1,2,3,4,5,6,7,8,9,0],                                                                                                                       //2
                ['!','\"','#','$','%','&',"\'", "(",")",'*','+',',','-','.','/',':',';','<','=','>','?','@','['," \\ " ,']','^','_','`','{','|','}','~']];  //3
var passwordPrint = [];
var randomPasswordGenerated = "";

function generatePassword(){
  //promp user to select criteria and store as variables
  var passLength = window.prompt("How long do you want your password to be? \n Please choose between 8 and 128.")
  var hasLower = window.confirm("Include lowercase letters?");
  var hasUpper = window.confirm("Include uppercase letters?");
  var hasNum = window.confirm("Include numbers?");
  var hasSym = window.confirm("Include symbols?");
  
    //check console
  console.log(passLength);
  console.log(hasLower);
  console.log(hasUpper);
  console.log(hasNum);
  console.log(hasSym);

  //If Statements to determine Criteria
 

  if(hasLower === true && hasUpper === true && hasNum === true && hasSym === true){
        allTrue(passLength);
}
  else if((hasLower === true && hasUpper === true && hasNum === true) || (hasLower === true && hasUpper === true && hasSym === true) || (hasUpper === true && hasNum === true && hasSym === true) || (hasLower === true && hasNum === true && hasSym === true)){
        threeTrue(passLength);
  }
  else if((hasLower === true && hasUpper === true) || (hasLower === true && hasNum === true) || (hasLower === true && hasSym === true) || (hasUpper === true && hasNum === true) || (hasUpper === true && hasSym === true) || (hasNum === true && hasSym === true)){
        twoTrue(passLength);
}
  else {
        oneTrue(passLength);
  }
  

 

//All Criteria chosen
function allTrue(passLength){
for( var i =0 ; i < passLength; i++){
  var x = Math.floor(Math.random()*4);


  passwordPrint[i] = options[x][Math.floor(Math.random()*options[x].length)];
  randomPasswordGenerated += passwordPrint[i];
  console.log(randomPasswordGenerated);
}

}

function oneTrue(passLength){
  for( var i =0 ; i < passLength; i++){
  if( hasLower === true)
    var x = 0;
  if( hasUpper === true)
    var x = 1;
  if( hasNum === true)
    var x = 2;
  if( hasSym === true)
    var x = 3;
    
 
  passwordPrint[i] = options[x][Math.floor(Math.random()*options[x].length)];
  randomPasswordGenerated += passwordPrint[i];
  console.log(randomPasswordGenerated);

}
}

function twoTrue(passLength){
  for( var i =0 ; i < passLength; i++){
    //Lower + Upper
    if(hasLower === true && hasUpper === true){
    var y = Math.floor(Math.random()*10);
      if( y >= 5 )
        x = 0;
      else
        x = 1;
    }
//LowerCase + Numbers
    if(hasLower === true && hasNum === true){
      var y = Math.floor(Math.random()*10);
        if( y >= 5 )
          x = 0;
        else
          x = 2;
    }
      //Lower + Symbols
    if(hasLower === true && hasSym === true){
      var y = Math.floor(Math.random()*10);
        if( y >= 5 )
         x = 0;
        else
         x = 3;
  }
  //Upper + Numbers
  if(hasUpper === true && hasNum === true){
    var y = Math.floor(Math.random()*10);
      if( y >= 5 )
       x = 1;
      else
       x = 2;
}
//Upper + Symbols
if(hasUpper === true && hasSym === true){
  var y = Math.floor(Math.random()*10);
    if( y >= 5 )
     x = 1;
    else
     x = 3;
}
//Num + Symbols
if(hasNum === true && hasSym === true){
  var y = Math.floor(Math.random()*10);
    if( y >= 5 )
     x = 2;
    else
     x = 3;
}


  passwordPrint[i] = options[x][Math.floor(Math.random()*options[x].length)];
  randomPasswordGenerated += passwordPrint[i];
  console.log(randomPasswordGenerated);
}
}

function threeTrue(passLength){
  for( var i =0 ; i < passLength; i++){
    //Lower + Upper + Num
    if(hasLower === true && hasUpper === true && hasNum === true){
    var y = Math.floor(Math.random()*13);
      if( y >= 8 )
        x = 0;
      else if( y >=4 && y < 8)
        x = 1;
        else 
          x = 2;
    }
//LowerCase + Upper + Sym
    if(hasLower === true && hasUpper === true && hasSym === true){
      var y = Math.floor(Math.random()*13);
      if( y >= 8 )
        x = 0;
        else if( y >=4 && y < 8)
        x = 1;
        else 
          x = 3;
    }
      //Lower + Num + Sym
    if(hasLower === true && hasNum === true && hasSym === true){
      var y = Math.floor(Math.random()*13);
      if( y >= 8 )
        x = 0;
        else if( y >=4 && y < 8)
        x = 2;
        else 
          x = 3;
  }
  //Upper + Numbers + Sym
  if(hasUpper === true && hasNum === true && hasSym === true){
    var y = Math.floor(Math.random()*13);
    if( y >= 8 )
      x = 1;
      else if( y >=4 && y < 8)
      x = 2;
      else 
        x = 3;
}

  console.log(y)
  console.log(x)
  passwordPrint[i] = options[x][Math.floor(Math.random()*options[x].length)];
  randomPasswordGenerated += passwordPrint[i];
  console.log(randomPasswordGenerated);
}
}


return randomPasswordGenerated;

}




//function 1 ---> Includes lower, upper, nums, and symbols
//function 2 ---> Includes only 1, x = 0 (lower) | x = 1 (upper) | x = 2 (num) | x = 3 (symbols) 
//function 3 ---> Includes only 2, options are 0-1, 0-2, 0-3, 1-2, 1-3, 2-3.
//function 4 ---> Includes only 3, options are 0-1-2, 0-1-3, 0-2-3, 1-2-3, 

