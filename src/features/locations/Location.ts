import { LocationType, ButtonFunction } from "./location.type";

export class Location {
  name: string;
  buttonText: string[];
  buttonFunction: ButtonFunction[];
  text: string;

  constructor({ name, buttonText, buttonFunction, text }: LocationType) {
    this.name = name;
    this.buttonText = buttonText;
    this.buttonFunction = buttonFunction;
    this.text = text;
  }
}
