import * as gameVariables from "../../dom/variables/variables.ts";
import { player } from "../../../features/player/Player.ts";

export const levelUp = (): void => {
  if (player.xp >= player.level * 4 + 2) {
    player.level += 1;
    gameVariables.levelText.innerText = player.level.toString();

    player.maxHealth = Math.round(player.maxHealth * 1.2);
    player.health = player.maxHealth;
    gameVariables.healthText.innerText = player.health.toString();
    gameVariables.maxHealthText.innerText = player.maxHealth.toString();

    player.maxStamina = Math.round(player.maxStamina * 1.3);
    player.stamina = player.maxStamina;
    gameVariables.staminaText.innerText = player.stamina.toString();
    gameVariables.maxStaminaText.innerText = player.maxStamina.toString();
  }
};
