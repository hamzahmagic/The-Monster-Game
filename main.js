function play() {
	var choice1 = prompt("OK! LET'S PLAY! FIGHT,PAY, OR RUN?").toUpperCase();

	if (choice1 === "FIGHT") {
		var choice2 = prompt("Are you strong?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("You beat the monster!");
		} else {
			var choice3 = prompt("Are you smart?","Yes or No").toUpperCase();
			if(choice3 === "YES") {
		      alert("I guess that'll do! You beat the monster - nice work!");
		    } else {
		      alert("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a monster. You lose!");
		    }
		}

	} else if (choice1 == "PAY") {
		var choice2 = prompt("Are you rich?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("Well I guess you can afford 100€!");
		} else {
			alert("Too bad! It's human for dinner!")
		}
	} else if (choice1 == "RUN") {
		var choice2 = prompt("Are you fast?","Yes or No").toUpperCase();
		if (choice2 === "YES") {
			alert("Better get your running shoes on then!");
		} else {
			alert("This doesn't end well for you, tiny human!")
		}
	}
}

document.getElementById("play").onclick = play;