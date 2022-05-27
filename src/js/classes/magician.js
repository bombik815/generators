/* eslint-disable no-underscore-dangle */
import Range from './range';

export default class Magician extends Range {
  constructor(name, distance, attack, stoned) {
    super(name, distance, attack, stoned);
    this.type = 'Magician';
    this.defence = 40;
  }
}
