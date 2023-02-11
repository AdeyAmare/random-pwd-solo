const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const pwdOne = document.getElementById("pwd-one");
const pwdTwo = document.getElementById("pwd-two");

function getRandomCharacter() {
    let randomOne = Math.floor(Math.random() * characters.length);

    return characters[randomOne];
}

function generatePassword() {
    let randompwdOne = "";
    let randompwdTwo = "";

    for (let i = 0; i < document.getElementById("pass-len").value; i++) {
        randompwdOne += getRandomCharacter();
        randompwdTwo += getRandomCharacter();
    }

    pwdOne.textContent = randompwdOne;
    pwdTwo.textContent = randompwdTwo;
}

async function clipboardcopy(password) {
    if (password === "password-one") {
        let copyText = pwdOne.innerHTML;
        await navigator.clipboard.writeText(copyText);

    } else if (password === "password-two") {
        let copyText = pwdTwo.innerHTML;
        await navigator.clipboard.writeText(copyText);
    }
    alert("Copied to clipboard!")
}




