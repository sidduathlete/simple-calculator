let display = document.getElementById("display");
let output = "";
let buttons = document.querySelectorAll(".btn");
for (let item of buttons) {
    item.addEventListener("click", (event) => {
        let buttonValue = event.target.innerText;
        // console.log(buttonValue);
        if (buttonValue === "C") {
            output = "";
            display.value = output;
        } else if (buttonValue === "=") {
            output = eval(output);
            display.value = output;
        } else if (buttonValue === "←") {
            output = output.slice(0, -1); // remove last character
            display.value = output;
        } else if (buttonValue === "(" || buttonValue === ")") {
            output += buttonValue;
            display.value = output;
        } else {
            output += buttonValue;
            display.value = output;
        }
    })

}