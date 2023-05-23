function functionCalc() {
  var elementX = parseInt(document.getElementById(`VariableX`).value);
  var elementY = parseInt(document.getElementById(`VariableY`).value);
  var sum = elementX + elementY;
  document.getElementById(`result`).textContent = "Result is" + " " + sum;
}
