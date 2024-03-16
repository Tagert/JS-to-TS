import { LocationType, ButtonFunction } from "./location.type";

export class Location {
  name: string;
  buttonText: string[];
  buttonFunctions: ButtonFunction[];
  text: string;

  constructor({ name, buttonText, buttonFunctions, text }: LocationType) {
    this.name = name;
    this.buttonText = buttonText;
    this.buttonFunctions = buttonFunctions;
    this.text = text;
  }
}
