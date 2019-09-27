// uitleg
	// 1x een var aan maken

	var answer =prompt ("Welkom in mijn game, je gaat een game pc maken, wil je door gaan? \n kies ja of nee")
	if(answer == "ja"){
		alert("Oke dan gaan we nu beginnen!")
		answer = prompt ("Wil je een moederboord in je pc? \n kies ja of nee")
		if (answer == "ja"){
			alert ("Natuurlijk hierop verbind je alle componenten!")
			answer = prompt ("Wil je een cpu in je pc? \n kies ja of nee")
			if (answer == "ja"){
				alert ("Deze heb je inderdaad nodig dit is een basis component!")
				answer = prompt ("Wil je ram geheugen in je pc? \n kies ja of nee")
				if (answer == "ja"){
					alert ("Deze zijn ook erg belangrijk voor je game pc!")
					answer = prompt ("Hoeveel gigabite ram geheugen wil je er in hebben? \n geef aan hoeveel gigabite je wilt")
					if (answer >7){
						alert ("Goed bezig! 8 gigabite is het minimale voor een goede game pc!")
						answer = prompt("Wil je een voeding in je pc? \n kies ja of nee")
						if (answer == "ja"){
							alert ("Ja deze heb je zeker nodig hoe sluit je anders je pc aan op het stroom!")
							answer = prompt ("Wil je een GPU in je pc? \n kies ja of nee")
							if (answer == "ja")
								alert ("Deze is wel erg belangrijk in je game pc anders draaien je games niet zo fijn!")

						}
						else {
							alert ("Hoe ga je je pc anders aansluiten op het stroom!")
						}

					}
					else { 
					alert ("Helaas 8 gigabite is het minimale voor een game pc!")
					}

				}
				else {
					alert ("Zonder ram geheugen gaat je pc niet werken dit is een belangrijk component!")
				}

			}
			else {
				alert ("Dan gaat je pc niet werken! waar sluit je anders al je componenten op aan!")
			}
		}
		else {
			alert  ("Helaas zonder gaat je pc niet werken, waar sluit je anders al je componenten op aan!")
		}



	}

	else if(answer == "nee"){
		alert("Jammer maar dan kunnen we niet verder!")
	}
	else {
		alert ("je moet wel kiezen tussen ja of nee")
	}