import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const VALUE_MIN_RANDOM = 1;
const VALUE_MIN_LIFE = 1;
const VALUE_MIN_DAMAGE = 1;
const VALUE_MAX_RANDOM = 10;
const VALUE_MAX_ENERGY = 10;

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(n: string) {
    const valueMinRandomDex = getRandomInt(VALUE_MIN_RANDOM, VALUE_MAX_RANDOM);
    this._race = new Elf(n, valueMinRandomDex);
    this._archetype = new Mage(n);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(VALUE_MIN_RANDOM, VALUE_MAX_RANDOM);
    this._defense = getRandomInt(VALUE_MIN_RANDOM, VALUE_MAX_RANDOM);
    this._dexterity = valueMinRandomDex;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(VALUE_MIN_RANDOM, VALUE_MAX_RANDOM),
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const lostLifePoints = attackPoints - this._defense;

    if (lostLifePoints < VALUE_MIN_LIFE) { 
      this._lifePoints -= VALUE_MIN_DAMAGE;
    }
    if (lostLifePoints >= VALUE_MIN_LIFE) { 
      this._lifePoints -= lostLifePoints;
    }
    if (this._lifePoints < VALUE_MIN_LIFE) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(VALUE_MIN_RANDOM, VALUE_MAX_RANDOM);
    this._maxLifePoints += getRandomInt(VALUE_MIN_RANDOM, VALUE_MAX_RANDOM);
    this._defense += getRandomInt(VALUE_MIN_RANDOM, VALUE_MAX_RANDOM);
    this._dexterity += getRandomInt(VALUE_MIN_RANDOM, VALUE_MAX_RANDOM);
    this._energy.amount = VALUE_MAX_ENERGY;
  
    if (this._maxLifePoints > this.race.maxLifePoints) { 
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void { enemy.receiveDamage(this._strength * 1000); }
}

export default Character;