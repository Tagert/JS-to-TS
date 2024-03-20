import * as gameVariables from "../dom/variables/variables.ts";
import { player } from "../../features/player/Player.ts";
import {
  checkHealth,
  checkStamina,
} from "../combat-system/player-mechanics/checkAtributeStatus.ts";

export const restoreHealth = () => {
  if (player.gold >= 10) {
    if (player.health < player.maxHealth) {
      if (player.maxHealth - player.health < 10 && player.maxHealth - player.health !== 10) {
        player.health += player.maxHealth - player.health;
        gameVariables.healthText.innerText = player.health.toString();
      } else {
        player.health += 10;
        gameVariables.healthText.innerText = player.health.toString();
        player.gold -= 10;
        gameVariables.goldText.innerText = player.gold.toString();
      }
    } else {
      gameVariables.text.innerText = "Your health is already maxed out!";
    }
  } else {
    gameVariables.text.innerText = "You do not have enough gold to buy health.";
  }
  checkHealth();
};

export const restoreStamina = () => {
  if (player.gold >= 10) {
    if (player.stamina < player.maxHealth) {
      if (player.maxHealth - player.stamina < 10 && player.maxHealth - player.stamina !== 10) {
        player.stamina += player.maxHealth - player.stamina;
        gameVariables.staminaText.innerText = player.stamina.toString();
      } else {
        player.stamina += 10;
        gameVariables.staminaText.innerText = player.stamina.toString();
        player.gold -= 10;
        gameVariables.goldText.innerText = player.gold.toString();
      }
    } else {
      gameVariables.text.innerText = "Your health is already maxed out!";
    }
  } else {
    gameVariables.text.innerText = "You do not have enough gold to buy health.";
  }
  checkStamina();
};
