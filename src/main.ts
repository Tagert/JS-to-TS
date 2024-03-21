import * as gameVariables from "./utils/dom/variables/variables.ts";
import { goExplore, goMarket, goTown } from "./utils/location-ui/goTo.ts";

gameVariables.button1.addEventListener("click", goMarket);
gameVariables.button2.addEventListener("click", goExplore);
gameVariables.button3.addEventListener("click", goTown);
