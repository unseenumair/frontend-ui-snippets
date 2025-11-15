const menu = document.querySelector("#hamburger");
const header = document.querySelector("header");
const cross = document.querySelector("#cross");
const button = document.querySelector("button");

menu.addEventListener("click", ()=>{
	menu.style.display = "none";
	header.style.transform = "translateX(0)";
	button.style.display = "none";
	cross.style.display = "flex";
});

cross.addEventListener("click", ()=>{
	cross.style.display = "none";
	header.style.transform = "translateX(-1000px)";
	menu.style.display = "flex";
	button.style.display = "flex";
});

// Toogle Mode

const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
let mode, lastMode;

lastMode = localStorage.getItem("lastMode");
if (lastMode){
	document.body.className = lastMode;
	setIcon();
}

function setIcon(){
	mode = document.body.className;
			
	if (mode === "lightMode"){
		moon.style.display = "none";
		sun.style.display = "block";
	}

	else {
		sun.style.display = "none";
		moon.style.display = "block";
	}	
	
	localStorage.setItem("lastMode", mode);
}

document.querySelector("#toggleMode").addEventListener("click", ()=>{
	mode = document.body.className;
	
	if (mode === "lightMode"){
		document.body.className = "darkMode";
	}
	
	else if (mode === "darkMode"){
		document.body.className = "lightMode";
	}

	setIcon();
});
