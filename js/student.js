class Estudiantes {
  constructor(nombre, apellido, dni, comision) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.comision = comision;
  }
  aprobar() {
    console.log('Genial! Aprobé el curso!');
  }
  desaprobar() {
    console.log('No pude aprobar, que tristeza.');
  }
}

let estudiante1 = new Estudiantes('Juan', 'Perez', 21456923, 1);
let estudiante2 = new Estudiantes('Pepe', 'Grillo', 33548962, 2);
let estudiante3 = new Estudiantes('Juan Carlos', 'Orzuelo', 27563123, 3);
let estudiante4 = new Estudiantes('Milena', 'Grido', 11548963, 1);
let estudiante5 = new Estudiantes('Sofía', 'Corriente', 41852357, 2);
let estudiante6 = new Estudiantes('Carla', 'Poten', 68312548, 3);
const containerStudent = document.getElementById('container_student');
const boton = document.getElementById('boton');
let contenedor = document.createElement('div');
const estudiantesArray = [estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6];
let aux;
let aux2;
let aux3;
for (const estudiante of estudiantesArray) {
  let contenedor = document.createElement('div');
  contenedor.innerHTML = `<p> <strong>Nombre: </strong> ${estudiante.nombre}</p>
                                  <p> <strong>Apellido: </strong> ${estudiante.apellido}</p>
                                  <p> <strong>DNI: </strong> ${estudiante.dni}</p>
                                  <p> <strong>Comisión: </strong> ${estudiante.comision}</p>`;
  containerStudent.appendChild(contenedor);
}

function agregarALista() {
  contenedor.innerHTML = `
        <p> <strong>Nombre: </strong>  ${aux2.nombre}</p>
        <p><strong>Apellido: </strong>: ${aux2.apellido}</p>
        <p><strong>DNI: </strong> ${aux2.dni}</p>
        <p><strong>Comisión: </strong> ${aux2.comision}</p>
    `;
  containerStudent.appendChild(contenedor);
}

boton.addEventListener('click', () => {
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let dni = document.getElementById('dni').value;
  let comision = document.getElementById('comision').value;
  aux2 = new Estudiantes(nombre, apellido, dni, comision);
  aux3 = JSON.stringify(aux2);
  localStorage.setItem('Estudiante', aux3);
  agregarALista();
});

let aux4 = localStorage.getItem('Estudiante');
aux = JSON.parse(aux4);

contenedor = document.createElement('div');
contenedor.innerHTML = `<p> <strong>Nombre: </strong> ${aux.nombre}</p>
                                  <p> <strong>Apellido: </strong> ${aux.apellido}</p>
                                  <p> <strong>DNI: </strong> ${aux.dni}</p>
                                  <p> <strong>Comisión: </strong> ${aux.comision}</p>`;
containerStudent.appendChild(contenedor);
