console.log('js-biglietto-treno')

//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//[alert (ciao utente!)]
//acquisizione dei dati
const userAge = parseInt(prompt ('inserisci la tua età'));
const km = parseInt(prompt("inserisci i km che vuoi percorrere"));

//costo biglietto
console.log (km * 0.21);



let = 'userAge'
if (userAge <= 18) {
    sconto = (km * 20) / 100;
} 

//biglietto scontato per gli over 65

else if (userAge >= 65) {
    sconto = (km * 40) / 100;
}


console.log (userAge)








