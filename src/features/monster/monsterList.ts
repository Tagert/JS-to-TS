import { Monster } from "./Monster";

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

export const monsterList: Monster[] = [slime, fangedBeast, dragon];

export const currentMonster = new Monster({
  name: "Active Monster",
  level: 0,
  health: 0,
  maxHealth: 0,
  type: "Common",
  fighting: 0,
  monsterHealth: 0,
});
