import * as gameVariables from "../dom/variables/variables.ts";
import { player } from "../../features/player/Player.ts";
import { weaponList } from "../../features/items/lists/weaponList.ts";

export const buyWeapon = () => {
  if (player.currentWeapon < weaponList.length - 1) {
    if (player.gold >= 30) {
      player.gold -= 30;
      player.currentWeapon++;
      gameVariables.goldText.innerText = player.gold.toString();
      const newWeapon = weaponList[player.currentWeapon].name;
      gameVariables.text.innerText = "You now have a " + newWeapon + ".";
      player.inventory.push(newWeapon);
      gameVariables.text.innerText += " In your inventory you have: " + player.inventory;
    } else {
      gameVariables.text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    gameVariables.text.innerText = "You already have the most powerful weapon!";
    gameVariables.button2.innerText = "Sell weapon for 15 gold";
    gameVariables.button2.onclick = sellWeapon;
  }
};

export const sellWeapon = () => {
  if (player.inventory.length > 1) {
    player.gold += 15;
    gameVariables.goldText.innerText = player.gold.toString();
    const currentWeapon = player.inventory.shift();
    gameVariables.text.innerText = "You sold a " + currentWeapon + ".";
    gameVariables.text.innerText += " In your inventory you have: " + player.inventory;
  } else {
    gameVariables.text.innerText = "Don't sell your only weapon!";
  }
};
