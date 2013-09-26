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


function navCells(){
	var cellArray = [ [null, null, null], [null, null, null], [null, null, null] ];
	for(c=0;c<=2;++c){
		for(r=0;r<=2;++r){
			cellArray[c][r] = document.getElementById("cell"+c+"_"+r).innerHTML;
		}
	}
	for(x=0; x<=2; ++x){
		if(cellArray[0][x] == cellArray[1][x] && cellArray[1][x] == cellArray[2][x] && cellArray[0][x] != "<a class=\"placeholder\">.</a>"){
			alert(cellArray[0][x] + "WON!");
		}
		if(cellArray[x][0] == cellArray[x][1] && cellArray[x][1] == cellArray[x][2] && cellArray[x][0] != "<a class=\"placeholder\">.</a>"){
			alert(cellArray[x][0] + "WON!");
		}
	}
}