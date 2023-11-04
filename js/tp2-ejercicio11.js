/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor.*/

const nombrePrimero = prompt(`Escriba su nombre`);
const edadPrimero = parseInt(prompt(`Indique su edad para ${nombrePrimero}`));

const nombreSegundo = prompt(`Escriba su nombre`);
const edadSegundo = parseInt(prompt(`Indique su edad para ${nombreSegundo}`));

const nombreTercero = prompt(`Escriba su nombre`);
const edadTercero = parseInt(prompt(`Indique su edad para ${nombreTercero}`));

if (isNaN(edadPrimero) || isNaN(edadSegundo) || isNaN(edadTercero)) {
  alert(`Escriba un valor válido`);
} else {
  if (edadPrimero > edadSegundo && edadPrimero > edadTercero) {
    document.write(`${nombrePrimero} (${edadPrimero} años) es mayor.`);
  } else if (edadSegundo > edadPrimero && edadSegundo > edadTercero) {
    document.write(`${nombreSegundo} (${edadSegundo} años) es mayor.`);
  } else if (edadTercero > edadPrimero && edadTercero > edadSegundo) {
    document.write(`${nombreTercero} (${edadTercero} años) es mayor.`);
  } else {
    document.write(
      `Las edades de ${nombrePrimero}, ${nombreSegundo}, ${nombreTercero} son iguales.`
    );
  }
}
