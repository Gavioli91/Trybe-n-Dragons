abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;