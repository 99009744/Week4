var welkom = parseInt(prompt("Welkom in mijn game, we gaan een game pc bouwen en je mag via ja en nee aangeven of je iets er in wilt of niet. wil je het spel spelen ja of nee."))
	if (welkom == "ja") { 
	var moederboord = parseInt(prompt("Wil je een moederboord in je pc? ja of nee"))
	var ram = parseInt(prompt("Wil je ram in je pc? ja of nee"))
	var voeding = parseInt(prompt("Wil je een voeding in je pc? ja of nee"))
	var cpu = parseInt(prompt("Wil je een cpu in je pc? ja of nee"))
	var gpu = parseInt(prompt("Wil je een gpu in je pc? ja of nee"))
	var koeling = parseInt(prompt("Wil je een koeling in je pc? ja of nee"))
	var behuizing = parseInt(prompt("Wil je een behuizing voor je pc? ja of nee"))
	var besturingssyteem = parseInt(prompt("Wil je nog een besturingssyteem op je pc hebben? ja of nee"))
	var overig = parseInt(prompt("Mooi de pc zou nu moeten werken! wil je nog optianal components? ja of nee"))
	var toetsenbord = parseInt(prompt("Wil je een toetsenbord voor je pc? ja of nee"))
	var muis = parseInt(prompt("Wil je een muis voor je pc? ja of nee"))
	var monitor = parseInt(prompt("Wil je een monitor voor je pc? ja of nee"))

	}
	else if (welkom == "nee") { 
	var welkom = parseInt(prompt("Jammer, wil je opnieuw?"))

	}
	document.write ("Wil je een moederboord in je pc?" + moederboord)



	// uitleg
	// 1x een var aan maken

	var answer =prompt ("je staat op het strand wat wil je doen. ga naar het bos of g de zee in \n kies 1 of 2")
	alert (answer)
	if(answer == 1){
		alert("je bent nu in het bos")
		answer prompt ("Je ziet een huisje in de verte wat wil je doen? ga naar binnen of ga verder het bos in \n kies 1 of 2")
		if (answer == 1){
			alert ("je gaat naar binnen")
			answer = prompt("Je ziet een luik en een deur waar ga je naar binnen? \n kies 1 of 2")
			if (answer ==1){
				alert ("luik")

			}
			else {("je loopt door de deur, en word aangevallen door de hond.")

		}
		else{
			alert ("je gaat verder het bos in en verhongerd")
		}
	}

	else if(answer == 2){
		alert("Je zwemt de zee in en verdrinkt.")
	}
	else {
		alert ("je moet wel een getal kiezen tussen 1 of 2")
	}


