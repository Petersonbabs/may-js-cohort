// create a function: displayNum(num) that receives the parameter of the number that was clicked and display it on the input
const inputEl = document.getElementById("input")
let canClear = false

// save the first set of numbers in a variable= > firstVal
// save the operator that was clicked in a vaiabl => operator

function displayNum(num){
    if(canClear){
        inputEl.value = ""
        inputEl.value += num
        canClear = false
    }else{
        inputEl.value += num
    }
}

function operator(){
    canClear = true
}


function equalTo(){
    // log the firstValue, Operator, and the secondValue
}