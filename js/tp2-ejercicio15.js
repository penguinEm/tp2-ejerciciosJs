/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

let texto = prompt(`Ingrese su texto`);
texto = texto.toLowerCase();
const textoArray = texto.split("");
let numeroDeVocales = 0;

for (let i = 0; i < textoArray.length; i++) {
  if (
    textoArray[i] === "a" ||
    textoArray[i] === "e" ||
    textoArray[i] === "i" ||
    textoArray[i] === "o" ||
    textoArray[i] === "u" ||
    textoArray[i] === "á" ||
    textoArray[i] === "é" ||
    textoArray[i] === "í" ||
    textoArray[i] === "ó" ||
    textoArray[i] === "ú"
  ) {
    numeroDeVocales = numeroDeVocales + 1;
  }
}
document.write(
  `<h3>El texto ingresado "${texto}" contiene ${numeroDeVocales} vocales</h3>`
);
