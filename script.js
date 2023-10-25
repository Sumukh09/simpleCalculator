let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function backSpace()
{
    try{
        display.value = display.value.toString().substring(0, display.value.length - 1);
        // in this place we can also use after toString().slice(0,-1)    -1 means last index
    }catch(error)
    {
        display.value = 'Error';
    }
}
