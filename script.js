const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function append(value){

    const operators = ["+","-","*","/","%"];

    if(calculated){

        if(!operators.includes(value)){
            display.value = "";
        }

        calculated = false;
    }

    display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}
function calculate(){

    try{

        let expression = display.value;
        let result = eval(expression);

        let li = document.createElement("li");

        li.innerHTML = `
        <div>${expression}</div>
        <strong>${result}</strong>
        `;

        historyList.prepend(li);

        display.value = result;

        calculated = true;

    }
    catch{
        display.value = "Error";
    }

}

function clearHistory(){
historyList.innerHTML = "";
}
let calculated = false;
function append(value){

    if(calculated){

        if(!isNaN(value) || value === "."){
            display.value = "";
        }

        calculated = false;
    }

    display.value += value;
}