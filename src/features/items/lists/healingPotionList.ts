import { Item } from "../Item";

const lesserHealingPotion = new Item({
  name: "Lesser Healing Potion",
  level: 1,
  durability: 15,
  power: 15,
  type: "Health potion",
  price: 12,
});

const healingPotion = new Item({
  name: "Healing Potion",
  level: 1,
  durability: 35,
  power: 35,
  type: "Health potion",
  price: 28,
});

const greaterHealingPotion = new Item({
  name: "Greater Healing Potion",
  level: 1,
  durability: 85,
  power: 85,
  type: "Health potion",
  price: 68,
});

const superHealingPotion = new Item({
  name: "Greater Healing Potion",
  level: 1,
  durability: 180,
  power: 180,
  type: "Health potion",
  price: 144,
});

export const healingPotionList: Item[] = [
  lesserHealingPotion,
  healingPotion,
  greaterHealingPotion,
  superHealingPotion,
];
