import * as gameVariables from "../../dom/variables/variables.ts";
import { player } from "../../../features/player/Player";
import { goTown } from "../../location-ui/goTo";
import { checkHealth, checkStamina } from "./checkAtributeStatus";

export const restart = () => {
  player.xp = 0;
  gameVariables.xpText.innerText = player.xp.toString();
  player.health = 100;
  player.maxHealth = 100;
  gameVariables.healthText.innerText = player.health.toString();
  gameVariables.maxHealthText.innerText = player.maxHealth.toString();
  player.stamina = 50;
  player.maxStamina = 50;
  gameVariables.staminaText.innerText = player.stamina.toString();
  gameVariables.maxStaminaText.innerText = player.maxStamina.toString();
  player.gold = 50;
  gameVariables.goldText.innerText = player.gold.toString();
  player.level = 1;
  gameVariables.levelText.innerText = player.level.toString();
  player.currentWeapon = 0;
  player.inventory = ["stick"];
  goTown();
  checkHealth();
  checkStamina();
};
