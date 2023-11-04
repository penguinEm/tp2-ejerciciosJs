/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
.....
333
22
1 */

let altura = parseInt(prompt(`Ingrese un número no mayor a 50`));
console.log(altura)

for (altura; altura >= 1; altura--) {
  if (isNaN(altura) || altura > 50) {
    alert("Ingrese un número válido");
    altura = parseInt(prompt(`Ingrese un número no mayor a 50`));
  } else {
    document.write(` <p>`);
    for (let i = 1; i <= altura; i++) {
      document.write(altura);
    }
    document.write(` </p>`);
  }
}

// no me funciona el if cuando en la primera condicion :c