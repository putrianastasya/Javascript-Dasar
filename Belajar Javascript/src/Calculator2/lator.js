document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("inputBox");
    let buttons = document.querySelectorAll("button");
    let string = "";
  
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            let buttonText = e.target.innerHTML;
            
            if (buttonText === "=") {
                try {
                    // Replace 'x' with '*' for multiplication
                    string = eval(string.replace(/x/g, "*").replace(/%/g, "/100"));
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                }
            } else if (buttonText === "AC") {
                string = "";
                input.value = string;
            } else if (buttonText === "DEL") {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else {
                string += buttonText;
                input.value = string;
            }
        });
    });
});
