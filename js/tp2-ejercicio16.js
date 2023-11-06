/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

const texto = prompt(`Ingrese el texto que desea invertir`);
let textoEnArray = texto.split("");
textoEnArray = textoEnArray.reverse();
textoAlreves = textoEnArray.join("");

document.write (textoAlreves)
