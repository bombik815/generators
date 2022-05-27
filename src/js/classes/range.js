/* eslint-disable no-underscore-dangle */
import Character from './character';

export default class Range extends Character {
  constructor(name, distance, attack = 10, stoned = false) {
    super(name);
    this.distance = distance;
    this._attack = attack;
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get attack() {
    let rangeAttack = 0;
    if (+this.distance > 0 && +this.distance <= 10) {
      const attackPercent = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
      rangeAttack = this._attack * attackPercent[+this.distance - 1];
      if (this._stoned === true) {
        const stonedAttack = rangeAttack - Math.log2(+this.distance) * 5;
        return Math.round(stonedAttack);
      }
      if (this._stoned === false) {
        return rangeAttack;
      }
    }
    return this._attack;
  }

  set attack(attack) {
    this._attack = attack;
  }
}
