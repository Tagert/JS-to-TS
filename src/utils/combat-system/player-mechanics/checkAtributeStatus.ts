import * as gameVariables from "../../dom/variables/variables.ts";
import { player } from "../../../features/player/Player.ts";

export const checkHealth = (): void => {
  const healthPercent: number = (player.health * 100) / player.maxHealth;
  gameVariables.healthBar.style.width = `${healthPercent}%`;
};

export const checkStamina = (): void => {
  const staminaPercent: number = (player.stamina * 100) / player.maxStamina;
  gameVariables.staminaBar.style.width = `${staminaPercent}%`;
};
