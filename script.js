function TeamAnswer (){
  var password = document.getElementById("TeamQuestion");
  var passwordText = password.value;
  if(passwordText=="Venezuela"){
    return true;
    }
  alert("Try again")
  return false;
}
