var turn = 2;
function playIt(){
	if (event.target.className.split(" ")[3] != "played") {
		if (turn % 2 == 0) {
			event.target.classList.add('played');
			event.target.innerHTML = "X";
		}
		else {
			event.target.classList.add('played');
			event.target.innerHTML = "O";
		}
		turn++;
	}
	else {
		console.log('Choose somewhere else, punk');
	}
}

// function played() {
// 	if (event.target.getElementsByClassName('cell')){
// 		event.target.classList.add('played');
// 	}
// }



// for(c=1;c<=3;++c)
// 	for(r=1;r<=3;++r)
// 		alert(
// 			document.getElementById("cell"+r+"_"+c).innerHTML);