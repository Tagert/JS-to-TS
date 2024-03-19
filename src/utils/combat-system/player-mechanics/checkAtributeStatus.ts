export const checkHealth = (health: number, maxHealth: number, healthBar: HTMLDivElement): void => {
  const healthPercent: number = (health * 100) / maxHealth;
  healthBar.style.width = `${healthPercent}%`;
};

export const checkStamina = (
  stamina: number,
  maxStamina: number,
  staminaBar: HTMLDivElement,
): void => {
  const staminaPercent: number = (stamina * 100) / maxStamina;
  staminaBar.style.width = `${staminaPercent}%`;
};
