/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

const texto = prompt(`Ingrese su texto`);
const textoEnArray = texto.split("");
let recorrerArray = 0;


while (recorrerArray < textoEnArray.length -1) {
  document.write(textoEnArray[recorrerArray] + "-");
  console.log(textoEnArray[recorrerArray] + "-");

  recorrerArray++;
} document.write (textoEnArray.pop())

//No pude solucinar de manera correcta para sacar el - de la ultima posición del array, por eso fuera del bucle hice un .pop para que no lo muestre.