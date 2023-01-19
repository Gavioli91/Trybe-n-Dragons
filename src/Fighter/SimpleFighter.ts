interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter | SimpleFighter): void,
  receiveDamage(attackPoints: number): number,
}

export default SimpleFighter;