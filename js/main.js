/* condicionales y simulador de condicion de alumnx */

let primerParcial;
let segundoParcial;
let asistencia;
let condicion;
let loop = true;

function condicionAlumno(primerParcial, segundoParcial, asistencia) {
  while (loop) {
    if (primerParcial >= 4 && primerParcial <= 10 && segundoParcial >= 4 && segundoParcial <= 10 && asistencia >= 30 * 0.8 && asistencia <= 30) {
      alert('Felicitaciones! Has aprobado el curso!');
      loop = false;
      condicion = 'Aprobado';
    } else if (primerParcial < 4 && primerParcial <= 10 && segundoParcial >= 4 && segundoParcial <= 10 && asistencia >= 30 * 0.8 && asistencia <= 30) {
      alert('Para poder aprobar el curso deberas recuperar el Primer Parcial.');
      loop = false;
      condicion = 'Condicional';
    } else if (primerParcial < 4 && primerParcial <= 10 && segundoParcial >= 4 && segundoParcial <= 10 && asistencia < 30 * 0.8 && asistencia <= 30) {
      alert('No has asistido al 80% de las clases ni tampoco aprobado el Primer Parcial, deberás volver a tomar el curso.');
      loop = false;
      condicion = 'Reprobado';
    } else if (primerParcial >= 4 && primerParcial <= 10 && segundoParcial < 4 && segundoParcial <= 10 && asistencia >= 30 * 0.8 && asistencia <= 30) {
      alert('Para poder aprobar el curso deberas recuperar el Segundo Parcial.');
      loop = false;
      condicion = 'Condicional';
    } else if (primerParcial >= 4 && primerParcial <= 10 && segundoParcial < 4 && segundoParcial <= 10 && asistencia < 30 * 0.8 && asistencia <= 30) {
      alert('No has asistido al 80% de las clases ni tampoco aprobado el Segundo Parcial, deberás volver a tomar el curso.');
      loop = false;
      condicion = 'Reprobado';
    } else if (primerParcial >= 4 && primerParcial <= 10 && segundoParcial >= 4 && segundoParcial <= 10 && asistencia < 30 * 0.8 && asistencia <= 30) {
      alert('Has cumplimentado con la nota de los parciales pero no has asistido al 80% de las clases. Por lo tanto, deberás volver a recursar.');
      loop = false;
      condicion = 'Reprobado';
    } else {
      alert('Ingresa un valor válido por favor.');
      loop = false;
      condicion = 'Hasta que no ingreses valores válidos no vamos a poder indicarte tu condición.';
    }
  }
  return condicion;
}

setTimeout(() => {
  alert('Para aprobar este curso es necesario tener nota mayor a 7 en los dos parciales, ademas tener el 80% asistencia de las 30 clases dictadas.');
  let condicionFinal = condicionAlumno(
    parseInt(prompt('Ingresa la nota que te sacaste en el Primer Parcial: ')),
    parseInt(prompt('Ingresa la nota que te sacaste en el Segundo Parcial: ')),
    parseInt(prompt('Ingresa la cantidad de clases a la que has asistido: '))
  );

  alert('Tu condición como alumnx es: ' + condicionFinal);
}, 5000);

/* Objetos de estudiantes con array */
