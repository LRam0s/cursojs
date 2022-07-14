/* JS de la página Calificaciones */

let primerParcial;
let segundoParcial;
let asistencia;
let condicion;
const boton = document.getElementById('boton');
let contenedor2 = document.createElement('div');
const containerRatings = document.getElementById('container_ratings');

function condicionAlumno(primerParcial, segundoParcial, asistencia) {
  if (primerParcial >= 4 && primerParcial <= 10 && segundoParcial >= 4 && segundoParcial <= 10 && asistencia >= 30 * 0.8 && asistencia <= 30) {
    condicion = `Aprobado <br>
    Felicitaciones! Has aprobado el curso!`;
  } else if (primerParcial < 4 && primerParcial <= 10 && segundoParcial >= 4 && segundoParcial <= 10 && asistencia >= 30 * 0.8 && asistencia <= 30) {
    condicion = `Condicional <br>
    Para poder aprobar el curso deberas recuperar el Primer Parcial.`;
  } else if (primerParcial < 4 && primerParcial <= 10 && segundoParcial >= 4 && segundoParcial <= 10 && asistencia < 30 * 0.8 && asistencia <= 30) {
    condicion = `Reprobado <br>
    No has asistido al 80% de las clases ni tampoco aprobado el Primer Parcial, deberás volver a tomar el curso.`;
  } else if (primerParcial >= 4 && primerParcial <= 10 && segundoParcial < 4 && segundoParcial <= 10 && asistencia >= 30 * 0.8 && asistencia <= 30) {
    condicion = `Condicional <br>
    Para poder aprobar el curso deberas recuperar el Segundo Parcial.`;
  } else if (primerParcial >= 4 && primerParcial <= 10 && segundoParcial < 4 && segundoParcial <= 10 && asistencia < 30 * 0.8 && asistencia <= 30) {
    condicion = `Reprobado <br>
    No has asistido al 80% de las clases ni tampoco aprobado el Segundo Parcial, deberás volver a tomar el curso.`;
  } else if (primerParcial >= 4 && primerParcial <= 10 && segundoParcial >= 4 && segundoParcial <= 10 && asistencia < 30 * 0.8 && asistencia <= 30) {
    condicion = `Reprobado <br>
    Has cumplimentado con la nota de los parciales pero no has asistido al 80% de las clases. Por lo tanto, deberás volver a recursar.`;
  } else if (primerParcial <= 4 && primerParcial <= 10 && segundoParcial <= 4 && segundoParcial <= 10 && asistencia < 30 * 0.8 && asistencia <= 30) {
    condicion = `Reprobado <br>
    No has cumplido con ninguna de las condiciones del curso. Por lo tanto, deberás recursar el mismo.`;
  } else {
    condicion = 'Ingresa un valor válido por favor';
  }
  return condicion;
}

boton.addEventListener('click', () => {
  let nota1 = document.getElementById('nota1').value;
  let nota2 = document.getElementById('nota2').value;
  let asistencia = document.getElementById('asistencia').value;
  condicionAlumno(nota1, nota2, asistencia);

  contenedor2.innerHTML = `
        <p><strong>Nota de primer parcial: </strong>  ${nota1}</p>
        <p><strong>Nota de segundo parcial: </strong>: ${nota2}</p>
        <p><strong>Asistencias: </strong> ${asistencia}</p>
        <p><strong>Condición final: </strong> ${condicion}</p>
    `;
  containerRatings.appendChild(contenedor2);
});
