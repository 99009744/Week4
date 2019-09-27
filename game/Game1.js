// uitleg
	// 1x een var aan maken

	var answer =prompt ("je staat op het strand wat wil je doen. ga naar het bos of ga de zee in \n kies ja of nee")
	if(answer == "ja"){
		alert("je bent nu in het bos")
		answer = prompt ("Je ziet een huisje ga je er in of loop je verder het bos is? \n kies 1 of 2")
		if (answer == 1){
			alert ("Je gaat naar binnen in het huisje")
			answer = prompt ("Je zien een luik en een deur waar ga je naar binnen? \n kies 1 of 2")
			if (answer == 1){
				alert ("Je gaat door het luik heen")
				answer = prompt ("")
			}
			else {
				alert ("Je word aagevallen door de hond.")
			}
		}
		else {
			alert  ("je verhongerd in het bos")
		}



	}

	else if(answer == "nee"){
		alert("Je zwemt de zee in en verdrinkt.")
	}
	else {
		alert ("je moet wel kiezen tussen ja of nee")
	}