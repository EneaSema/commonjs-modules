/*  1 - names.js
Crea una funzione che accetta due parametri: firstName, lastName.
La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
*/

const createPerson = function personObject(firstName, lastName) {
  return { firstName, lastName };
};

module.exports = { createPerson };

/* console.log(personObject("Enea", "Sema"));*/
