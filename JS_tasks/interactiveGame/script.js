const btnAttack = document.querySelector(".btn-attack");
const btnHeal = document.querySelector(".btn-heal");
const btnAttackMonster = document.querySelector(".btn-attack-monster");
const messagePlayer = document.getElementById("message-player");
const messageMonster = document.getElementById("message-monster");
const messageMonsterMed = document.getElementById("message-monster-medicine");
const playerHealthElem = document.getElementById("player-health");
const monsterHealthElem = document.getElementById("monster-health");

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.items = [];
  }
  attack(target) {
    let damage = Math.floor(Math.random() * this.strength) + 1;
    target.health -= damage;
    if (target.health < 0) target.health = 0;
    playerHealthElem.innerHTML = player.health;
    monsterHealthElem.innerHTML = monster.health;
    let msg = `${this.name} атакує ${target.name} і завдає ${damage} шкоди.`;
    if (target.health === 0) {
      msg += ` ${target.name} переможений!`;
    } else {
      msg += ` ${target.name} має ${target.health} здоров'я.`;
    }
    return msg;
  }
  useItem(index, target) {
    const item = this.items[index];
    if (item) {
      item.activate(this, target);
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
  activate(player, target) {
    if (this.type === "weapon") {
      target.health -= this.effect;
      console.log(
        `${player.name} використовує ${this.name} і завдає додатковий урон ${this.effect}.`
      );
    } else if (this.type === "shield" || this.type === "magic-item") {
      player.health += this.effect;
      console.log(
        `${player.name} використовує ${this.name} і відновлює ${this.effect} здоров'я.`
      );
    }
    playerHealthElem.innerHTML = player.health;
    monsterHealthElem.innerHTML = target.health;
  }
}

class Player extends Character {
  constructor(name, health, strength, medicine) {
    super(name, health, strength);
    this.medicine = medicine;
  }
  heal(amount) {
    if (this.medicine > 0) {
      this.health += amount;
      this.medicine--;
      playerHealthElem.innerHTML = this.health;
      return `${this.name} лікується на ${amount} одиниць. Залишилось ліків: ${this.medicine}`;
    } else {
      return "Ліків немає";
    }
  }
}

class Monster extends Character {
  constructor(name, health, strength, attackPower) {
    super(name, health, strength);
    this.attackPower = attackPower;
  }
  attack(target) {
    let damage = this.attackPower + Math.floor(Math.random() * 5);
    target.health -= damage;
    if (target.health < 0) target.health = 0;
    playerHealthElem.innerHTML = target.health;
    let msg = `${this.name} атакує ${target.name} і завдає ${damage} шкоди.`;
    if (target.health === 0) {
      msg += ` ${target.name} переможений!`;
    }
    return msg;
  }
}

const sword = new Item("Меч світла", "weapon", 20);
const shieldItem = new Item("Щит древніх", "shield", 30);
const potion = new Item("Зілля відновлення", "magic-item", 50);

const player = new Player("Player-1", 100, 20, 3);
player.items.push(sword);

const monster = new Monster("Orc", 100, 15, 5);
const monsters = [
  new Monster("Goblin", 100, 10, 3),
  new Monster("Dragon", 150, 25, 8),
  new Monster("Orc", 100, 15, 5)
];

function selectWeapon() {
  const weaponSelect = document.getElementById("weaponSelect");
  const selectedOption = weaponSelect.options[weaponSelect.selectedIndex];
  const weaponName = selectedOption.getAttribute("data-name");
  const damage = parseInt(selectedOption.value);
  return `Ви обрали зброю ${weaponName}, що завдає ${damage} шкоди`;
}

btnAttack.addEventListener("click", (e) => {
  e.preventDefault();
  let msg = player.attack(monster);
  messagePlayer.innerHTML = msg;
  if (player.items.length > 0) {
    player.useItem(0, monster);
  }
});

btnAttackMonster.addEventListener("click", (e) => {
  e.preventDefault();
  let msg = monster.attack(player);
  messageMonsterMed.innerHTML = msg;
});

btnHeal.addEventListener("click", (e) => {
  e.preventDefault();
  let msg = player.heal(20);
  messagePlayer.innerHTML = msg;
});

console.log(selectWeapon());
