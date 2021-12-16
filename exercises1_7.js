// Escribe un programa que escriba en la pantalla un texto que diga “Hello World”.

alert ("Hello World!");

//Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write(3+5);

//Escribe un programa que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

let nombre = prompt("Escribe tu nombre");
document.write("Hola "+nombre);

//Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
document.write("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let n1 = prompt("Escribe un numero");
let n2 = prompt("Escribe otro numero");

if (n1 > n2) {
document.write(n1);
} else {
document.write(n2);
}

//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let n1 = prompt("Escribe un número");
let n2 = prompt("Escribe otro número");
let n3 = prompt("Escribe otro número");
if (n1 > n2 && n1 > n3) {
document.write(n1);
} else if (n2 > n3) {
document.write(n2);
} else {
document.write(n3);
}

//Escribe un programa que pida un número y diga si es divisible por 2

let x = prompt("Escribe un número");
if (x % 2 === 0) {
document.write("Es divisible por 2");
} else {
document.write("No es divisible por 2");
}


