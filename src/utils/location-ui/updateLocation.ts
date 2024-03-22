import * as gameVariables from "../dom/variables/variables.ts";
import { Location } from "../../features/location/Location.ts";

export const update = (location: Location): void => {
  gameVariables.monsterStats.style.display = "none";
  gameVariables.button1.innerText = location.buttonText[0];
  gameVariables.button2.innerText = location.buttonText[1];
  gameVariables.button3.innerText = location.buttonText[2];
  gameVariables.button4.innerText = location.buttonText[3];
  gameVariables.button5.innerText = location.buttonText[4];
  gameVariables.button6.innerText = location.buttonText[5];

  gameVariables.button1.onclick = location.buttonFunction[0];
  gameVariables.button2.onclick = location.buttonFunction[1];
  gameVariables.button3.onclick = location.buttonFunction[2];
  gameVariables.button4.onclick = location.buttonFunction[3];
  gameVariables.button5.onclick = location.buttonFunction[4];
  gameVariables.button6.onclick = location.buttonFunction[5];

  gameVariables.text.innerText = location.text;

  // if (location.name === "store") {
  //   text.innerText += "\nAvailable items in the shop:\n";
  //   shopItems.forEach((item, index) => {
  //     text.innerText += `${index + 1}. ${item.name} - ${item.price} gold\n`;
  //   });
};
