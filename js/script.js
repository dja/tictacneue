var turn = 1;
var playedCells = 0;
var alreadyWon = false;

function playBall(numPlayr){
	turn = numPlayr;
	toggleDisplay('start');
}

if (typeof window.DeviceMotionEvent != 'undefined') {
    // Shake sensitivity (a lower number is more)
    var sensitivity = 50;

    // Position variables
    var x1 = 0, y1 = 0, z1 = 0, x2 = 0, y2 = 0, z2 = 0;

    // Listen to motion events and update the position
    window.addEventListener('devicemotion', function (e) {
        x1 = e.accelerationIncludingGravity.x;
        y1 = e.accelerationIncludingGravity.y;
        z1 = e.accelerationIncludingGravity.z;
    }, false);

    // Periodically check the position and fire
    // if the change is greater than the sensitivity
    setInterval(function () {
        var change = Math.abs(x1-x2+y1-y2+z1-z2);

        if (change > sensitivity) {
            var shakeGame = confirm("Do you want to start a new game?");
			if (shakeGame == true){
				window.location.reload();
			}
        }

        // Update new position
        x2 = x1;
        y2 = y1;
        z2 = z1;
    }, 150);
}

function playIt(){
	if (alreadyWon == false && event.target.className.split(" ")[3] != "played") {
		if (turn % 2 != 0) {
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
			toggleDisplay('end');
			toggleDisplay('win');
			toggleVisibility('playagainbtn');
			alreadyWon = true;
		}
		else if(cellArray[x][0] == cellArray[x][1] && cellArray[x][1] == cellArray[x][2] && cellArray[x][0] != "&nbsp;"){
			toggleDisplay('end');
			toggleDisplay('win');
			toggleVisibility('playagainbtn');
			alreadyWon = true;
		}
	}
	if(cellArray[0][0] == cellArray[1][1] && cellArray[1][1] == cellArray[2][2] && cellArray[0][0] != "&nbsp;" ){
		toggleDisplay('end');
		toggleDisplay('win');
		toggleVisibility('playagainbtn');
		alreadyWon = true;
	}
	else if(cellArray[2][0] == cellArray[1][1] && cellArray[1][1] == cellArray[0][2] && cellArray[2][0] != "&nbsp;" ){
		toggleDisplay('end');
		toggleDisplay('win');
		toggleVisibility('playagainbtn');
		alreadyWon = true;
	}
	else if(playedCells == 9 && alreadyWon != true){
		toggleDisplay('oxgame');
		toggleVisibility('playagainbtn');
	}
}

// function switchVisibility(id1, id2){
// 	document.getElementById(id1).style.visibility = 'hidden';
// 	document.getElementById(id2).style.visibility = 'visible';
// }

function toggleVisibility(id){
	var vis = document.getElementById(id).style.visibility;
	if( vis == 'visible'){
		document.getElementById(id).style.visibility = 'hidden';
	}
	else {
		document.getElementById(id).style.visibility = 'visible';
	}
}
function switchDisplay(id1, id2){
	document.getElementById(id1).style.display = 'none';
	document.getElementById(id2).style.display = 'inherit';
}
function toggleDisplay(id){
	var dis = document.getElementById(id).style.display;
	if( dis != 'none'){
		document.getElementById(id).style.display = 'none';
	}
	else {
		document.getElementById(id).style.display = 'inherit';
	}
}

function EvalSound(soundobj){
	var thissound=document.getElementById(soundobj);
	thissound.play(); 
	setTimeout( function() { window.location.reload(); }, 1600);
}




