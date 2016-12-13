
var numSquares = 6;
var colors= [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}

		reset();
	});
  }

  for(var i = 0; i < squares.length; i++) {
  //add click listeners to square
	squares[i].addEventListener("click", function(){
		//grab color of clicked square...make a new variable
		var clickedColor = this.style.background;
		//compare color to pickedColor..use an if statement
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}  else {
	    	this.style.background = "#232323";
	    	messageDisplay.textContent = "Try Again";
	    }
	});
  }

  reset();
}

function reset (){
	//get all new colors
	colors = generateRandomColors(numSquares); 
	//pick random color from array
	pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change square colors
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color){
	//loop thru all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	  squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = []
    //repeat num times
	for( var i= 0; i < num; i++){
		arr.push(randomColor())
	}

	return arr;
}

function randomColor(){
	//pick color from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}