import { locationList } from "../../../features/location/locationList";
import { update } from "../../location-ui/updateLocation";

export const fightVictory = (): void => {
  const victory = locationList.find((location) => location.name === "Victory UI");

  if (victory) {
    update(victory);
  }
};

export const fightLose = (): void => {
  const lose = locationList.find((location) => location.name === "Lose UI");

  if (lose) {
    update(lose);
  }
};
