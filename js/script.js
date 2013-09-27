var turn = 2;
var playedCells = 0;
var alreadyWon = false;

function playIt(){
	if (alreadyWon == false && event.target.className.split(" ")[3] != "played") {
		if (turn % 2 == 0) {
			event.target.classList.add('played');
			playedCells++;
			event.target.innerHTML = "X";
		}
		else {
			event.target.classList.add('played');
			playedCells++;
			event.target.innerHTML = "O";
		}
		turn++;
		navCells();
	}
	else {
		console.log('Nice try, punk');
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
		if(cellArray[0][x] == cellArray[1][x] && cellArray[1][x] == cellArray[2][x] && cellArray[0][x] != "&nbsp;"){
			toggleVisibility('playagain');
			alreadyWon = true;
			alert(cellArray[0][x] + " WON!");
		}
		if(cellArray[x][0] == cellArray[x][1] && cellArray[x][1] == cellArray[x][2] && cellArray[x][0] != "&nbsp;"){
			toggleVisibility('playagain');
			alreadyWon = true;
			alert(cellArray[x][0] + " WON!");
		}
	}
	if(cellArray[0][0] == cellArray[1][1] && cellArray[1][1] == cellArray[2][2] && cellArray[0][0] != "&nbsp;" ){
		toggleVisibility('playagain');
		alreadyWon = true;
		alert(cellArray[0][0] + " WON!");
	}
	if(cellArray[2][0] == cellArray[1][1] && cellArray[1][1] == cellArray[0][2] && cellArray[2][0] != "&nbsp;" ){
		toggleVisibility('playagain');
		alreadyWon = true;
		alert(cellArray[2][0] + " WON!");
	}
	else if(playedCells == 9 && alreadyWon != true){
		toggleVisibility('playagain');
		alert("No one won.");
	}
}

function switchVisibility(id1, id2){
	document.getElementById(id1).style.visibility = 'hidden';
	document.getElementById(id2).style.visibility = 'visible';
}

function toggleVisibility(id){
	var vis = document.getElementById(id).style.visibility;
	if( vis == 'visible'){
		document.getElementById(id).style.visibility = 'hidden';
	}
	else {
		document.getElementById(id).style.visibility = 'hidden';
	}
}