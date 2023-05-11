var total = 0;
var operation = "";

  function clearInput() {
  document.getElementById("result").value = "";
  document.getElementById("result2").innerHTML = "0";
}
function performOperation(op) {
var input = parseFloat(document.getElementById("result").value);
 
    if (!isNaN(input)) {
   
    if (operation !== "") {
      calculate();
      total = parseFloat(document.getElementById("result2").innerHTML);
    }
    
    if (operation === "") {
      total = input;
    }

    operation = op;
    document.getElementById("result").value = "";
  }
}

    function calculate() {
    var input = parseFloat(document.getElementById("result").value);

    if (!isNaN(input)) {

    if (operation === "+") {
      total += input;
    }
    if (operation === "-") {
      total -= input;
    }
    if (operation === "*") {
      total *= input;
    }
    if (operation === "/") {
      total /= input;
    }
    document.getElementById("result2").innerHTML = total;
    operation = "";
  }
}
