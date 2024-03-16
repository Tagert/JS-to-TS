export type MonsterRarity =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendry"
  | "Mythic";

export type MonsterType = {
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  type: MonsterRarity;
};
