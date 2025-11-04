function generateColor(){
	let codes = ["a", "b", "c", "d", "e", "f"];

	for (let x = 0; x <= 9; x++){
		codes.push(x);
	}

	let randomIndex, randomValue;
	let colorCodes = [];
	
	for (let y = 0; y < 6; y++){
		randomIndex = Math.floor(Math.random() * codes.length);
		randomValue = codes[randomIndex];

		colorCodes.push(randomValue);
	}

	let color = `#${colorCodes.join("")}`; // Hex Color Code
	return color;
}
