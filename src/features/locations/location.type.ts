export type ButtonFunction = () => void;

export type LocationType = {
  name: string;
  buttonText: string[];
  buttonFunctions: ButtonFunction[];
  text: string;
};
