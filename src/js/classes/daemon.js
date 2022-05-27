/* eslint-disable no-underscore-dangle */
import Range from './range';

export default class Daemon extends Range {
  constructor(name, distance, attack, stoned) {
    super(name, distance, attack, stoned);
    this.type = 'Daemon';
    this.defence = 40;
  }
}
