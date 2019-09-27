
	// uitleg
	// 1x een var aan maken

	var answer =prompt ("je staat op het strand wat wil je doen. ga naar het bos of g de zee in \n kies 1 of 2")
	alert (answer)
	if(answer == 1){
		alert("je bent nu in het bos")
		answer prompt ("Je ziet een huisje in de verte wat wil je doen? ga naar binnen of ga verder het bos in \n kies 1 of 2")
		if (answer == 1){
			alert ("je gaat naar binnen")
			answer = prompt("Je ziet een luik en een deur waar ga je naar binnen? \n kies 1 of 2")}
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


