/* 8- crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
1
12
123
1234
12345
123456 */

let filas = parseInt(prompt(`Ingrese un número, que no sea mayor a 50`));

/* for (filas; filas < 51 ; filas++) {
  document.write(`<p>hola mundo ${filas}</p>`)
} */

if (isNaN(filas) || filas > 50 || filas < 0) {
  document.write(`Ingrese un valor válido entre 1 y 50`);
} else {
  //bucle
  while (filas <= 50) {
    document.write(`<p>`);
    let columnas = 1;
    while (columnas <= filas) {
      document.write(columnas);
      columnas++;
    }
    document.write(`<p>`);
    filas++;
  }
}


