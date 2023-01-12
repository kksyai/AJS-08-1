import Character from './character.js';
import Team from './team.js';

const person = new Character('ivan', 'Bowman');
console.log(person);

const team = new Team();
const bowman = new Character('ivan', 'Bowman');
const warior = new Character('ivan', 'Warior');

team.add(bowman);
team.add(warior);
team.add(bowman);

console.log(team);
