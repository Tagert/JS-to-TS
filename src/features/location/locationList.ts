import { Location } from "./Location";
import { fightSlime, fightBeast } from "../../utils/fight-to/fightTo";
import { goExplore, goTown, goMarket, goAlchemy, goArmory } from "../../utils/location-ui/goTo";
import { attack } from "../../utils/combat-system/player-mechanics/playerAttack";
import { dodge } from "../../utils/combat-system/player-mechanics/dodgeAttack";
import { restoreHealth, restoreStamina } from "../../utils/shop-system/restoreAttributes";
import { restart } from "../../utils/combat-system/player-mechanics/restartGame";
import { buyWeapon, sellWeapon } from "../../utils/shop-system/buySell";

const townSquareUI = new Location({
  name: "Town Square",
  buttonText: [
    "Training Arena",
    "Patrol Quest",
    "Explore the Ancient Forest",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [goMarket, goExplore, goTown],
  text: "Welcome to the heart of Alderbrook, the bustling town square! Cobblestone streets weave through the center, adorned with vibrant market stalls and lively chatter. An ancient oak tree, its branches reaching towards the sky, stands proudly at the square's core, casting a cool shade on the gathering locals.",
});

const marketPlaceUI = new Location({
  name: "Marketplace",
  buttonText: [
    "Alchemy Shop",
    "Armory Shop",
    "Return to Marketplace",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [goAlchemy, goArmory, goTown],
  text: "Market vendors peddle their wares, offering a colorful array of fruits, trinkets, and handcrafted goods. The aroma of freshly baked pastries and savory dishes wafts from a nearby tavern, enticing passersby with the promise of a delicious meal. The rhythmic clatter of hooves echoes as a few horse-drawn carriages traverse the square, transporting both goods and eager travelers.",
});

const alchemyShopUI = new Location({
  name: "Alchemy Shop",
  buttonText: [
    "Buy 10 health (10 gold)",
    "Buy 10 stamina (10 gold)",
    "Return to Alderbrook streets",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [restoreHealth, restoreStamina, goMarket],
  text: "Welcome to \"Mystic Phial Alchemy,\" nestled within the heart of Alderbrook's winding streets. As you step through the door, you're greeted by the heady scent of herbs and the soft glow of bubbling cauldrons. The shop is a treasure trove of mystical wonders, with shelves lined with glass phials containing potions of every hue and potency.",
});

const armoryShopUI = new Location({
  name: "Armory Shop",
  buttonText: [
    "Buy a weapon (30 gold)",
    "Sell a weapon",
    "Return to Marketplace",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [buyWeapon, sellWeapon, goMarket],
  text: 'Welcome to "Steelheart Armory," a bastion of strength and craftsmanship nestled amidst the lively streets of Alderbrook. As you step through the entrance, the air is thick with the scent of oiled leather and the clang of metal on metal. Rows of gleaming weapons and polished armor adorn the walls, each piece a testament to the skill of the blacksmiths who forged them.',
});

const exploreUI = new Location({
  name: "Explore the Ancient Forest",
  buttonText: [
    "Fight Slime",
    "Fight Fanged Beast",
    "Return to Alderbrook streets",
    "Lumina Haven Marketplace",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [fightSlime, fightBeast, goTown],
  text: "The path ahead winds its way through gnarled roots and twisted vines, beckoning you deeper into the heart of this mystical realm. Every step brings you closer to the secrets that lie hidden within the ancient trees, their whispered tales echoing through the rustling leaves.",
});

const fightUI = new Location({
  name: "Fight UI",
  buttonText: [
    "Attack",
    "Dodge",
    "Run",
    "Lumina Haven Market Place",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [attack, dodge, goTown],
  text: "You are fighting a monster.",
});

const fightVictoryUI = new Location({
  name: "Victory UI",
  buttonText: [
    "Return to Alderbrook",
    "Fight again! Another!",
    "Mystery box",
    "Lumina Haven Market Place",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [goTown, fightSlime, goTown],
  text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
});

const loseUI = new Location({
  name: "Lose UI",
  buttonText: [
    "REPLAY?",
    "REPLAY?",
    "REPLAY?",
    "Lumina Haven Market Place",
    "Mystic Oak Tavern",
    "Grove's Respite Inn",
  ],
  buttonFunction: [restart, restart, restart],
  text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
});

export const locationList: Location[] = [
  townSquareUI,
  marketPlaceUI,
  alchemyShopUI,
  armoryShopUI,
  exploreUI,
  fightUI,
  fightVictoryUI,
  loseUI,
];
