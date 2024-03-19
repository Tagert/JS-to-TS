export const getMonsterAttackValue = (level: number, xp: number): number => {
  const hit: number = level * 5 - Math.floor(Math.random() * xp);
  return hit > 0 ? hit : 0;
};

export const getMonsterStaminaConsumptionValue = (level: number, xp: number): number => {
  const hit: number = level * 2 - Math.floor(Math.random() * xp);
  return hit > 0 ? hit : 0;
};
