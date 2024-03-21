import * as gameVariables from "../../dom/variables/variables.ts";
import { player } from "../../../features/player/Player.ts";
import { monsterList } from "../../../features/monster/monsterList.ts";
import { fighting } from "../../fight-to/fightTo.ts";
import { locationList } from "../../../features/location/locationList.ts";
import { update } from "../../location-ui/updateLocation.ts";
import { levelUp } from "../player-mechanics/levelUp.ts";

export const defeatedMonster = (): void => {
  player.gold += Math.floor(monsterList[fighting].level * 6.7);
  player.xp += monsterList[fighting].level;
  gameVariables.goldText.innerText = player.gold.toString();
  gameVariables.xpText.innerText = player.xp.toString();
  levelUp();

  const defeated = locationList.find((location) => location.name === "Victory UI");

  if (defeated) {
    update(defeated);
  }
};
