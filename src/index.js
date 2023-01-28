import Character from './character';
import Team from './team';

const person = new Character('ivan', 'Bowman');
console.log(person);

const team = new Team();
const bowman = ('ivan', 'Bowman');
const warior = ('ivan', 'Warior');

team.add(bowman);
team.add(warior);
// team.add(bowman);

// console.log(team);

// console.log(team.addAll(bowman, warior, bowman));
