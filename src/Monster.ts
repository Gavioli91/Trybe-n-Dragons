import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints = 85;
  private _strength = 63;

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;     
    if (this._lifePoints < 1) { this._lifePoints = -1; }

    return this._lifePoints;
  }
}

export default Monster;