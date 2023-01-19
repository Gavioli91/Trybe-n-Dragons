import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

const BATTLE_FINAL = -1;

class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monstersEnemies: (SimpleFighter | Fighter)[],
  ) { super(_player); }

  fight(): number {
    while (this._player.lifePoints !== BATTLE_FINAL
      && this._monstersEnemies.every(({ lifePoints }) =>
        lifePoints !== BATTLE_FINAL)
    ) {
      this._monstersEnemies.forEach((monsterEnemy) => {
        this._player.attack(monsterEnemy);
        monsterEnemy.attack(this._player);
      });
    }
    return this._player.lifePoints === BATTLE_FINAL ? -1 : 1;
  }
}

export default PVE;