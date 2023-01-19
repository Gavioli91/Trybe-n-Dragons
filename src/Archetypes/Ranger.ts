import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _numberArchetypes = 0;
  private _damage: EnergyType = 'stamina';

  constructor(n: string) {
    super(n);
    Ranger._numberArchetypes += 1;
  }

  static createdArchetypeInstances(): number { return this._numberArchetypes; }

  get energyType(): EnergyType { return this._damage; }
}

export default Ranger;