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

  getHealth(): number {
    return this.health;
  }

  setHealth(health: PlayerType["health"]): number | undefined {
    if (!health) {
      return;
    }

    this.health = health;
  }
}

export const player = new Player({
  health: 100,
  maxHealth: 100,
  stamina: 50,
  maxStamina: 50,
  level: 1,
  xp: 0,
  gold: 50,
  inventory: ["Stick"],
  currentWeapon: 0,
});
