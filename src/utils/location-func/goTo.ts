import * as gameVariables from "../dom/variables/variables.ts";
import { update } from "./updateLocation.ts";
import { locationList } from "../../features/locations/locationList.ts";

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
