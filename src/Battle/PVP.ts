import Fighter from '../Fighter';
import Battle from './Battle';

const BATTLE_FINAL = -1;

class PVP extends Battle {
  constructor(
    private _playerOne: Fighter,
    private _playerTwo: Fighter,
  ) { super(_playerOne); }

  fight(): number {
    while (this._playerOne.lifePoints !== BATTLE_FINAL
      && this._playerTwo.lifePoints !== BATTLE_FINAL
    ) {
      this._playerOne.attack(this._playerTwo);
      this._playerTwo.attack(this._playerOne); 
    }
    return this._playerOne.lifePoints === BATTLE_FINAL ? -1 : 1;
  }
}

export default PVP;