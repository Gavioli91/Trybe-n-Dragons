import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _numberArchetypes = 0;
  private _damage: EnergyType = 'mana';

  constructor(n: string) {
    super(n);
    Necromancer._numberArchetypes += 1;
  }

  static createdArchetypeInstances(): number { return this._numberArchetypes; }

  get energyType(): EnergyType { return this._damage; }
}

export default Necromancer;