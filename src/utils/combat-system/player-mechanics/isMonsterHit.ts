import { player } from "../../../features/player/Player";

export const isMonsterHit = (): boolean => {
  return Math.random() > 0.2 || player.health < 20;
};
