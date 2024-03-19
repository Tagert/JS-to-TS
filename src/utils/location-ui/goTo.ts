import * as gameVariables from "../dom/variables/variables.ts";
import { update } from "./updateLocation.ts";

import { locationList } from "../../features/location/locationList.ts";
import { monsterList } from "../../features/monster/monsterList.ts";

export let fighting: number;
export let monsterHealth: number;

export const goTown = (): void => {
  const townSquare = locationList.find((location) => location.name === "Town Square");

  if (townSquare) {
    update(townSquare);
    gameVariables.exploreImage.style.display = "block";
    gameVariables.tavernImage.style.display = "none";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
};

export const goMarket = (): void => {
  const marketPlace = locationList.find((location) => location.name === "Market Place");

  if (marketPlace) {
    update(marketPlace);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "block";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
};

export const goExplore = (): void => {
  const explore = locationList.find((location) => location.name === "Explore the Ancient Forest");

  if (explore) {
    update(explore);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "none";
    gameVariables.exploreImage.style.display = "block";
    gameVariables.fightingImage.style.display = "none";
  }
};

export const goFight = (enemyIndex: number): void => {
  fighting = enemyIndex;

  const fight = locationList.find((location) => location.name === "Fight UI");

  if (fight) {
    update(fight);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "none";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "block";
  }

  const monsterNameNotModified = monsterList[enemyIndex].name;

  const FirstLetterMonsterName = monsterNameNotModified.charAt(0).toUpperCase();
  const remainingLetters = monsterNameNotModified.slice(1);
  const fullMonsterName = FirstLetterMonsterName + remainingLetters;
  monsterHealth = monsterList[enemyIndex].health;
  gameVariables.monsterStats.style.display = "flex";
  gameVariables.monsterName.innerText = fullMonsterName;
  gameVariables.monsterHealthText.innerText = monsterList[enemyIndex].health.toString();
  gameVariables.maxMonsterHealth.innerText = monsterList[enemyIndex].health.toString();
  gameVariables.monsterLevelText.innerText = monsterList[enemyIndex].level.toString();
};
