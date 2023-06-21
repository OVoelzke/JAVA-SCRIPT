//------ Mein erstes Programm

// console.clear();
// console.log("Das ist mein erstes Programm!");
// console.log("bla bla");

//------ Variablen
//------Arithmetische Operationen I
//------Arithmetische Operationen II

// console.clear();

// let name = "Oliver"
// let age = "41"

// let months = age * 12;
// let days = age * 365;
// let hours = days * 24;
// let minutes = hours * 60;
// let seconds = minutes * 60;

// console.log("Mein Name ist " + name + "-");
// console.log("Ich bin " + age + " Jahre alt");
// console.log("Ich  bin " + months + " Monate alt.");
// console.log("Ich  bin " + days + " Tage alt.");
// console.log("Ich  bin " + hours + " Stunden alt.");
// console.log("Ich  bin " + minutes + " Minuten alt.");
// console.log("Ich  bin " + seconds + " Sekunden alt.");

//------ Konstanten

// console.clear();

// const pi = 3.1415;

// let radius = 10;

// let umfang = pi * 2 * radius;

// console.log("Umfang ist", umfang);

//------ Primitive Datentypen

// console.clear();

// let name = " Oliver Völzke"; // String
// let age = 41; // number
// let isStudent = false; // boolean

// //------ Komplexe Datentypen

// let contact = {
//     firstName: "Oliver",
//     lastName: "Völzke",
//     age: 41,
//     isStudent: false
// };

// let contact2 = {
//     firstName: "Hans",
//     lastName: "Meyer",
//     age: 86,
//     isStudent: false
// };

// console.log(contact2.firstName + " " + contact2.lastName);

//------ Arrys

// console.clear();

// let notebook = ["Eier kaufen", "Mehl kaufen", "Putzen", "Sport machen"];

// let newnote = prompt();
// notebook.push(newnote);

// console.log(notebook[0]);
// console.log(notebook[1]);
// console.log(notebook[2]);
// console.log(notebook[3]);
// console.log(notebook[4]);
// console.log(notebook[5]);
// console.log(notebook[6]);

//------ Funktionen

// console.clear();

// let result = celsiusToFahrenheit(15);
// let result2 = celsiusToFahrenheit(30);

// console.log("15 Grad Celsius = " + result + "F");
// console.log("30 Grad Celsius = " + result2 + "F");

// function celsiusToFahrenheit(celsius) {
//     return celsius * (9 / 5) + 32;
// }

//------ Texteingabe (Promt)

// console.clear();

// let input = prompt("Bitte Grad Celsius eingeben!");

// let result = celsiusToFahrenheit(input);

// console.log(input + " Grad Celsius = " + result + "F");


// function celsiusToFahrenheit(celsius) {
//     return celsius * (9 / 5) + 32;
// }

//------ Verzweigungen

// console.clear();

// function whatCanIDO(age) {
//     if (age >= 15) {
//         console.log("Du darfst den Führerschein machen.");
//     }

//     if (age >= 16) {
//         console.log("Du darfst vielleicht schon wählen.");
//     }

//     if (age >= 18) {
//         console.log("Du bist volljährig.");
//     }
// }

// whatCanIDO(16);

// console.clear();

// function sayHello(name) {
//     if (name === "Oliver") {
//         console.log("Sei gegrüßt", name);
//     } else {
//         console.log("Hallo", name);
//     }
// }

// sayHello("Hans");

//------ For-Schleife

// console.clear();

// for (let i = 0; i < 9; i++) {
//     console.log("Hallo");
// }