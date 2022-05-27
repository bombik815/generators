import Bowerman from './classes/bowerman';
import Magician from './classes/magician';
import Swordsman from './classes/swordsman';
import Daemon from './classes/daemon';
import Zombie from './classes/zombie';
import Undead from './classes/undead';
import Team from './classes/team';

const archer = new Bowerman('archer');
const mag = new Magician('mag');
const warrior = new Swordsman('war');
const demon = new Daemon('demon');
const shon = new Zombie('shon');
const dead = new Undead('dead');
const myTeam = new Team();
myTeam.addAll(archer, mag, warrior, dead, demon, shon);
console.log('app worked');
for (const p of myTeam) {
  console.log(p);
}
