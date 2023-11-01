/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje. */

const edad = parseInt(prompt("Ingrese su edad"));

if (isNaN(edad)) {
  document.write("<h2>Ingrese una edad valida<h2>");
} else {
  if (edad >= 18) {
    document.write(
      `<h3>Puede conducir (${edad} años), usted es mayor de edad.</h3>`
    );
  } else {
    document.write(
      `<h2>Usted es menor de edad (${edad} años), no puede conducir.</h2>`
    );
  }
}
