// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name"); */also put this in lowercase*/
let display = document.querySelector(".display"); /*put this in lowercase*/

// This code should be working (uncommented input and display as well as bottom line)
input.addEventListener("input", function () {
const name = input.value;
display.textContent = name;
 }); 

// missing function?

// you should see 5 in the output of your console(Fixed by adding a function :D)

function simpleMath(a, b) {
  return a + b;
}

console.log(simpleMath(2, 3));