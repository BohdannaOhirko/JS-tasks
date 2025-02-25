// Крок 1: Визначення основних об'єктів гри
// Гравець (Player) – об'єкт з властивостями: ім'я, здоров'я, сила, ліки.

// Монстр (Monster) – об'єкт з властивостями: вид, здоров'я, сила.

// Предмет (Item) – об'єкт з властивостями: назва, тип (зброя, ліки), ефект.
const btnAttackPlayer = document.querySelector(".btn-attack-player");
const messageMonster = document.getElementById("message-monster");
const messageMonsterMed = document.getElementById("message-monster-medicine");
const messagePlayer = document.getElementById("message-player");
const playerHealth = document.getElementById("player-health");
const monsterHealth = document.getElementById("monster-health");
const btnAttackMonster = document.querySelector(".btn-attack-monster");

class Character {
  constructor(name, health, strength, medicine) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.medicine = medicine;
    this.items = [];
  }
  attack() {
    let damage = Math.floor(Math.random() * this.strength) + 1; // Випадковий урон
    monster1.health -= damage; // Зменшуємо здоров'я
    let playerAttack = `${this.name} атакує ${monster1.type}, завдаючи ${damage} шкоди.`;
    let messageAttack;
    if (monster1.health <= 0) {
      monster1.health = 0;
      monsterHealth.innerHTML = 0;
      messageAttack = `${monster1.type} переможений`;
    } else {
      messageAttack = `${monster1.type} має ${this.medicine} ліків`;
    }
    return { first: playerAttack, second: messageAttack };
  }
  useItems(items, index) {
    if (items[index]) {
      const item = item[index];
      console.log(`${this.name} використовує ${item.name}`);

      if (this.items.includes(item)) {
        item.activate(this, monster);
        this.items = this.items.filter((i) => i !== item);
      } else {
        console.log("Предмет не знайдено!");
      }
    }
  }
}
const player = new Character("player-1", 100, 20, 10);
const monster = new Character("monster", 100, 15, 10);
// player.useItems(sword);
btnAttackPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  const values = player.attack(monster);
  messagePlayer.innerHTML = values.first;
  messageMonsterMed.innerHTML = values.second;
  // player.useItems(potion);
});

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
        `${player.name} використовує ${this.name} і збільшує атакувальну силу на  ${this.effect} %!`
      );
    } else if (this.type === "shield") {
      player.health += this.effect;
      console.log(
        `${player.name} використовує ${this.name} і збільшує захист на ${this.effect} %`
      );
    } else if (this.type === "magic-item") {
      player.energy += this.effect;
      console.log(
        `${player.name} використовує ${this.name} і відновлює ${this.effect} здоров'я!`
      );
    }
  }
}
const sword = new Item("Меч світла", "weapon", 20);
const shield = new Item("Щит древніх", "shield", 30);
const potion = new Item("Зілля відновлення", "magic-item", 50);
const items = [sword, shield, potion];

class Monster {
  constructor(type, health, attackPower) {
    this.type = type;
    this.health = health;
    this.attackPower = attackPower;
  }
  attack() {
    let damage = this.attackPower + Math.floor(Math.random() * 5);
    damage = Math.round(damage);
    monster.health -= damage;
    messageMonsterMed.innerHTML = `${this.type} атакує ${player.name}, завдаючи ${damage} шкоди.`;
  }
}

const monster1 = new Monster("dragon", 100, 50);
btnAttackMonster.addEventListener("click", (e) => {
  e.preventDefault();
  monster1.attack(player);
});
