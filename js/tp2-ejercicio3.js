/* 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let textoEnCadena = "";

do {
  let texto = prompt("Ingrese su texto");
  textoEnCadena += "-" + texto;
} while (confirm("Desea ingresar mas texto"));

document.write(`<h3>${textoEnCadena}</h3>`);
