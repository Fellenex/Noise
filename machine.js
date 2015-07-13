//Returns a random boolean
function randBool(){
	return (Math.random()<.5);
}

//Elicits a number from a user. 
function getNoiseLevel(){
	while (true){
		var howLoud = prompt("How loud do you want it?", "[1..100]");
		if (howLoud % 1 === 0){
			//howLoud is an integer
			break;
		}
		else{
			alert("You did not enter a number between 0 and 100!");
		}
	}
	return (howLoud % 100);
}

function changeSize(){
	var newWidth = document.getElementById("newNoiseWidth").value;	
	var newHeight = document.getElementById("newNoiseHeight").value;

	c.width = newWidth;
	c.height = newHeight;
	WIDTH = newWidth;
	HEIGHT = newHeight;
}

//Returns an array of size WIDTH x HEIGHT filled with random booleans
function createNoise(){
	var pixels = new Array(WIDTH);

	for (var i=0; i<WIDTH; i++){
		pixels[i] = new Array(HEIGHT);

		for (var j=0; j<HEIGHT; j++){
			pixels[i][j] = randBool();
		}
	}
	return pixels;
}

//Sandwiches the noise in from both ends, giving opposite indices the same value.
function createCornerNoise(){
	var pixels = new Array(WIDTH);

	for (var i=0; i<WIDTH/2; i++){
		inverseI = WIDTH-i-1;

		pixels[i] = new Array(HEIGHT);
		pixels[inverseI] = new Array(HEIGHT);


		for (var j=0; j<HEIGHT/2; j++){
			inverseJ = HEIGHT-j-1;

			v = randBool();
			pixels[i][j] = v;
			pixels[i][inverseJ] = v;

			pixels[inverseI][j] = v;
			pixels[inverseI][inverseJ] = v;
		}
	}
	return pixels;
}

/*
Writes an array to the noise canvas.

Parameters:
	noiseValues: An array of size WIDTH x HEIGHT filled with booleans

Return Value:
	None
*/
function writeNoise(noiseValues){
	noiseContext.width+=0;	//Reset the canvas

	//Split writing white and black

	noiseContext.fillStyle = "#FFFFFF";
	for (var i=0; i<WIDTH; i++){
		for (var j=0; j<HEIGHT; j++){
			if (noiseValues[i][j]){
				noiseContext.fillRect(i,j,1,1);
			}
		}
	}

	noiseContext.fillStyle = "#000000";
	for (var i=0; i<WIDTH; i++){
		for (var j=0; j<HEIGHT; j++){
			if (!noiseValues[i][j]){
				noiseContext.fillRect(i,j,1,1);
			}
		}
	}

}

//Will elicit the drawing of numNoises different noise patterns in sequence, CYCLES times.
function cyclicNoise(noiseType){
	noises = new Array(numNoises);	//The noise patterns which will be drawn

	for (var x=0; x<numNoises; x++){
		if (noiseType == "concentric"){
			noises[x] = createCornerNoise();
		}
		else{
			noises[x] = createNoise();
		}
	}

	for (var y=0; y<CYCLES; y++){
		for (var x=0; x<numNoises; x++){
			writeNoise(noises[x]);
		}
	}
}


//TODO: Why aren't cycle animations working?
var CYCLES=1;
var c = document.getElementById("noiseCanvas");
var noiseContext = c.getContext("2d");
var WIDTH = c.width;
var HEIGHT = c.height;


//numNoises = getNoiseLevel();	//The number of different noise patterns to be drawn
numNoises = 1;

cyclicNoise("concentric");