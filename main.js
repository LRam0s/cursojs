/* Ejercicio con for */

for (let i = 1; i <= 10; i++) {
  let table = 2;
  let resultado = i * table;
  console.log(i + "x" + table + " = " + resultado);
}

/* Ejercicio con while */

let nivel = 2;
let exp = 100;

while (nivel <= 5) {
  console.log("Te has encontrado un monstruo!");
  console.log("Decides atacarlo");
  let expUp = exp;
  exp *= 2;
  console.log("Lo venciste! Ganaste " + expUp + "xp");
  let levelUp = nivel++;
  console.log("Subiste a nivel " + levelUp);
}

/* Ejercicio con do while */

let level = 6;
let xp = 1500;
do {
  console.log("Te has encontrado un monstruo!");
  console.log("Decides atacarlo");
  let expUp = xp;
  xp *= 2;
  console.log("Lo venciste! Ganaste " + expUp + "xp");
  let levelUp = level++;
  console.log("Subiste a nivel " + levelUp);
} while (nivel <= 5);
