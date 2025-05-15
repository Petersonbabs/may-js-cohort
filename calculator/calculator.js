// create a function: displayNum(num) that receives the parameter of the number that was clicked and display it on the input
const inputEl = document.getElementById("input")
let canClear = false

let firstValue;
let secondValue;
let operatorSign;

// save the operator that was clicked in a vaiabl => operator

function displayNum(num) {
    if (canClear) {
        inputEl.value = ""
        inputEl.value += num
        canClear = false
    } else {
        inputEl.value += num
    }
}

function operator(sign) {
    // save the first set of numbers in a variable = > firstVal
    firstValue = inputEl.value
    operatorSign = sign
    canClear = true
}


function equalTo() {
    secondValue = inputEl.value
    console.log(firstValue, operatorSign, secondValue)
    // log the firstValue, Operator, and the secondValue
}

function clearScreen(){
    // alert()
    inputEl.value = ""
}