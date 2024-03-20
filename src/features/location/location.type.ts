export type ButtonFunction = (event: MouseEvent) => void;

export type LocationType = {
  name: string;
  buttonText: string[];
  buttonFunction: ButtonFunction[];
  text: string;
};
