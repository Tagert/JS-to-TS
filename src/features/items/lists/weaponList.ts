import { Item } from "../Item";

const stick = new Item({
  name: "Stick",
  level: 1,
  durability: 10,
  power: 5,
  type: "Weapon",
  price: 14,
});

const dagger = new Item({
  name: "Dagger",
  level: 2,
  durability: 60,
  power: 30,
  type: "Weapon",
  price: 42,
});

const mace = new Item({
  name: "Mace",
  level: 5,
  durability: 100,
  power: 50,
  type: "Weapon",
  price: 70,
});

const axe = new Item({
  name: "Axe",
  level: 7,
  durability: 160,
  power: 80,
  type: "Weapon",
  price: 112,
});

const sword = new Item({
  name: "Sword",
  level: 10,
  durability: 220,
  power: 110,
  type: "Weapon",
  price: 140,
});

export const weaponList: Item[] = [stick, dagger, mace, axe, sword];
