import { MonsterType, MonsterRarity } from "./monster.type";

export class Monster {
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  type: MonsterRarity;
  fighting?: number;
  monsterHealth?: number;

  constructor({
    name,
    level,
    health,
    maxHealth,
    type,
    fighting = 0,
    monsterHealth = 0,
  }: MonsterType) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.maxHealth = maxHealth;
    this.type = type;
    this.fighting = fighting;
    this.monsterHealth = monsterHealth;
  }
}
