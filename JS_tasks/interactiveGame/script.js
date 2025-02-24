// Крок 1: Визначення основних об'єктів гри
// Гравець (Player) – об'єкт з властивостями: ім'я, здоров'я, сила, ліки.

// Монстр (Monster) – об'єкт з властивостями: вид, здоров'я, сила.

// Предмет (Item) – об'єкт з властивостями: назва, тип (зброя, ліки), ефект.
const btnAttack = document.querySelector(".btn-attack");
const messageMonster = document.getElementById("message-monster");
const messagePlayer = document.getElementById("message-player");
const playerHealth = document.getElementById("player-health");
const monsterHealth = document.getElementById("monster-health");

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
    monster.health -= damage; // Зменшуємо здоров'я
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
player.useItems(item, 0);
btnAttack.addEventListener("click", (e) => {
  e.preventDefault();
  const values = player.attack();
  messagePlayer.innerHTML = values.first;
  messageMonster.innerHTML = values.second;
  player.useItems(potion);
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
  constructor(type, health, strength) {
    this.type = type;
    this.health = health;
    this.strength = strength;
  }
}
const monster1 = new Monster("monster-1", 100, 90);
