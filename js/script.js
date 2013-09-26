var turn = 2;
function playIt(){
	if (event.target.className != 'played') {
		if (turn % 2 == 0) {
			event.target.innerHTML = "<a>X</a>";
			event.target.classList.add('played');
		}
		else {
			event.target.innerHTML = "<a>O</a>";
			event.target.classList.add('played');
		}
		turn++;
	}
	else {
		console.log('Choose somewhere else, punk');
	}
}



for(c=1;c<=3;++c)
	for(r=1;r<=3;++r)
		alert(
			document.getElementById("cell"+r+"_"+c).innerHTML);