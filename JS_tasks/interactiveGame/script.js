const btnAttack = document.querySelector(".btn-attack");
const messageMonster = document.getElementById("message-monster");
const messagePlayer = document.getElementById("message-player");
const playerHealth = document.getElementById("player-health");
const monsterHealth = document.getElementById("monster-health");
const btnAttackMonster = document.querySelector(".btn-attack-monster");
const messageMonsterMed = document.getElementById("message-monster-medicine");
class Character {
  constructor(name, health, strength, medicine) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.medicine = medicine;
    this.items = [];
  }
  attack() {
    let damage = Math.floor(Math.random() * this.strength) + 1;
    monster.health -= damage;
    let playerAttack = `${this.name} атакує ${monster.name}, завдаючи ${damage} шкоди.`;
    let messageAttack;
    if (monster.health <= 0) {
      monster.health = 0;
      monsterHealth.innerHTML = 0;
      messageAttack = `${monster.name} переможений`;
    } else {
      messageAttack = `${monster.name} має ${monster.medicine} ліків`;
    }
    return { first: playerAttack, second: messageAttack };
  }
  useItem(index) {
    const item = this.items[index];
    if (item) {
      console.log(`${this.name} використовує ${item.name}`);
      item.activate(this, monster);
      this.items.splice(index, 1);
    } else {
      console.log("Предмет не знайдено!");
    }
  }
}

class Item {
  constructor(name, type, effect) {
    this.name = name;
    this.type = type;
    this.effect = effect;
  }
  activate(player, monster) {
    if (this.type === "weapon") {
      let extraDamage = this.effect;
      monster.health -= extraDamage;
      console.log(
        `${player.name} використовує ${this.name} і завдає додатковий урон ${this.effect}!`
      );
    } else if (this.type === "shield") {
      player.health += this.effect;
      console.log(
        `${player.name} використовує ${this.name} і збільшує захист на ${this.effect}!`
      );
    } else if (this.type === "magic-item") {
      player.health += this.effect;
      console.log(
        `${player.name} використовує ${this.name} і відновлює ${this.effect} здоров'я!`
      );
    }

    playerHealth.innerHTML = player.health;
    monsterHealth.innerHTML = monster.health;
  }
}

const sword = new Item("Меч світла", "weapon", 20);
const shield = new Item("Щит древніх", "shield", 30);
const potion = new Item("Зілля відновлення", "magic-item", 50);

const player = new Character("player-1", 100, 20, 10);
const monster = new Character("monster", 100, 15, 10);

let monsters = [
  new Character("Goblin", 100, 25, 25),
  new Character("Dragon", 100, 34, 35),
  new Character("Orc", 100, 27, 28),
];

player.items.push(sword);

btnAttack.addEventListener("click", (e) => {
  e.preventDefault();
  const values = player.attack(monster);
  messagePlayer.innerHTML = values.first;
  messageMonster.innerHTML = values.second;

  if (player.items.length > 0) {
    player.useItem(0);
  }
});

class Monster {
  constructor(type, health, attackPower) {
    this.type = type;
    this.health = health;
    this.attackPower = attackPower;
  }
  attack(monsters) {
    let damage = this.attackPower + Math.floor(Math.random() * 5);
    damage = Math.round(damage);
    monsters.forEach((monster) => {
      monster.health -= damage;
      console.log(monster);
      messageMonsterMed.innerHTML = `${this.type} атакує ${player.name}, завдаючи ${damage} шкоди.`;
    });
  }
}
// const monster0 = new Monster("Dragon", 150, 100);
// console.log(monster0.attack());

btnAttackMonster.addEventListener("click", (e) => {
  e.preventDefault();
  monsters.forEach((monster) => {
    if (monster.health > 0) {
      messageMonsterMed.innerHTML = `${monster.name} атакує ${player.name}!`;
    }
    monster.attack(player);
  });
});
