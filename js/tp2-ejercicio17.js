/* 17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición
1 */

let texto = prompt(`Ingrese su texto`);
texto = texto.toLowerCase();

const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "u"];

let posicionDeLaVocal = -1;


for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i])) {
    posicionDeLaVocal = i;
    document.write(
      `<h3>Vocal (${texto[i]}) está en la posicion ${i}</h3>`
    );
    break;
  }
}
if (posicionDeLaVocal == -1)
document.write ("<h2>Su texto no contiene vocales</h2>")
