function randBool(){
	return Math.random()<.5;
}

function staticNoise(){
	var canvas = document.getElementById("noiseCanvas");
	var noiseContext = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;

	for (var i=0; i<width; i++){
		for (var j=0; j<height; j++){
			if (randBool()){
				noiseContext.fillStyle = "#FFFFFF";
			}
			else{
				noiseContext.fillStyle = "#000000";
			}

			ctx.fillRect(i,j,1,1);
		}
	}
}