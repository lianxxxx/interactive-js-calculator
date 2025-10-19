let display = document.getElementById("display");
let buttons = document.querySelectorAll(".item");
let input = "";

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    let value = button.innerText;

    if (value === "AC") {
      input = "";
    } else if (value === "DEL") {
      input = input.slice(0, -1);
    } else if (value === "%") {
      let number = parseFloat(input);
      input = (number / 100).toString();
    } else if (value === "=") {

      let expression = input.replace(/X/g, "*").replace(/÷/g, "/");
      try {
        input = eval(expression).toString(); // calculate
      } catch {
        input = "Error"; 
      }
    } else {
      input += value;
    }

    display.value = input;
  });
});

