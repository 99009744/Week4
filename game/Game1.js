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
							alert ("Deze heb je zeker nodig hoe ga je anders je pc op het stroom aansluiten!")
							answer = prompt("Wil je een gpu in je pc? \n ja of nee")
							if (answer == "ja"){
								alert ("Deze gaat wel nodig zijn als je wilt gamen!")
								answer = prompt("Wil je koeling voor je cpu in je pc? \n ja of nee")
								if (answer == "ja"){
									alert ("Deze heb je zeker nodig want die zorgt er voor dat je cpu niet over verhit raakt!")
									answer = prompt("Wil je een behuizing voor je pc?\n ja of nee")
									if (answer =="ja"){
										alert ("Ja deze heb je nodig hier kun je natuurlijk al je componenten in bouwen!")
										alert ("Zo! je pc werkt nu, alleen nog even externe componenten er bij nemen")
										answer = prompt("Wil je er een toetsenbord bij?\n ja of nee")
										if (answer=="ja"){
											alert ("Deze heb je zeker nodig ander kun je niet typen.")
											answer = prompt("Wil je er een muis bij? \n ja of nee")
											if (answer=="ja"){
												alert ("Dit maakt het gebruiken van je pc wel een stuk makkelijk ja!")
												answer = prompt ("Wil je er een monitor bij?\n ja of nee")
												if (answer=="ja"){
													alert ("Natuurlijk ander kun je je beeld niet zien!")
													alert ("Zo we zijn klaar! je pc werkt naar behoren, goed gedaan!")

												}
												else{
													alert("Zonder monitor kun je niet zien wat er gebeurd op je pc!")
												}

											}
											else{
												alert("Zonder word het erg moeilijk om je pc te besturen.")
											}
										}
										else{
											alert ("Hoe wil je gaan typen zonder toetsenbord! Dat word wel erg lastig.")
										}
									}
									else{
										alert ("Waar ga je al je componenten in stoppen?")
									}
								}
								else{
									alert ("Zonder gaat je pc oververhit raken en dat wil je niet!")
								}

							}
							else{
								alert ("Zonder gpu gaan je games niet fijn lopen, deze is wel hard nodig!")
							}
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