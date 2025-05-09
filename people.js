/* 
3 - people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri.
La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. */

const { createPerson } = require("./names.js");
const { createHobbies } = require("./hobbies.js");

const createUser = function personUser() {
  createPerson("Enea", "Sema");
  createHobbies("Latino americano", "Donne", "Video");
  return {
    fullName: createPerson("Enea", "Sema"),
    hobbies: createHobbies("Latino americano", "Donne", "Video"),
  };
};

createUser();

console.log(createUser());
