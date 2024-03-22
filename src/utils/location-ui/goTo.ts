import * as gameVariables from "../dom/variables/variables.ts";
import { update } from "./updateLocation.ts";

import { locationList } from "../../features/location/locationList.ts";
import { monsterList } from "../../features/monster/monsterList.ts";
import { currentMonster } from "../../features/monster/monsterList.ts";

export function goTown(): void {
  const townSquare = locationList.find((location) => location.name === "Town Square");

  if (townSquare) {
    update(townSquare);
    gameVariables.squareImage.style.display = "block";
    gameVariables.tavernImage.style.display = "none";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
}

export function goMarket(): void {
  const marketPlace = locationList.find((location) => location.name === "Marketplace");

  if (marketPlace) {
    update(marketPlace);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "block";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
}

export function goAlchemy(): void {
  const alchemy = locationList.find((location) => location.name === "Alchemy Shop");

  if (alchemy) {
    update(alchemy);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "block";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
}

export function goArmory(): void {
  const armory = locationList.find((location) => location.name === "Armory Shop");

  if (armory) {
    update(armory);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "block";
    gameVariables.exploreImage.style.display = "none";
    gameVariables.fightingImage.style.display = "none";
  }
}

export function goExplore(): void {
  const explore = locationList.find((location) => location.name === "Explore the Ancient Forest");

  if (explore) {
    update(explore);
    gameVariables.squareImage.style.display = "none";
    gameVariables.tavernImage.style.display = "none";
    gameVariables.exploreImage.style.display = "block";
    gameVariables.fightingImage.style.display = "none";
  }
}

export const goFight = (enemyIndex: number): void => {
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
  currentMonster.health = monsterList[enemyIndex].health;
  currentMonster.maxHealth = monsterList[enemyIndex].health;
  gameVariables.monsterStats.style.display = "flex";
  gameVariables.monsterName.innerText = fullMonsterName;
  gameVariables.monsterHealthText.innerText = monsterList[enemyIndex].health.toString();
  gameVariables.maxMonsterHealth.innerText = monsterList[enemyIndex].health.toString();
  gameVariables.monsterLevelText.innerText = monsterList[enemyIndex].level.toString();
};
