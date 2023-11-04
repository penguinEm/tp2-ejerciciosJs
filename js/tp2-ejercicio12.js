/* Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
12- Realiza un script que genere un número aleatorio entre 1 y 99 */

if (confirm(`NUMERO ALEATORIO`)) {
  document.write(Math.round(Math.random() * 100));
} else if (!confirm(`Estas seguro?`)) {
  confirm(`NUMERO ALEATORIO`);
  document.write(Math.round(Math.random() * 100));
} else {
  document.write(`<h2> ( o.o ) </h2>`);
}
