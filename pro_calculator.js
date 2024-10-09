let result = document.getElementById('num');

function resetButton(){
    result.value = '';

    // document.getElementById('num').innerText = result;
}

function appendNumber(number){
    result.value += number;
}

function signButton(sign){
    result.value += sign;
}

function getResult(){
    result.value = eval(result.value)
    
}
