const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercasecheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type = checkbox]");
const symbols ='~`!@#$%^&*()_+=-{[]|:;"<,>.?/';

let password ="";
let passwordLength = 15;
let checkcount = 1;
// strength color is greish

handleSlider();

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    // indicator.style.box-shadow = " 5px 5px 5px 5px color";
}

function getRndInteger(){
    Math.floor(Math.random() * (max-min))+min ;
}

function generateRandomNumber(){
    return getRamrandomInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123)); 
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91)); 
}

function generateSymbol(){
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt[randNum];
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked)
      hasUpper = true;
    if(lowercasecheck.checked)
      hasLower = true;
    if(numbersCheck.checked)
      hasNum = true;
    if(symbolsCheck.checked)
      hasSym = true;
    if(uppercaseCheck.checked)
      hasUpper = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && password >= 8){
        setIndicator("#ff0");
    }else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength>=6){
        setIndicator("#ff0");
    }else{
        setIndicator("#f00");
    }   
}

async function copycontent(){
    try{
        navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerHTML = "copied";
    }
    catch(e){
        copyMsg.innerHTML = "failed";
    }
    // to make copy span
    copyMsg.classList.add("active")

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}