function doRoll() {
	var input = document.getElementById('skill');
	var value = parseInt(input.value);
	var random = Math.random();
	random = random * 20 + 1;
	random = Math.floor(random);
	var result = random + (value - 5);
	if(result <= 5) {
		alert("Rolled: " + random + "\nCritical Failure");
	} else if(result <= 10) {
		alert("Rolled: " + random + "\nFailure");
	} else if(result <= 15) {
		alert("Rolled: " + random + "\nSuccess");
	} else {
		alert("Rolled: " + random + "\nCritical Success");
	}
}
