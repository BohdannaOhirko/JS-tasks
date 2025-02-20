// Крок 1: Визначення основних об'єктів гри
// Гравець (Player) – об'єкт з властивостями: ім'я, здоров'я, сила, ліки.

// Монстр (Monster) – об'єкт з властивостями: вид, здоров'я, сила.

// Предмет (Item) – об'єкт з властивостями: назва, тип (зброя, ліки), ефект.

class Character {
  constructor(name, health, strength, medicine) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.medicine = medicine;
  }
  attack() {
    let damage = Math.floor(Math.random() * this.strength) + 1; // Випадковий урон
    monster.health -= damage; // Зменшуємо здоров'я
    console.log(
      `${this.name} атакує ${monster.name}, завдаючи ${damage} шкоди.`
    );
    if (monster.health <= 0) {
      monster.health = 0;
      console.log(`${monster.name} переможений`);
    } else {
      console.log(`${monster.name} має ${monster.medicine} ліків`);
    }
  }
}

const player = new Character("player-1", 100, 20, 10);
const monster = new Character("monster", 100, 15, 10);
player.attack(player);

class Monster {
  constructor(type, health, strength) {
    this.type = type;
    this.health = health;
    this.strength = strength;
  }
}
const monsterTruck = new Monster("monster-1", 100, 90);

class Item {
  constructor(name, type, effect) {
    this.name = name;
    this.type = type;
    this.effect = effect;
  }
}
