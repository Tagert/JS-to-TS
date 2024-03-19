import { MonsterType, MonsterRarity } from "./monster.type";

export class Monster {
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  type: MonsterRarity;

  constructor({ name, level, health, maxHealth, type }: MonsterType) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.maxHealth = maxHealth;
    this.type = type;
  }
}
