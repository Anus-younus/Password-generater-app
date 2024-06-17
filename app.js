const inputRangeEle = document.getElementById("input-range");
const rangeValueEle = document.getElementById("range-value");
const lowercaseeEle = document.getElementById("lowercase");
const uppercaseEle = document.getElementById("uppercase");
const numberseEle = document.getElementById("numbers");
const symbolseEle = document.getElementById("symbols");
const passBoxEle = document.getElementById("pass-box");
const genBtnEle = document.getElementById("btn");
const iconEle = document.getElementById("icon");

rangeValueEle.textContent = inputRangeEle.value
inputRangeEle.addEventListener('input', () => {
    rangeValueEle.textContent = inputRangeEle.value
})

genBtnEle.addEventListener('click', () => {
    passBoxEle.value = generatePassword()
})

let uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLetter = "abcdefghtijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "~!@#$%^&*";


function generatePassword() {
    let genPassword = "";
    let allChar = ""

    allChar += lowercaseeEle.checked ? lowercaseLetter : ""
    allChar += uppercaseEle.checked ? uppercaseLetter : ""
    allChar += numberseEle.checked ? numbers : ""
    allChar += symbolseEle.checked ? symbols : ""

    if (allChar == "" || allChar.length == 0) {
        return genPassword;
    }

    let i = 1;

    while(i <= inputRangeEle.value){
        genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
        i++
    }

    return genPassword;
}

iconEle.addEventListener('click', () => {
    if(passBoxEle.value !== "" || passBoxEle.value.length >= 1) {
    navigator.clipboard.writeText(passBoxEle.value);
    iconEle.className = "bx"
    iconEle.className += " bx-check"
    iconEle.title = "Password Copied"

    setTimeout(() => {
        iconEle.className = "bx"
        iconEle.className += " bx-copy"
        iconEle.title = ""
    }, 2000)
    }
})