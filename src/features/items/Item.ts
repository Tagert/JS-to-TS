import { ItemType } from "./item.type";

export class Item {
  name: string;
  level: number;
  power: number;
  durability?: number;
  type: string;
  price: number;

  constructor({ name, level, power, durability, type, price }: ItemType) {
    this.name = name;
    this.level = level;
    this.power = power;
    this.durability = durability;
    this.type = type;
    this.price = price;
  }
}
