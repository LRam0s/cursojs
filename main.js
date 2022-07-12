/* condicionales y simulador de condicion de alumnx */

let primerParcial;
let segundoParcial;
let asistencia;
let condicion;
let loop = true;

function condicionAlumno(primerParcial, segundoParcial, asistencia) {
  while (loop) {
    if (
      primerParcial >= 4 &&
      primerParcial <= 10 &&
      segundoParcial >= 4 &&
      segundoParcial <= 10 &&
      asistencia >= 30 * 0.8 &&
      asistencia <= 30
    ) {
      alert("Felicitaciones! Has aprobado el curso!");
      loop = false;
      condicion = "Aprobado";
    } else if (
      primerParcial < 4 &&
      primerParcial <= 10 &&
      segundoParcial >= 4 &&
      segundoParcial <= 10 &&
      asistencia >= 30 * 0.8 &&
      asistencia <= 30
    ) {
      alert("Para poder aprobar el curso deberas recuperar el Primer Parcial.");
      loop = false;
      condicion = "Condicional";
    } else if (
      primerParcial < 4 &&
      primerParcial <= 10 &&
      segundoParcial >= 4 &&
      segundoParcial <= 10 &&
      asistencia < 30 * 0.8 &&
      asistencia <= 30
    ) {
      alert(
        "No has asistido al 80% de las clases ni tampoco aprobado el Primer Parcial, deberás volver a tomar el curso."
      );
      loop = false;
      condicion = "Reprobado";
    } else if (
      primerParcial >= 4 &&
      primerParcial <= 10 &&
      segundoParcial < 4 &&
      segundoParcial <= 10 &&
      asistencia >= 30 * 0.8 &&
      asistencia <= 30
    ) {
      alert(
        "Para poder aprobar el curso deberas recuperar el Segundo Parcial."
      );
      loop = false;
      condicion = "Condicional";
    } else if (
      primerParcial >= 4 &&
      primerParcial <= 10 &&
      segundoParcial < 4 &&
      segundoParcial <= 10 &&
      asistencia < 30 * 0.8 &&
      asistencia <= 30
    ) {
      alert(
        "No has asistido al 80% de las clases ni tampoco aprobado el Segundo Parcial, deberás volver a tomar el curso."
      );
      loop = false;
      condicion = "Reprobado";
    } else if (
      primerParcial >= 4 &&
      primerParcial <= 10 &&
      segundoParcial >= 4 &&
      segundoParcial <= 10 &&
      asistencia < 30 * 0.8 &&
      asistencia <= 30
    ) {
      alert(
        "Has cumplimentado con la nota de los parciales pero no has asistido al 80% de las clases. Por lo tanto, deberás volver a recursar."
      );
      loop = false;
      condicion = "Reprobado";
    } else {
      alert("Ingresa un valor válido por favor.");
      loop = false;
      condicion =
        "Hasta que no ingreses valores válidos no vamos a poder indicarte tu condición.";
    }
  }
  return condicion;
}

setTimeout(() => {
  alert(
    "Para aprobar este curso es necesario tener nota mayor a 7 en los dos parciales, ademas tener el 80% asistencia de las 30 clases dictadas."
  );
  let condicionFinal = condicionAlumno(
    parseInt(prompt("Ingresa la nota que te sacaste en el Primer Parcial: ")),
    parseInt(prompt("Ingresa la nota que te sacaste en el Segundo Parcial: ")),
    parseInt(prompt("Ingresa la cantidad de clases a la que has asistido: "))
  );

  alert("Tu condición como alumnx es: " + condicionFinal);
}, 5000);

/* Objetos de estudiantes con array */

class Estudiantes {
  constructor(nombre, apellido, dni, comision) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.comision = comision;
  }
  aprobar() {
    console.log("Genial! Aprobé el curso!");
  }
  desaprobar() {
    console.log("No pude aprobar, que tristeza.");
  }
}

let estudiante1 = new Estudiantes("Juan", "Perez", 21456923, 1);
let estudiante2 = new Estudiantes("Pepe", "Grillo", 33548962, 2);
let estudiante3 = new Estudiantes("Juan Carlos", "Orzuelo", 27563123, 3);
let estudiante4 = new Estudiantes("Milena", "Grido", 11548963, 1);
let estudiante5 = new Estudiantes("Sofía", "Corriente", 41852357, 2);
let estudiante6 = new Estudiantes("Carla", "Poten", 68312548, 3);

const estudiantesArray = [
  estudiante1,
  estudiante2,
  estudiante3,
  estudiante4,
  estudiante5,
];
estudiantesArray.push(estudiante6);

let apellidoEstudiantes = estudiantesArray.map((item) => item.apellido);

function listaEstudiantes() {
  let index = 0;
  for (x in apellidoEstudiantes) {
    console.log(x + " " + apellidoEstudiantes[index]);
    index++;
  }
}

listaEstudiantes();
