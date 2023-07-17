function calculate() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var operation = document.getElementById("operation").value;
    var result;
  
    switch (operation) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        result = number1 / number2;
        break;
      default:
        result = "Invalid operation";
        break;
    }
  
    document.getElementById("result").innerHTML = "Result: " + result;
  }
  