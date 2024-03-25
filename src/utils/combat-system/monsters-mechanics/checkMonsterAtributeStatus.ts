import { currentMonster } from "../../../features/monster/monsterList.ts";
import * as gameVariables from "../../dom/variables/variables.ts";

export const checkMonsterHealth = (): void => {
  const healthPercent: number = (currentMonster.health * 100) / currentMonster.maxHealth;
  gameVariables.monsterHealthBar.style.width = `${healthPercent}%`;
};
