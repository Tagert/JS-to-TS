import * as gameVariables from "../../dom/variables/variables.ts";
import { monsterList } from "../../../features/monster/monsterList.ts";
import { fighting } from "../../fight-to/fightTo.ts";

export const dodge = () => {
  gameVariables.text.innerText =
    "You dodge the attack from the " + monsterList[fighting].name + ".";
};
