function functionCalc() {
  let elementX = parseInt(document.getElementById(`VariableX`).value);
  let elementY = parseInt(document.getElementById(`VariableY`).value);
  let sum = elementX + elementY;
  document.getElementById(`result`).textContent = "Result is" + " " + sum;
}
