import * as gameVariables from "../dom/variables/variables.ts";

import { goFight } from "../location-ui/goTo.ts";

// export const fightEnemy = (index: number): void => {
//   goFight(index);
// };

export let fighting: number;

export const fightSlime = (): void => {
  gameVariables.monsterHealthBar.style.width = "100%";
  fighting = 0;
  goFight(fighting);
};

export const fightBeast = (): void => {
  gameVariables.monsterHealthBar.style.width = "100%";
  fighting = 1;
  goFight(fighting);
};

export const fightDragon = (): void => {
  gameVariables.monsterHealthBar.style.width = "100%";
  fighting = 2;
  goFight(fighting);
};
