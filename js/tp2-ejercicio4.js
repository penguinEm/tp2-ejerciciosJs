/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos. */

let resultado = 0;

do {
  let numero = parseFloat(prompt("Ingrese un número"));
  if (isNaN(numero)) {
    alert("Ingrese un valor numerico válido");
  } else {
    resultado = resultado + numero;
  }
} while (confirm("¿Desea ingresar mas numeros?"));

document.write(`<h3>Sumaste un total de: ${resultado}</h3>`);
