import Race from './Race';

class Halfling extends Race {
  private static _numberOfInstances = 0;
  private _maxLifePoints: number;

  constructor(n: string, dex: number) {
    super(n, dex);

    Halfling._numberOfInstances += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number { return this._numberOfInstances; }

  get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Halfling;