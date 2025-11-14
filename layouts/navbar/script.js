console.log("I am working...");

const menu = document.querySelector("#hamburger");
const header = document.querySelector("header");
const cross = document.querySelector("#cross");
const button = document.querySelector("button");

menu.addEventListener("click", ()=>{
	menu.style.display = "none";
	header.style.transform = "translateX(0)";
	button.style.opacity = "0";
	cross.style.display = "flex";
});

cross.addEventListener("click", ()=>{
	cross.style.display = "none";
	header.style.transform = "translateX(-1000px)";
	menu.style.display = "flex";
	button.style.opacity = "1";
});

// Modes Changing & Local Storage

let cName = ["lightMode"];
document.body.className = cName[0];

let turn = [0];

function changeMode(){
	let modes = ["dark", "red", "blue", "green", "light"];
	n = turn[0];

	if (n < modes.length){
		turn[0] += 1;
	}

	else {
		n = 0;
		turn[0] = 0;
	}

	cName[0] = `${modes[n]}Mode`;
}

button.addEventListener("click", ()=>{
	changeMode();
	document.body.className = cName[0];
	localStorage.setItem("lastMode", cName[0]);
});

let lastMode = localStorage.getItem("lastMode");
document.body.className = lastMode;
