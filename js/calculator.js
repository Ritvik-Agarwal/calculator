var inputString = "";
var display = document.getElementById("display");

function updateDisplay() {
	display.value = inputString;
}

function addChar(div) {
	char = div.getAttribute("data-value");
	inputString += char;
	console.log(inputString);
	updateDisplay();
}

function clearDisplay() {
	inputString = "";
	console.log("clear");
	updateDisplay();
}
