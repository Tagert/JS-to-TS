import * as gameVariables from "./utils/dom/variables/variables.ts";

import { Location } from "./features/location/Location.ts";
// import { Player } from "./features/player/Player.ts";
import { Monster } from "./features/monster/Monster.ts";
import { weaponList } from "./features/items/lists/weaponList.ts";

let health: number = 100;
let maxHealth: number = 100;
let stamina: number = 50;
let maxStamina: number = 50;
let level: number = 1;
let xp: number = 0;
let gold: number = 50;
let currentWeapon: number = 0;
// action variables
let fighting: number;
let monsterHealth: number;
let inventory: string[] = ["stick"];

const slime = new Monster({
  name: "Slime",
  level: 2,
  health: 15,
  maxHealth: 15,
  type: "Common",
});

const fangedBeast = new Monster({
  name: "Fanged Beast",
  level: 8,
  health: 60,
  maxHealth: 60,
  type: "Common",
});

const dragon = new Monster({
  name: "Dragon",
  level: 20,
  health: 300,
  maxHealth: 300,
  type: "Common",
});

const monsterList: Monster[] = [slime, fangedBeast, dragon];

// const currentMonster = new Monster({
//   name: "Active Monster",
//   level: 0,
//   health: 0,
//   maxHealth: 0,
//   type: "Common",
//   fighting: 0,
//   monsterHealth: 0,
// });

// const player = new Player({
//   health: 100,
//   maxHealth: 100,
//   stamina: 50,
//   maxStamina: 50,
//   level: 1,
//   xp: 0,
//   gold: 50,
//   inventory: ["Stick"],
//   currentWeapon: 0,
// });

const update = (location: Location): void => {
  gameVariables.monsterStats.style.display = "none";
  gameVariables.button1.innerText = location.buttonText[0];
  gameVariables.button2.innerText = location.buttonText[1];
  gameVariables.button3.innerText = location.buttonText[2];
  gameVariables.button4.innerText = location.buttonText[3];
  gameVariables.button5.innerText = location.buttonText[4];
  gameVariables.button6.innerText = location.buttonText[5];

  gameVariables.button1.onclick = location.buttonFunction[0];
  gameVariables.button2.onclick = location.buttonFunction[1];
  gameVariables.button3.onclick = location.buttonFunction[2];
  gameVariables.button4.onclick = location.buttonFunction[3];
  gameVariables.button5.onclick = location.buttonFunction[4];
  gameVariables.button6.onclick = location.buttonFunction[5];

  gameVariables.text.innerText = location.text;

  // if (location.name === "store") {
  //   text.innerText += "\nAvailable items in the shop:\n";
  //   shopItems.forEach((item, index) => {
  //     text.innerText += `${index + 1}. ${item.name} - ${item.price} gold\n`;
  //   });
};

const goTown = (): void => {
  const townSquare = locationList.find((location) => location.name === "Town Square");

  if (townSquare) {
    update(townSquare);
    gameVariables.squareImage.style.display = "block";
    gameVariables.tavernImage.style.display = "none";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
};

const goMarket = (): void => {
  const marketPlace = locationList.find((location) => location.name === "Marketplace");

  if (marketPlace) {
    update(marketPlace);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "block";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
};

const goAlchemy = (): void => {
  const alchemy = locationList.find((location) => location.name === "Alchemy Shop");

  if (alchemy) {
    update(alchemy);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "block";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
};

const goArmory = (): void => {
  const armory = locationList.find((location) => location.name === "Armory Shop");

  if (armory) {
    update(armory);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "block";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
};

const goExplore = (): void => {
  const explore = locationList.find((location) => location.name === "Explore the Ancient Forest");

  if (explore) {
    update(explore);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "none";
    gameVariables.exploreImage.style.display = "block";
    gameVariables.fightingImage.style.display = "none";
  }
};

const goFight = (enemyIndex: number): void => {
  const fight = locationList.find((location) => location.name === "Fight UI");

  if (fight) {
    update(fight);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "none";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "block";
  }

  const monsterNameNotModified = monsterList[enemyIndex].name;

  const FirstLetterMonsterName = monsterNameNotModified.charAt(0).toUpperCase();
  const remainingLetters = monsterNameNotModified.slice(1);
  const fullMonsterName = FirstLetterMonsterName + remainingLetters;
  monsterHealth = monsterList[enemyIndex].health;
  gameVariables.monsterStats.style.display = "flex";
  gameVariables.monsterName.innerText = fullMonsterName;
  gameVariables.monsterHealthText.innerText = monsterList[enemyIndex].health.toString();
  gameVariables.maxMonsterHealth.innerText = monsterList[enemyIndex].health.toString();
  gameVariables.monsterLevelText.innerText = monsterList[enemyIndex].level.toString();
};

const restoreHealth = () => {
  if (gold >= 10) {
    if (health < maxHealth) {
      if (maxHealth - health < 10 && maxHealth - health !== 10) {
        health += maxHealth - health;
        gameVariables.healthText.innerText = health.toString();
      } else {
        health += 10;
        gameVariables.healthText.innerText = health.toString();
        gold -= 10;
        gameVariables.goldText.innerText = gold.toString();
      }
    } else {
      gameVariables.text.innerText = "Your health is already maxed out!";
    }
  } else {
    gameVariables.text.innerText = "You do not have enough gold to buy health.";
  }
  checkHealth();
};

const restoreStamina = () => {
  if (gold >= 10) {
    if (stamina < maxStamina) {
      if (maxStamina - stamina < 10 && maxStamina - stamina !== 10) {
        stamina += maxStamina - stamina;
        gameVariables.staminaText.innerText = stamina.toString();
      } else {
        stamina += 10;
        gameVariables.staminaText.innerText = stamina.toString();
        gold -= 10;
        gameVariables.goldText.innerText = gold.toString();
      }
    } else {
      gameVariables.text.innerText = "Your Stamina already maxed out!";
    }
  } else {
    gameVariables.text.innerText = "You do not have enough gold to buy Stamina.";
  }
  checkStamina();
};

const buyWeapon = () => {
  if (currentWeapon < weaponList.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      gameVariables.goldText.innerText = gold.toString();
      const newWeapon = weaponList[currentWeapon].name;
      gameVariables.text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      gameVariables.text.innerText += " In your inventory you have: " + inventory;
    } else {
      gameVariables.text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    gameVariables.text.innerText = "You already have the most powerful weapon!";
    gameVariables.button2.innerText = "Sell weapon for 15 gold";
    gameVariables.button2.onclick = sellWeapon;
  }
};

const sellWeapon = () => {
  if (inventory.length > 1) {
    gold += 15;
    gameVariables.goldText.innerText = gold.toString();
    const currentWeapon = inventory.shift();
    gameVariables.text.innerText = "You sold a " + currentWeapon + ".";
    gameVariables.text.innerText += " In your inventory you have: " + inventory;
  } else {
    gameVariables.text.innerText = "Don't sell your only weapon!";
  }
};

const fightSlime = (): void => {
  fighting = 0;
  goFight(fighting);
};

const fightBeast = (): void => {
  fighting = 1;
  goFight(fighting);
};

const fightDragon = (): void => {
  fighting = 2;
  goFight(fighting);
};

const attack = (): void => {
  gameVariables.text.innerText = "The " + monsterList[fighting].name + " attacks.";
  gameVariables.text.innerText +=
    " You attack it with your " + weaponList[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsterList[fighting].level);
  stamina -= getMonsterStaminaConsumptionValue(monsterList[fighting].level);

  if (isMonsterHit()) {
    monsterHealth -= weaponList[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    gameVariables.text.innerText += " You miss.";
  }

  gameVariables.healthText.innerText = health.toString();
  gameVariables.monsterHealthText.innerText = monsterHealth.toString();
  gameVariables.staminaText.innerText = stamina.toString();

  if (health <= 0) {
    fightLose();
  } else if (monsterHealth <= 0) {
    fighting === 2 ? fightVictory() : defeatedMonster();
  }
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    gameVariables.text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }

  checkHealth();
  checkStamina();
};

const getMonsterAttackValue = (level: number): number => {
  const hit: number = level * 5 - Math.floor(Math.random() * xp);
  return hit > 0 ? hit : 0;
};

const getMonsterStaminaConsumptionValue = (level: number): number => {
  const hit: number = level * 2 - Math.floor(Math.random() * xp);
  return hit > 0 ? hit : 0;
};

const isMonsterHit = (): boolean => {
  return Math.random() > 0.2 || health < 20;
};

const dodge = () => {
  gameVariables.text.innerText =
    "You dodge the attack from the " + monsterList[fighting].name + ".";
};

const defeatedMonster = (): void => {
  gold += Math.floor(monsterList[fighting].level * 6.7);
  xp += monsterList[fighting].level;
  gameVariables.goldText.innerText = gold.toString();
  gameVariables.xpText.innerText = xp.toString();
  levelUp();

  const defeated = locationList.find((location) => location.name === "Victory UI");

  if (defeated) {
    update(defeated);
  }
};

const levelUp = (): void => {
  if (xp >= level * 4 + 2) {
    level += 1;
    gameVariables.levelText.innerText = level.toString();

    maxHealth = Math.round(maxHealth * 1.2);
    health = maxHealth;
    gameVariables.healthText.innerText = health.toString();
    gameVariables.maxHealthText.innerText = maxHealth.toString();

    maxStamina = Math.round(maxStamina * 1.3);
    stamina = maxStamina;
    gameVariables.staminaText.innerText = stamina.toString();
    gameVariables.maxStaminaText.innerText = maxStamina.toString();
  }
};

const checkHealth = (): void => {
  const healthPercent: number = (health * 100) / maxHealth;
  gameVariables.healthBar.style.width = `${healthPercent}%`;
};

const checkStamina = (): void => {
  const staminaPercent: number = (stamina * 100) / maxStamina;
  gameVariables.staminaBar.style.width = `${staminaPercent}%`;
};

const fightVictory = (): void => {
  const victory = locationList.find((location) => location.name === "Victory UI");

  if (victory) {
    update(victory);
  }
};

const fightLose = (): void => {
  const lose = locationList.find((location) => location.name === "Lose UI");

  if (lose) {
    update(lose);
  }
};

const restart = () => {
  xp = 0;
  gameVariables.xpText.innerText = xp.toString();
  health = 100;
  maxHealth = 100;
  gameVariables.healthText.innerText = health.toString();
  gameVariables.maxHealthText.innerText = maxHealth.toString();
  stamina = 50;
  maxStamina = 50;
  gameVariables.staminaText.innerText = stamina.toString();
  gameVariables.maxStaminaText.innerText = maxStamina.toString();
  gold = 50;
  gameVariables.goldText.innerText = gold.toString();
  level = 1;
  gameVariables.levelText.innerText = level.toString();
  currentWeapon = 0;
  inventory = ["stick"];
  goTown();
  checkHealth();
  checkStamina();
};

const townSquareUI = new Location({
  name: "Town Square",
  buttonText: [
    "Training Arena",
    "Patrol Quest",
    "Explore the Ancient Forest",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [goMarket, goExplore, goTown],
  text: "Welcome to the heart of Alderbrook, the bustling town square! Cobblestone streets weave through the center, adorned with vibrant market stalls and lively chatter. An ancient oak tree, its branches reaching towards the sky, stands proudly at the square's core, casting a cool shade on the gathering locals.",
});

const MarketPlaceUI = new Location({
  name: "Marketplace",
  buttonText: [
    "Alchemy Shop",
    "Armory Shop",
    "Return to Alderbrook streets",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [goAlchemy, goArmory, goTown],
  text: "Market vendors peddle their wares, offering a colorful array of fruits, trinkets, and handcrafted goods. The aroma of freshly baked pastries and savory dishes wafts from a nearby tavern, enticing passersby with the promise of a delicious meal. The rhythmic clatter of hooves echoes as a few horse-drawn carriages traverse the square, transporting both goods and eager travelers.",
});

const alchemyShopUI = new Location({
  name: "Alchemy Shop",
  buttonText: [
    "Buy 10 health (10 gold)",
    "Buy 10 stamina (10 gold)",
    "Return to Alderbrook streets",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [restoreHealth, restoreStamina, goTown],
  text: "Welcome to \"Mystic Phial Alchemy,\" nestled within the heart of Alderbrook's winding streets. As you step through the door, you're greeted by the heady scent of herbs and the soft glow of bubbling cauldrons. The shop is a treasure trove of mystical wonders, with shelves lined with glass phials containing potions of every hue and potency.",
});

const armoryShopUI = new Location({
  name: "Armory Shop",
  buttonText: [
    "Buy a weapon (30 gold)",
    "Sell a weapon",
    "Return to Alderbrook streets",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [buyWeapon, sellWeapon, goTown],
  text: 'Welcome to "Steelheart Armory," a bastion of strength and craftsmanship nestled amidst the lively streets of Alderbrook. As you step through the entrance, the air is thick with the scent of oiled leather and the clang of metal on metal. Rows of gleaming weapons and polished armor adorn the walls, each piece a testament to the skill of the blacksmiths who forged them.',
});

const exploreUI = new Location({
  name: "Explore the Ancient Forest",
  buttonText: [
    "Fight Slime",
    "Fight Fanged Beast",
    "Return to Alderbrook streets",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [fightSlime, fightBeast, goTown],
  text: "The path ahead winds its way through gnarled roots and twisted vines, beckoning you deeper into the heart of this mystical realm. Every step brings you closer to the secrets that lie hidden within the ancient trees, their whispered tales echoing through the rustling leaves.",
});

const fightUI = new Location({
  name: "Fight UI",
  buttonText: [
    "Attack",
    "Dodge",
    "Run",
    "Lumina Haven Market Place",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [attack, dodge, goTown],
  text: "You are fighting a monster.",
});

const fightVictoryUI = new Location({
  name: "Victory UI",
  buttonText: [
    "Return to Alderbrook",
    "Fight again! Another!",
    "Mystery box",
    "Lumina Haven Market Place",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [goTown, fightSlime, goTown],
  text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
});

const loseUI = new Location({
  name: "Lose UI",
  buttonText: [
    "REPLAY?",
    "REPLAY?",
    "REPLAY?",
    "Lumina Haven Market Place",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [restart, restart, restart],
  text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
});

const locationList: Location[] = [
  townSquareUI,
  MarketPlaceUI,
  alchemyShopUI,
  armoryShopUI,
  exploreUI,
  fightUI,
  fightVictoryUI,
  loseUI,
];

// gameVariables.button1.addEventListener("click", goMarket);
// gameVariables.button2.addEventListener("click", goExplore);
// gameVariables.button3.addEventListener("click", goTown);

gameVariables.button1.onclick = goMarket;
gameVariables.button2.onclick = goExplore;
gameVariables.button3.onclick = goTown;
