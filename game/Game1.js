// uitleg
	// 1x een var aan maken

	var answer =prompt ("Welkom in mijn game, je gaat een game pc maken, wil je door gaan? \n kies ja of nee")
	if(answer == "ja"){
		alert("Oke dan gaan we nu beginnen!")
		moederboord = prompt ("Wil je een moederboord in je pc? \n kies ja of nee")
		if (moederboord == "ja"){
			alert ("Natuurlijk hierop verbind je alle componenten!")
			cpu = prompt ("Wil je een cpu in je pc? \n kies ja of nee")
			if (cpu == "ja"){
				alert ("Deze heb je inderdaad nodig dit is een basis component!")
				ram = prompt ("Wil je ram geheugen in je pc? \n kies ja of nee")
				if (ram == "ja"){
					alert ("Deze zijn ook erg belangrijk voor je game pc!")
					gigabyte = (prompt ("Hoeveel gigabyte ram geheugen wil je er in hebben? \n geef aan hoeveel gigabite je wilt"))
					if (Number(gigabyte) >7){
						alert ("Goed bezig! 8 gigabyte is het minimale voor een goede game pc!")
						voeding = prompt("Wil je een voeding in je pc? \n kies ja of nee")
						if (voeding == "ja"){
							alert ("Deze heb je zeker nodig hoe ga je anders je pc op het stroom aansluiten!")
							gpu = prompt("Wil je een gpu in je pc? \n ja of nee")
							if (gpu == "ja"){
								alert ("Deze gaat wel nodig zijn als je wilt gamen!")
								koeling = prompt("Wil je koeling voor je cpu in je pc? \n ja of nee")
								if (koeling == "ja"){
									alert ("Deze heb je zeker nodig want die zorgt er voor dat je cpu niet over verhit raakt!")
									behuizing = prompt("Wil je een behuizing voor je pc?\n ja of nee")
									if (behuizing =="ja"){
										alert ("Ja deze heb je nodig hier kun je natuurlijk al je componenten in bouwen!")
										alert ("Zo! je pc werkt nu, alleen nog even externe componenten er bij nemen")
										toetsenbord = prompt("Wil je er een toetsenbord bij?\n ja of nee")
										if (toetsenbord=="ja"){
											alert ("Deze heb je zeker nodig ander kun je niet typen.")
											muis = prompt("Wil je er een muis bij? \n ja of nee")
											if (muis=="ja"){
												alert ("Dit maakt het gebruiken van je pc wel een stuk makkelijk ja!")
												monitor = prompt ("Wil je er een monitor bij?\n ja of nee")
												if (monitor=="ja"){
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
	document.write ("Wil je er een moederboord bij?"+" "+moederboord+"<br>")
	document.write ("Wil je er een cpu bij?"+" "+cpu+"<br>")
	document.write ("Wil je er een ram bij?"+" "+ram+"<br>")
	document.write ("Hoeveel gigabyte?"+" "+gigabyte+"gigabyte"+"<br>")
	document.write ("Wil je er een voeding bij?"+" "+voeding+"<br>")
	document.write ("Wil je er een gpu bij?"+" "+gpu+"<br>")
	document.write ("Wil je er een koeling bij?"+" "+koeling+"<br>")
	document.write ("Wil je er een behuizing bij?"+" "+behuizing+"<br>")
	document.write ("Wil je er een toetsenbord bij?"+" "+toetsenbord+"<br>")
	document.write ("Wil je er een muis bij?"+" "+muis+"<br>")
	document.write ("Wil je er een monitor bij?"+" "+monitor+"<br>")
