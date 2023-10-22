const passwordBox = document.getElementById("password");
const length = 12;
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function creatPassword() {

   let password = "";
   password += character[Math.floor(Math.random() * character.length)];
   while (length > password.length) {
      password += character[Math.floor(Math.random() * character.length)];
   }
   passwordBox.value = password;

}

function copyPassword() {

   passwordBox.select();
   document.execCommand("copy");
   
}