// CHIEDO UNA PAROLA ALL'UTENTE

  var palindrom = prompt("Inserisci una Parola")
// CONTROLLO SE è PALINDROMA
  function checkPalindromo(parola) {
 	j = parola.length - 1;
 	var check;
 	for (var i = 0; i <= j ; i++) {
 		if (!(parola[i] == parola [j])){
 			check =  false;
 			return false;
 		} else {
 			j--;
 			check = true;
 		}
 	}
 	return check;
 }
 // STAMPO IL RISULTATO
 console.log("La parola da te inserita è palindroma? " + checkPalindromo(palindrom));
// CHIEDO IN UN CICLO FOR PARI O DISPARI
for (var i = 0; i < 1; i++) {

  var oddeven = prompt("Inserisci la tua scelta: Pari o Dispari?");
  console.log(oddeven);

  if (oddeven == "Pari") {
    var oddevenpari = oddeven
  }
  else if (oddeven == "Dispari"){
    var oddevendispari = oddeven
  }
  else {
    alert("INSERISCI O PARI O DISPARI")
  }

}
// FINE
// CHIEDO UN NUMERO DA 1 A 5
for (var i = 0; i < 1; i++) {
  var numero = parseInt(prompt("Inserisci un numero da 1 a 5"));
  console.log(numero);
  if (numero>5) {
    alert("INSERISCI UN NUMERO FINO A 5")
    break;
  }
}
//CONTROLLO COSA SONO I RISULTATI(PARI O DISPARI)

for (var i = 0; i < 1; i++) {
  var numerorandom = parseInt(Math.floor(Math.random() * 5) + 1);
  console.log(numerorandom);
  var risultato = parseInt(numero + numerorandom )
  console.log(risultato);

// SE IL RISULTATO è PARI E COINCIDE COL PROMPT
  if(risultato % 2 == 0) {
    var pari = (risultato % 2 == 0)
    console.log("Il risultato è Pari.");
    if (oddevenpari){
      console.log("Hai vinto")
    }
    else {
      console.log("Hai perso")
    }

  }


// SE IL RISULTATO è DISPARI E COINCIDE COL PROMPT
  if (risultato % 2 != 0){
    var dispari = (risultato % 2 != 0)
    console.log("il risultato è Dispari.");
     if(oddevendispari) {
      console.log("Hai vinto")

    }
    else {
      console.log("Hai perso")
    }
    }


}
