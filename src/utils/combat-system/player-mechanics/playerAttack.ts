import * as gameVariables from "../../dom/variables/variables.ts";

import { monsterList } from "../../../features/monster/monsterList.ts";
import { weaponList } from "../../../features/items/lists/weaponList.ts";

import {
  getMonsterAttackValue,
  getMonsterStaminaConsumptionValue,
} from "../monsters-mechanics/getMonsterValue.ts";

import { isMonsterHit } from "./isMonsterHit.ts";
import { checkHealth, checkStamina } from "./checkAtributeStatus.ts";
import { fightVictory, fightLose } from "./outcomeFightStatus.ts";

import { player } from "../../../features/player/Player.ts";
import { fighting } from "../../fight-to/fightTo.ts";
import { currentMonster } from "../../../features/monster/monsterList.ts";
import { defeatedMonster } from "../monsters-mechanics/defeatedMonster.ts";
import { checkMonsterHealth } from "../monsters-mechanics/checkMonsterAtributeStatus.ts";

export const attack = (): void => {
  gameVariables.text.innerText = "The " + monsterList[fighting].name + " attacks.";
  gameVariables.text.innerText +=
    " You attack it with your " + weaponList[player.currentWeapon].name + ".";
  player.health -= getMonsterAttackValue(monsterList[fighting].level, player.xp);
  player.stamina -= getMonsterStaminaConsumptionValue(monsterList[fighting].level, player.xp);

  if (isMonsterHit()) {
    currentMonster.health -=
      weaponList[player.currentWeapon].power + Math.floor(Math.random() * player.xp) + 1;
  } else {
    gameVariables.text.innerText += " You miss.";
  }

  gameVariables.healthText.innerText = player.health.toString();
  gameVariables.monsterHealthText.innerText = currentMonster.health.toString();
  gameVariables.staminaText.innerText = player.stamina.toString();

  if (player.health <= 0) {
    fightLose();
  } else if (currentMonster.health <= 0) {
    fighting === 2 ? fightVictory() : defeatedMonster();
  }
  if (Math.random() <= 0.1 && player.inventory.length !== 1) {
    gameVariables.text.innerText += " Your " + player.inventory.pop() + " breaks.";
    player.currentWeapon--;
  }

  checkHealth();
  checkStamina();
  checkMonsterHealth();
};
