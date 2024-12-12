const passwordBox = document.querySelector("#Password");
const lenght = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|;<,>.?/"

const allchar = uppercase + lowercase + number + symbols;

function createPassword(){
    let passwords = "";
    passwords += uppercase[Math.floor(Math.random() * uppercase.length)]
    passwords += lowercase[Math.floor(Math.random() * lowercase.length)]
    passwords += number[Math.floor(Math.random() * number.length)]
    passwords += symbols[Math.floor(Math.random() * symbols.length)]


    while(lenght > passwords.length){
        passwords += allchar[Math.floor(Math.random() * allchar.length)]
    }
    passwordBox.value = passwords;

}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
    alert(`This Password  ${passwordBox.value}  Has Been Copied`);
}