function input_number(){
	let n;

	while (true){
		n = prompt("Enter a Number: ");

		if (n === null){
			alert("User Cancelled the Input.");
		}

		else if (n.trim() === "" || isNaN(n)){
			alert("Invalid Number.");
			continue;
		}

		else{
			return Number(n);
		}

		break;
	}
}

