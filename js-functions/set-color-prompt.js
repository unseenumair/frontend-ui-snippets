function setColor(parent, node){ // Enter Exact Element id/tagName to set color inverted with respect to parent bg Input
	let bg; 
	
	while (true){
		bg = (prompt(`Enter Background for ${parent}`).trim()).toLowerCase();

		if (bg === null){
			alert("User Cancelled the Input");
			throw new Error("Input Cancelled!");
		}

		else if (bg.trim() === ""){
			alert("Invalid Input.");
			continue;
		}

		break;
	}
		
	document.querySelector(parent).style.background = bg; // Set Parent Bg as Input Given

	element = document.querySelector(node);
	
	element.style.color = "transparent";
	element.style.background = bg;
	element.style.backgroundClip = "text";
	element.style.webkitBackgroundClip = "text"; // FallBack to backgroundClip
	element.style.filter = "invert(1)"; // For Inverted Effect
}

setColor("body", "#text"); // Here, Parent is body and node is #text
