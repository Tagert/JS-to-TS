import { goFight } from "../location-ui/goTo.ts";

// export const fightEnemy = (index: number): void => {
//   goFight(index);
// };

export let fighting: number;

export const fightSlime = (): void => {
  fighting = 0;
  goFight(fighting);
};

export const fightBeast = (): void => {
  fighting = 1;
  goFight(fighting);
};

export const fightDragon = (): void => {
  fighting = 2;
  goFight(fighting);
};
