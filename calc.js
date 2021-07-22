solved = false;
var displayTxt = "0";

function updateDisplay(txt) {
    //update display with the answer and then reset the display variable
    if (solved){
        document.getElementById('display').innerHTML = txt
        displayTxt = "0";
        solved = false;
    } else{

        document.getElementById('display').innerHTML = txt
    }
}

//evaluate the string
function doTheMath(num) {
    if (num.length > 0){
        try {
            return eval(num)
        } // on error, return 0
          catch(err) {
            return eval(0)
          }
    }
}

function addToDisplayTxt(id) {
    //do not add the first zero to the display or equals
    if (displayTxt.length == 1 && displayTxt == "0" && id != "equals"){
        displayTxt = id

    //do not add "=" to display
    } else if (id != "equals") {
        displayTxt += id
    }
}

function myFunction(e) {

    addToDisplayTxt(e.target.id);

    //capture the calculator numbers and operators
    switch (e.target.id){
        // reset the display
        case "cancel": {
            displayTxt = "0";
        } break;
        // equals do the math!
        case "equals": {
            solved = true;
            displayTxt = doTheMath(displayTxt);
        }
    }
    updateDisplay(displayTxt);
  }
