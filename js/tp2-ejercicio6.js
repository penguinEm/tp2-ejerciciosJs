/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
....... */

for (let indiceFilas = 1; indiceFilas <= 30; indiceFilas++) {
  document.write(`<p>`);
  for (let num = 1; num <= indiceFilas; num++) {
    document.write(indiceFilas);
  }
  document.write(`</p>`);
}