import { Item } from "../Item";

const lesserStaminaPotion = new Item({
  name: "Lesser Stamina Potion",
  level: 1,
  durability: 5,
  power: 5,
  type: "Stamina potion",
  price: 12,
});

const StaminaPotion = new Item({
  name: "Stamina Potion",
  level: 1,
  durability: 10,
  power: 10,
  type: "Stamina potion",
  price: 28,
});

const greaterStaminaPotion = new Item({
  name: "Greater Stamina Potion",
  level: 1,
  durability: 20,
  power: 20,
  type: "Stamina potion",
  price: 68,
});

const superStaminaPotion = new Item({
  name: "Greater Stamina Potion",
  level: 1,
  durability: 40,
  power: 40,
  type: "Stamina potion",
  price: 144,
});

export const staminaPotionList: Item[] = [
  lesserStaminaPotion,
  StaminaPotion,
  greaterStaminaPotion,
  superStaminaPotion,
];
