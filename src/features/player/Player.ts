import { PlayerType } from "./player.type";

export class Player {
  health: number;
  maxHealth: number;
  stamina: number;
  maxStamina: number;
  level: number;
  xp: number;
  gold: number;
  inventory: string[];
  currentWeapon: number;

  constructor({
    health,
    maxHealth,
    stamina,
    maxStamina,
    level,
    xp,
    gold,
    inventory,
    currentWeapon,
  }: PlayerType) {
    this.health = health;
    this.maxHealth = maxHealth;
    this.stamina = stamina;
    this.maxStamina = maxStamina;
    this.level = level;
    this.xp = xp;
    this.gold = gold;
    this.inventory = inventory;
    this.currentWeapon = currentWeapon;
  }
}
