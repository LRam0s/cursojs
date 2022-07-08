class Monster {
  constructor(name, hp, atk, def, spd) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spd = spd;
  }
  atack() {
    console.log(
      this.name + " ha atacado y ha realizado " + this.atk + " puntos de daño."
    );
  }
  flee() {
    console.log(this.name + " ha huido del combate.");
  }
}

let ogre = new Monster("Ogro", 300, 45, 70, 30);
let imp = new Monster("Duende", 80, 15, 10, 10);
let dragon = new Monster("Dragon", 450, 90, 85, 80);
let centaur = new Monster("Centauro", 150, 30, 42, 50);
let manticore = new Monster("Mantícora", 230, 60, 40, 60);

const monsterArray = [ogre, imp, dragon, centaur];
monsterArray.push(manticore);

const monsterDetail = [ogre, imp, dragon, centaur, manticore];

let monsterName = monsterArray.map((item) => item.name);

function monsterList() {
  let index = 0;
  for (x in monsterName) {
    console.log(x + " " + monsterName[index]);
    index++;
  }
}

function choice(choice) {
  if (choice == 0) {
    alert(
      "Has elegido combatir contra " +
        ogre.name +
        " HP: " +
        ogre.hp +
        " ATK: " +
        ogre.atk +
        " DEF: " +
        ogre.def +
        " SPD: " +
        ogre.spd
    );
  } else if (choice == 1) {
    alert(
      "Has elegido combatir contra " +
        imp.name +
        " HP: " +
        imp.hp +
        " ATK: " +
        imp.atk +
        " DEF: " +
        imp.def +
        " SPD: " +
        imp.spd
    );
  } else if (choice == 2) {
    alert(
      "Has elegido combatir contra " +
        dragon.name +
        " HP: " +
        dragon.hp +
        " ATK: " +
        dragon.atk +
        " DEF: " +
        dragon.def +
        " SPD: " +
        dragon.spd
    );
  } else if (choice == 3) {
    alert(
      "Has elegido combatir contra " +
        centaur.name +
        " HP: " +
        centaur.hp +
        " ATK: " +
        centaur.atk +
        " DEF: " +
        centaur.def +
        " SPD: " +
        centaur.spd
    );
  } else if (choice == 4) {
    alert(
      "Has elegido combatir contra " +
        manticore.name +
        " HP: " +
        manticore.hp +
        " ATK: " +
        manticore.atk +
        " DEF: " +
        manticore.def +
        " SPD: " +
        manticore.spd
    );
  } else {
    alert("Selecciona una opción valida");
  }
}

monsterList();
choice(
  parseInt(
    prompt("Elige el número de monstruo contra el que quieres combatir: ")
  )
);
