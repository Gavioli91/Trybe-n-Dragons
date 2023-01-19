import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected person: Fighter) { }
  fight(): number { return this.person.lifePoints === -1 ? -1 : 1; }
}
export default Battle;
